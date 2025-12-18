(() => {
  const debugToggle = document.querySelector('[data-debug-toggle]');
  const tooltip = document.createElement('div');
  tooltip.className = 'debug-tooltip';
  tooltip.setAttribute('aria-live', 'polite');
  document.body.appendChild(tooltip);

  let debugEnabled = false;

  const moveHandler = (event) => {
    if (!debugEnabled) return;
    const target = event.target;
    if (!target || tooltip.contains(target)) return;
    const tagLabel = target.tagName ? target.tagName.toLowerCase() : '';
    const typeLabel = target.constructor && target.constructor.name ? target.constructor.name : 'élément';
    const descriptor = tagLabel ? `${typeLabel} — <${tagLabel}>` : typeLabel;
    tooltip.textContent = descriptor;
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

  const navBrand = document.querySelector('.nav-brand');
  if (navBrand && !navBrand.querySelector('.brand-popover')) {
    const popover = document.createElement('div');
    popover.className = 'brand-popover';
    popover.innerHTML = `
      <div class="brand-popover__media">
        <img src="images/batiment73.png" alt="Façade du siège ID GROUP">
      </div>
      <div class="brand-popover__content">
        <p class="brand-popover__title">ID GROUP</p>
        <p class="brand-popover__address">73 avenue des Peupliers, 59650 Villeneuve-d'Ascq</p>
      </div>
    `;
    navBrand.appendChild(popover);
  }
})();
