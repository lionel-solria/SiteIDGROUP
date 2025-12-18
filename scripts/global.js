(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;

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
    const target = event.target;
    if (!target || tooltip.contains(target)) return;
    const labeledTarget = target.closest('[data-debug-label]') || target;
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

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }
})();
