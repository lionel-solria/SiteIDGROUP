(() => {
  const toggle = document.getElementById('debugToggle');
  if (!toggle) return;

  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('role', 'status');
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugOn = false;

  const updateState = () => {
    document.body.classList.toggle('debug-active', debugOn);
    toggle.setAttribute('aria-pressed', debugOn ? 'true' : 'false');
    toggle.title = debugOn ? 'Désactiver le mode debug' : 'Activer le mode debug';
    if (!debugOn) {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translate(-50%, 10px)';
    }
  };

  toggle.addEventListener('click', () => {
    debugOn = !debugOn;
    updateState();
  });

  document.addEventListener('pointermove', (event) => {
    if (!debugOn) return;
    const tag = event.target.tagName.toLowerCase();
    tooltip.textContent = `<${tag}>`;
    tooltip.style.left = `${event.clientX + 16}px`;
    tooltip.style.top = `${event.clientY + 18}px`;
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translate(0, 0)';
  });

  document.addEventListener('pointerleave', () => {
    if (!debugOn) return;
    tooltip.style.opacity = '0';
  });

  updateState();
})();
