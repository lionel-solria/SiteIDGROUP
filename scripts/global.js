(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let lastHighlighted = null;

  const describeTarget = (target) => {
    const tagLabel = target.tagName ? target.tagName.toLowerCase() : 'élément';
    const readableName = target.dataset?.debugLabel
      || (target.getAttribute && target.getAttribute('aria-label'))
      || (target.getAttribute && target.getAttribute('title'))
      || `Balise ${tagLabel}`;
    const typeLabel = target.getAttribute && (target.getAttribute('type') || target.getAttribute('role'));
    const identifier = target.id
      ? `#${target.id}`
      : (target.classList && target.classList.length ? `.${target.classList[0]}` : '');

    const details = [tagLabel, typeLabel, identifier].filter(Boolean).join(' · ');
    return details ? `${readableName} · ${details}` : readableName;
  };

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target || tooltip.contains(target)) return;
    const elementTarget = target.nodeType === 1 ? target : target.parentElement;
    if (!elementTarget) return;
    const highlightTarget = elementTarget.closest('[data-debug-label]') || elementTarget;
    tooltip.textContent = describeTarget(highlightTarget);
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;

    if (lastHighlighted && lastHighlighted !== highlightTarget) {
      lastHighlighted.classList.remove('debug-highlighted');
    }

    if (highlightTarget.classList && !highlightTarget.classList.contains('debug-highlighted')) {
      highlightTarget.classList.add('debug-highlighted');
    }

    lastHighlighted = highlightTarget.classList ? highlightTarget : null;
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
    if (lastHighlighted) {
      lastHighlighted.classList.remove('debug-highlighted');
      lastHighlighted = null;
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
    if (debugToggle) {
      debugToggle.setAttribute('aria-pressed', 'false');
      debugToggle.classList.remove('primary');
    }
    if (lastHighlighted) {
      lastHighlighted.classList.remove('debug-highlighted');
      lastHighlighted = null;
    }
  };

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }
})();
