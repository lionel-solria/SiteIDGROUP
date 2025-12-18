(() => {
  const debugButtons = document.querySelectorAll('[data-debug-toggle]');
  const body = document.body;

  const syncState = () => {
    const isActive = body.classList.contains('is-debug');
    debugButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  debugButtons.forEach((button) => {
    button.addEventListener('click', () => {
      body.classList.toggle('is-debug');
      syncState();
    });
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.site-nav a[href]');

  navLinks.forEach((link) => {
    const target = link.getAttribute('href') || '';
    const targetPath = target.split('#')[0];
    if (!targetPath && currentPath === 'index.html') {
      link.classList.add('is-current');
    } else if (targetPath === currentPath) {
      link.classList.add('is-current');
    }
  });
})();
