(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;
  const navBrand = document.querySelector('.nav-brand');

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target || tooltip.contains(target)) return;
    const tagLabel = target.tagName ? target.tagName.toLowerCase() : '';
    const typeLabel = target.getAttribute && target.getAttribute('type');
    const descriptor = typeLabel ? ` – type="${typeLabel}"` : '';
    tooltip.textContent = `<${tagLabel}>${descriptor}`;
    tooltip.style.display = 'block';
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
  };

  const leaveHandler = () => {
    tooltip.style.display = 'none';
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
  };

  if (debugToggle) {
    debugToggle.addEventListener('click', (event) => {
      event.preventDefault();
      debugEnabled ? disableDebug() : enableDebug();
    });
  }

  if (navBrand) {
    const popover = document.createElement('div');
    popover.className = 'brand-popover';
    popover.innerHTML = `
      <div class="brand-popover__media">
        <img src="images/batiment73.png" alt="Illustration du siège ID GROUP">
      </div>
      <div class="brand-popover__text">
        <p class="brand-popover__title">ID GROUP</p>
        <p class="brand-popover__address">73 rue du Bâtiment<br>59000 Lille · France</p>
      </div>
    `;
    navBrand.appendChild(popover);
  }
})();
