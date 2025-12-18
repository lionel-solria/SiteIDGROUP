(function () {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('role', 'status');
  tooltip.textContent = 'debug';
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  let highlighted;

  const moveTooltip = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target || target === document.body || target === document.documentElement) {
      tooltip.style.opacity = '0';
      return;
    }

    if (highlighted && highlighted !== target) {
      highlighted.classList.remove('debug-highlight');
    }

    highlighted = target;
    highlighted.classList.add('debug-highlight');

    tooltip.textContent = `<${target.tagName.toLowerCase()}>`;
    tooltip.style.opacity = '1';
    tooltip.style.left = `${event.clientX}px`;
    tooltip.style.top = `${event.clientY}px`;
  };

  const hideTooltip = () => {
    tooltip.style.opacity = '0';
    if (highlighted) {
      highlighted.classList.remove('debug-highlight');
      highlighted = null;
    }
  };

  const enableDebug = () => {
    debugEnabled = true;
    document.body.classList.add('debug-mode');
    debugToggle?.setAttribute('aria-pressed', 'true');
    document.addEventListener('mousemove', moveTooltip);
    document.addEventListener('mouseout', hideTooltip);
  };

  const disableDebug = () => {
    debugEnabled = false;
    document.body.classList.remove('debug-mode');
    debugToggle?.setAttribute('aria-pressed', 'false');
    hideTooltip();
    document.removeEventListener('mousemove', moveTooltip);
    document.removeEventListener('mouseout', hideTooltip);
  };

  debugToggle?.addEventListener('click', () => {
    if (debugEnabled) {
      disableDebug();
    } else {
      enableDebug();
    }
  });
})();
