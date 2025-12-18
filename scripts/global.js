(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;

  const setHighlight = (element) => {
    if (highlightedElement === element) return;
    if (highlightedElement) highlightedElement.classList.remove('debug-highlight');
    highlightedElement = element;
    if (element) element.classList.add('debug-highlight');
  };

  const buildLabel = (target) => {
    const labeledElement = target.closest('[data-debug-label]');
    const friendlyLabel = labeledElement ? labeledElement.dataset.debugLabel : null;
    const tagLabel = target.tagName ? target.tagName.toLowerCase() : '';
    const typeLabel = target.getAttribute && (target.getAttribute('type') || target.getAttribute('role'));
    const elementType = typeLabel || (target.constructor && target.constructor.name ? target.constructor.name : '');
    const identifier = target.id ? `#${target.id}` : (target.classList && target.classList.length ? `.${target.classList[0]}` : '');

    if (friendlyLabel) {
      return {
        text: `Bloc : ${friendlyLabel}`,
        highlightTarget: labeledElement
      };
    }

    const parts = [`<${tagLabel}>`];
    if (elementType) parts.push(`type="${elementType}"`);
    if (identifier) parts.push(identifier);
    return {
      text: parts.join(' · '),
      highlightTarget: target
    };
  };

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target) return;
    const element = target.nodeType === 1 ? target : target.parentElement;
    if (!element || tooltip.contains(element)) return;
    const { text, highlightTarget } = buildLabel(element);
    tooltip.textContent = text;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    setHighlight(highlightTarget);
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    setHighlight(null);
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
    setHighlight(null);
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
