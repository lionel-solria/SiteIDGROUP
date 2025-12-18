(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlightedElement = null;

  const getReadableLabel = (target) => {
    if (!target) return '';
    const dataLabel = target.dataset && target.dataset.debugLabel;
    if (dataLabel) return dataLabel;
    const ariaLabel = target.getAttribute && target.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;
    const altText = target.getAttribute && target.getAttribute('alt');
    if (altText) return altText;
    const text = target.textContent ? target.textContent.trim() : '';
    if (text) return text.slice(0, 80);
    return target.tagName ? `Élément ${target.tagName.toLowerCase()}` : 'Élément';
  };

  const highlightTarget = (target) => {
    if (highlightedElement && highlightedElement !== target) {
      highlightedElement.classList.remove('debug-highlight');
    }
    highlightedElement = target;
    if (highlightedElement && !tooltip.contains(highlightedElement)) {
      highlightedElement.classList.add('debug-highlight');
    }
  };

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target || tooltip.contains(target)) return;
    const tagLabel = target.tagName ? target.tagName.toLowerCase() : '';
    const typeLabel = target.getAttribute && (target.getAttribute('type') || target.getAttribute('role'));
    const identifier = target.id ? `#${target.id}` : (target.classList && target.classList.length ? `.${target.classList[0]}` : '');
    const readable = getReadableLabel(target);
    const meta = [tagLabel, typeLabel, identifier].filter(Boolean).join(' · ');
    tooltip.textContent = meta ? `${readable} (${meta})` : readable;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    highlightTarget(target);
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    if (highlightedElement) {
      highlightedElement.classList.remove('debug-highlight');
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
    document.removeEventListener('mousemove', moveHandler, true);
    document.removeEventListener('mouseleave', leaveHandler, true);
    if (highlightedElement) {
      highlightedElement.classList.remove('debug-highlight');
      highlightedElement = null;
    }
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
