(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;
  let currentElementName = '';

  const describeElement = (element) => {
    if (!element) return { description: '', name: '' };
    const tagLabel = element.tagName ? element.tagName.toLowerCase() : '';
    const typeLabel = element.getAttribute && (element.getAttribute('type') || element.getAttribute('role'));
    const identifier = element.id ? `#${element.id}` : (element.classList && element.classList.length ? `.${element.classList[0]}` : '');
    const label = element.dataset && element.dataset.debugLabel
      ? element.dataset.debugLabel
      : (element.getAttribute && (element.getAttribute('aria-label') || element.getAttribute('name'))) || '';
    const parts = [];
    if (label) parts.push(label);
    if (tagLabel) parts.push(`<${tagLabel}>`);
    if (typeLabel) parts.push(`type="${typeLabel}"`);
    if (identifier && identifier !== label) parts.push(identifier);
    const name = label || identifier || tagLabel || 'élément';
    return { description: parts.join(' · '), name };
  };

  const pickDebugElement = (event) => {
    if (!event) return null;
    const stack = document.elementsFromPoint(event.clientX, event.clientY) || [];
    const labeled = stack.find(el => el.dataset && el.dataset.debugLabel);
    if (labeled) return labeled;
    const named = stack.find(el => el.getAttribute && (el.getAttribute('aria-label') || el.id));
    if (named) return named;
    return event.target ? (event.target.closest('[data-debug-label]') || event.target) : null;
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
    const target = pickDebugElement(event);
    if (!target || tooltip.contains(target)) return;
    const { description, name } = describeElement(target);
    tooltip.textContent = description;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    setHighlight(target);
    currentElementName = name;
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    if (highlightedElement) {
      highlightedElement.removeAttribute('data-debug-active');
      highlightedElement = null;
    }
    currentElementName = '';
  };

  const copyCurrentLabel = () => {
    if (!currentElementName || !highlightedElement) return;
    const { description } = describeElement(highlightedElement);
    const updateTooltipMessage = () => {
      tooltip.textContent = description ? `${description} · (copié)` : `${currentElementName} (copié)`;
    };
    const fallbackCopy = () => {
      const textarea = document.createElement('textarea');
      textarea.value = currentElementName;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      updateTooltipMessage();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentElementName).then(updateTooltipMessage).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  };

  const enableDebug = () => {
    debugEnabled = true;
    document.body.classList.add('debug-mode');
    tooltip.style.display = 'block';
    document.addEventListener('mousemove', moveHandler, true);
    document.addEventListener('mouseleave', leaveHandler, true);
    document.addEventListener('keydown', keyHandler, true);
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
    document.removeEventListener('keydown', keyHandler, true);
    if (debugToggle) {
      debugToggle.setAttribute('aria-pressed', 'false');
      debugToggle.classList.remove('primary');
    }
  };

  const keyHandler = (event) => {
    if (!debugEnabled) return;
    if (event.key && event.key.toLowerCase() === 'c' && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      copyCurrentLabel();
    }
  };

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }
})();
