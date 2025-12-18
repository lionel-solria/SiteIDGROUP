(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;

  const resolveDebugTarget = (event) => {
    const stack = document.elementsFromPoint(event.clientX, event.clientY) || [];
    const labeledFromPoint = stack.find((el) => el instanceof Element && el.dataset && el.dataset.debugLabel);
    const fallback = event.target && event.target instanceof Element ? event.target : null;
    if (labeledFromPoint) return labeledFromPoint;
    if (fallback && fallback.dataset && fallback.dataset.debugLabel) return fallback;
    const closestLabeled = fallback ? fallback.closest('[data-debug-label]') : null;
    return closestLabeled || fallback;
  };

  const describeElement = (element) => {
    if (!element) return '';
    if (element.dataset && element.dataset.debugLabel) return element.dataset.debugLabel;
    if (element.getAttribute) {
      const aria = element.getAttribute('aria-label');
      if (aria) return aria;
      const name = element.getAttribute('name');
      if (name) return name;
    }
    if (element.id) return `#${element.id}`;
    if (element.classList && element.classList.length) return `.${element.classList[0]}`;
    return element.tagName ? element.tagName.toLowerCase() : 'élément';
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

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const labeledTarget = resolveDebugTarget(event);
    if (!labeledTarget || tooltip.contains(labeledTarget)) return;
    const tagLabel = labeledTarget.tagName ? labeledTarget.tagName.toLowerCase() : '';
    const typeLabel = labeledTarget.getAttribute && (labeledTarget.getAttribute('type') || labeledTarget.getAttribute('role'));
    const elementType = typeLabel || (labeledTarget.constructor && labeledTarget.constructor.name ? labeledTarget.constructor.name : '');
    const identifier = labeledTarget.id ? `#${labeledTarget.id}` : (labeledTarget.classList && labeledTarget.classList.length ? `.${labeledTarget.classList[0]}` : '');
    const label = labeledTarget.dataset && labeledTarget.dataset.debugLabel ? labeledTarget.dataset.debugLabel : '';
    const parts = [];
    if (label) parts.push(label);
    if (tagLabel) parts.push(`<${tagLabel}>`);
    if (elementType) parts.push(`type="${elementType}"`);
    if (identifier) parts.push(identifier);
    tooltip.textContent = parts.join(' · ');
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    setHighlight(labeledTarget);
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    if (highlightedElement) {
      highlightedElement.removeAttribute('data-debug-active');
      highlightedElement = null;
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

  const copyCurrentLabel = async () => {
    if (!debugEnabled || !highlightedElement) return;
    const labelToCopy = describeElement(highlightedElement);
    if (!labelToCopy) return;
    try {
      await navigator.clipboard.writeText(labelToCopy);
      tooltip.textContent = `${labelToCopy} (copié)`;
    } catch (error) {
      console.warn('Impossible de copier le nom de l\'objet :', error);
    }
  };

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }

  window.addEventListener('keydown', (event) => {
    if (event.key?.toLowerCase() !== 'c') return;
    const activeTag = document.activeElement && document.activeElement.tagName;
    const isInputting = activeTag && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag);
    if (isInputting) return;
    copyCurrentLabel();
  });
})();
