(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;
  let lastPointer = { x: 0, y: 0 };

  const getLabelForElement = (element) => {
    if (!element) return '';
    if (element.dataset && element.dataset.debugLabel) return element.dataset.debugLabel;
    if (element.id) return `#${element.id}`;
    if (element.classList && element.classList.length) return `.${element.classList[0]}`;
    return element.tagName ? element.tagName.toLowerCase() : '';
  };

  const setHighlight = (element) => {
    if (highlightedElement && highlightedElement !== element) {
      highlightedElement.removeAttribute('data-debug-active');
    }
    highlightedElement = element;
    if (highlightedElement) {
      highlightedElement.setAttribute('data-debug-active', 'true');
    }
  };

  const getPreciseTarget = (clientX, clientY) => {
    const stack = (document.elementsFromPoint(clientX, clientY) || []).filter(
      (el) => el && el !== tooltip && !tooltip.contains(el)
    );
    const labeled = stack.find((el) => el.dataset && el.dataset.debugLabel);
    return labeled || stack[0] || null;
  };

  const updateTooltip = (element, coords) => {
    const tagLabel = element && element.tagName ? element.tagName.toLowerCase() : '';
    const typeLabel =
      element &&
      element.getAttribute &&
      (element.getAttribute('type') || element.getAttribute('role'));
    const elementType =
      typeLabel || (element && element.constructor && element.constructor.name ? element.constructor.name : '');
    const identifier =
      element && element.id
        ? `#${element.id}`
        : element && element.classList && element.classList.length
          ? `.${element.classList[0]}`
          : '';
    const label = getLabelForElement(element);
    const parts = [];
    if (label) parts.push(label);
    if (tagLabel) parts.push(`<${tagLabel}>`);
    if (elementType) parts.push(`type="${elementType}"`);
    if (identifier && identifier !== label) parts.push(identifier);
    tooltip.textContent = parts.join(' · ');
    tooltip.style.display = 'block';
    tooltip.style.left = `${coords.x + 12}px`;
    tooltip.style.top = `${coords.y + 12}px`;
  };

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = getPreciseTarget(event.clientX, event.clientY);
    if (!target) return;
    lastPointer = { x: event.clientX, y: event.clientY };
    updateTooltip(target, lastPointer);
    setHighlight(target);
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    if (highlightedElement) {
      highlightedElement.removeAttribute('data-debug-active');
      highlightedElement = null;
    }
  };

  const copyHighlightedLabel = async () => {
    if (!highlightedElement) return;
    const label = getLabelForElement(highlightedElement);
    if (!label) return;
    const applyFeedback = () => {
      tooltip.textContent = `${label} (copié)`;
      setTimeout(() => {
        if (highlightedElement) {
          updateTooltip(highlightedElement, lastPointer);
        }
      }, 900);
    };

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(label);
        applyFeedback();
        return;
      }
    } catch (error) {
      // Fallback handled below
    }

    const helper = document.createElement('textarea');
    helper.value = label;
    helper.style.position = 'fixed';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand('copy');
      applyFeedback();
    } catch (error) {
      console.warn('Impossible de copier le label', error);
    } finally {
      document.body.removeChild(helper);
    }
  };

  const enableDebug = () => {
    debugEnabled = true;
    document.body.classList.add('debug-mode');
    tooltip.style.display = 'block';
    document.addEventListener('mousemove', moveHandler, true);
    document.addEventListener('mouseleave', leaveHandler, true);
    if (debugToggle) {
      debugToggle.setAttribute('aria-pressed', 'true');
      debugToggle.classList.add('primary');
    }
  };

  const disableDebug = () => {
    debugEnabled = false;
    document.body.classList.remove('debug-mode');
    tooltip.style.display = 'none';
    if (highlightedElement) {
      highlightedElement.removeAttribute('data-debug-active');
      highlightedElement = null;
    }
    document.removeEventListener('mousemove', moveHandler, true);
    document.removeEventListener('mouseleave', leaveHandler, true);
    if (debugToggle) {
      debugToggle.setAttribute('aria-pressed', 'false');
      debugToggle.classList.remove('primary');
    }
  };

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }

  window.addEventListener(
    'keydown',
    (event) => {
      if (!debugEnabled) return;
      if (event.key.toLowerCase() !== 'c') return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const active = document.activeElement;
      const isTypingContext =
        active &&
        ['INPUT', 'TEXTAREA'].includes(active.tagName) &&
        !active.hasAttribute('readonly') &&
        !active.hasAttribute('disabled');
      if (isTypingContext) return;
      event.preventDefault();
      if (!highlightedElement) {
        const target = getPreciseTarget(lastPointer.x, lastPointer.y);
        if (target) setHighlight(target);
      }
      copyHighlightedLabel();
    },
    true
  );
})();
