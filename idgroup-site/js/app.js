document.addEventListener('DOMContentLoaded', async () => {
  // Inject Header and Footer if they exist
  await injectCommonElements();

  // Initialize I18n
  await window.I18n.init();

  // Initialize UI components
  initMobileMenu();
  initHotspots();
  initContactForm();

  // Specific page logic
  if (document.querySelector('.hero-slider')) {
    initSlider();
  }

  if (window.location.pathname.includes('actus.html')) {
    loadNews();
  }

  if (window.location.pathname.includes('article.html')) {
    loadArticle();
  }
});

async function injectCommonElements() {
  const headerHTML = `
    <header class="site-header">
      <div class="header-container">
        <a href="index.html" class="logo">ID <span>GROUP</span></a>

        <div class="burger-menu" id="burger-btn">☰</div>

        <nav class="main-nav" id="main-nav">
          <ul>
            <li><a href="le-groupe.html" data-i18n="global.nav.group">Le Groupe</a></li>
            <li><a href="rse.html" data-i18n="global.nav.commitments">Engagements</a></li>
            <li><a href="solutions.html" data-i18n="global.nav.solutions">Solutions</a></li>
            <li><a href="actus.html" data-i18n="global.nav.news">Actualités</a></li>
            <li><a href="contact.html" data-i18n="global.nav.contact">Contact</a></li>
            <li><a href="espace-client.html" class="btn-cta" data-i18n="global.nav.client_space">Espace Client</a></li>
            <li class="lang-selector">
              <select id="lang-select">
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-content">
        <div class="footer-col">
          <h3>ID GROUP</h3>
          <p>Wormhout, France</p>
        </div>
        <div class="footer-col">
          <ul class="footer-links">
            <li><a href="#" data-i18n="global.footer.legal">Mentions légales</a></li>
            <li><a href="contact.html" data-i18n="global.footer.contact">Contact</a></li>
            <li><a href="sitemap.xml" data-i18n="global.footer.sitemap">Plan du site</a></li>
          </ul>
        </div>
        <div class="footer-col">
           <h4 data-i18n="global.footer.follow_us">Suivez-nous</h4>
           <!-- Social icons placeholder -->
           <div class="socials">LinkedIn | Facebook</div>
        </div>
      </div>
    </footer>
  `;

  // Insert Header at top of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Insert Footer at end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function initMobileMenu() {
  const btn = document.getElementById('burger-btn');
  const nav = document.getElementById('main-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('active');
      btn.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
  }
}

function initSlider() {
  // Desktop hover logic is handled by CSS mostly, but we can add click for mobile fallback if needed
  // For now, CSS handles the expansion.
  // We can add logic to ensure only one is active on touch devices if hover is tricky

  const blades = document.querySelectorAll('.blade');
  blades.forEach(blade => {
    blade.addEventListener('click', (e) => {
        // Navigate on click/tap if it's a link or button inside, handled naturally
        // If the whole blade is clickable to go to the page:
        const link = blade.getAttribute('data-link');
        if (link) {
            window.location.href = link + '?lang=' + window.I18n.currentLang;
        }
    });
  });
}

function initHotspots() {
  const points = document.querySelectorAll('.hotspot-point');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-body');
  const closeModal = document.querySelector('.close-modal');

  if (points.length > 0 && modal) {
    points.forEach(point => {
      point.addEventListener('click', () => {
        const info = point.getAttribute('data-info');
        if (modalContent) modalContent.textContent = info; // In real app, load HTML/structured data
        modal.classList.add('active');
      });
    });

    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
  }
}

function loadNews() {
  const container = document.getElementById('news-list');
  if (!container) return;

  // Use the loaded I18n data
  const articles = window.I18n.data.articles || {};
  const ids = Object.keys(articles);

  if (ids.length === 0) {
      container.innerHTML = '<p>No news available.</p>';
      return;
  }

  container.innerHTML = ids.map(id => {
      const item = articles[id];
      // Truncate content for summary
      const summary = item.content ? item.content.substring(0, 100) + '...' : '';
      return `
        <div class="card">
        <h4>${item.title}</h4>
        <small>${item.date}</small>
        <p>${summary}</p>
        <a href="article.html?id=${id}" class="btn-link">Lire la suite</a>
        </div>
      `;
  }).join('');

  // Re-update links to add lang param
  window.I18n.updateLinks();
}

function loadArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const container = document.getElementById('article-content');

    if (!id || !window.I18n.data.articles || !window.I18n.data.articles[id]) {
        if(container) container.innerHTML = '<p>Article introuvable.</p>';
        return;
    }

    const article = window.I18n.data.articles[id];
    document.title = article.title + ' - ID GROUP';

    if (container) {
        container.innerHTML = `
            <a href="actus.html" class="btn-link">← Retour</a>
            <br><br>
            <h1>${article.title}</h1>
            <p><i>${article.date}</i></p>
            <hr>
            <p>${article.content}</p>
        `;
    }
    window.I18n.updateLinks();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Validate
            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;

            if (name && email) {
                form.innerHTML = `<div class="success-message" data-i18n="contact.success">${window.I18n.resolveKey('contact.success') || 'Merci !'}</div>`;
            }
        });
    }
}
