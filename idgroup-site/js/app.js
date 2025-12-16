(function() {
  const selectors = {
    header: '#site-header',
    footer: '#site-footer',
    newsList: '#news-list',
    newsFilter: '#news-filter',
    articleContainer: '#article-container',
    contactForm: '#contact-form',
    contactSuccess: '#contact-success',
    funFacts: '#fun-facts',
    wormhout: '#wormhout-figures',
    rseMetrics: '#rse-metrics'
  };

  function buildHeader() {
    return `
    <div class="container navbar">
      <a class="brand" href="./index.html"><span aria-hidden="true">✏️</span><span data-i18n="nav.brand">ID GROUP</span></a>
      <button class="burger" aria-label="Ouvrir le menu" id="burger-btn">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="./le-groupe.html" data-i18n="nav.group">Le Groupe</a></li>
        <li><a href="./rse.html" data-i18n="nav.rse">Nos engagements</a></li>
        <li><a href="./solutions.html" data-i18n="nav.solutions">Nos solutions</a></li>
        <li><a href="./actus.html" data-i18n="nav.news">Actualités</a></li>
        <li><a href="./contact.html" data-i18n="nav.contact">Contact</a></li>
        <li><a class="cta-btn" href="./espace-client.html" data-i18n="nav.client">Espace Client</a></li>
      </ul>
      <div class="lang-switcher" aria-label="Sélecteur de langue">
        <button type="button" data-lang="fr">FR</button>
        <button type="button" data-lang="en">EN</button>
        <button type="button" data-lang="de">DE</button>
      </div>
    </div>`;
  }

  function buildFooter() {
    return `
    <div class="container footer-grid">
      <div>
        <div class="brand"><span aria-hidden="true">✏️</span><span data-i18n="nav.brand">ID GROUP</span></div>
        <p class="muted" data-i18n="footer.baseline">Le partenaire du confort, de la propreté et de la performance.</p>
        <a href="mailto:contact@idgroup.fr">contact@idgroup.fr</a>
      </div>
      <div>
        <h4 data-i18n="footer.links">Liens utiles</h4>
        <ul class="sitemap">
          <li><a href="./le-groupe.html" data-i18n="nav.group">Le Groupe</a></li>
          <li><a href="./rse.html" data-i18n="nav.rse">Nos engagements</a></li>
          <li><a href="./solutions.html" data-i18n="nav.solutions">Nos solutions</a></li>
          <li><a href="./actus.html" data-i18n="nav.news">Actualités</a></li>
          <li><a href="./contact.html" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer.legal">Légal & Réseaux</h4>
        <p class="muted" data-i18n="footer.legalNotice">Mentions légales (bientôt)</p>
        <p class="muted" data-i18n="footer.socials">Suivez-nous (placeholders)</p>
      </div>
      <div>
        <h4 data-i18n="footer.lang">Langue</h4>
        <div class="lang-switcher">
          <button type="button" data-lang="fr">FR</button>
          <button type="button" data-lang="en">EN</button>
          <button type="button" data-lang="de">DE</button>
        </div>
      </div>
    </div>`;
  }

  function injectLayout() {
    const header = document.querySelector(selectors.header);
    const footer = document.querySelector(selectors.footer);
    if (header) header.innerHTML = buildHeader();
    if (footer) footer.innerHTML = buildFooter();
  }

  function initBurger() {
    const burger = document.getElementById('burger-btn');
    const navLinks = document.getElementById('nav-links');
    if (!burger || !navLinks) return;
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  function initPanels() {
    const panels = document.querySelectorAll('.panel');
    if (!panels.length) return;
    panels.forEach((panel) => {
      panel.addEventListener('mouseenter', () => setActive(panel));
      panel.addEventListener('focus', () => setActive(panel));
      panel.addEventListener('click', () => setActive(panel));
    });
    setActive(panels[0]);

    function setActive(target) {
      panels.forEach((p) => p.classList.remove('active'));
      target.classList.add('active');
    }
  }

  function initHotspots() {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-body');
    const modalTitle = document.querySelector('.modal-title');
    const closeBtn = document.querySelector('.modal-close');
    const hotspots = document.querySelectorAll('.hotspot');
    if (!modal || !modalContent || !modalTitle) return;

    hotspots.forEach((spot) => {
      spot.addEventListener('click', () => openModal(spot));
      spot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(spot);
        }
      });
    });

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    function openModal(spot) {
      const title = spot.dataset.title || 'Solution';
      const desc = spot.dataset.desc || '';
      modalTitle.textContent = title;
      modalContent.textContent = desc;
      modal.classList.add('active');
      closeBtn?.focus();
    }

    function closeModal() {
      modal.classList.remove('active');
    }
  }

  function renderNews(data) {
    const list = document.querySelector(selectors.newsList);
    const filter = document.querySelector(selectors.newsFilter);
    if (!list || !data?.news) return;

    const allLabel = data.lang === 'de' ? 'Alle' : data.lang === 'en' ? 'All' : 'Tous';
    if (filter) {
      const categories = ['all', ...new Set(data.news.map((n) => n.category))];
      filter.innerHTML = categories
        .map((cat) => `<button type="button" data-cat="${cat}" class="${cat === 'all' ? 'active' : ''}">${cat === 'all' ? allLabel : cat}</button>`)
        .join('');

      filter.addEventListener('click', (e) => {
        if (e.target.matches('button[data-cat]')) {
          filter.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
          e.target.classList.add('active');
          const cat = e.target.dataset.cat;
          draw(cat);
        }
      });
    }

    function draw(cat = 'all') {
      const items = data.news.filter((n) => cat === 'all' || n.category === cat);
      list.innerHTML = items
        .map(
          (item) => `
        <article class="card">
          <div class="meta"><span class="badge">${item.category}</span><span>${item.date}</span></div>
          <h3>${item.title}</h3>
          <p class="muted">${item.excerpt}</p>
          <a class="cta-inline" href="./article.html?id=${item.id}">${data.newsReadMore || 'Lire'}</a>
        </article>`
        )
        .join('');
    }

    draw();
  }

  function renderArticle(data) {
    const container = document.querySelector(selectors.articleContainer);
    if (!container || !data?.news) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || data.news[0]?.id;
    const article = data.news.find((n) => n.id === id);
    if (!article) {
      container.innerHTML = '<p>Article introuvable.</p>';
      return;
    }

    container.innerHTML = `
      <h1>${article.title}</h1>
      <div class="meta"><span class="badge">${article.category}</span><span>${article.date}</span></div>
      <div class="article-body">${article.content}</div>
    `;
  }

  function validateContactForm() {
    const form = document.querySelector(selectors.contactForm);
    const success = document.querySelector(selectors.contactSuccess);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fields = ['name', 'email', 'profile', 'universe', 'need'];
      let valid = true;
      fields.forEach((name) => {
        const input = form.querySelector(`[name="${name}"]`);
        if (!input || !input.value.trim()) {
          valid = false;
          input?.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      if (!valid) return;
      success?.classList.remove('hidden');
      form.reset();
    });
  }

  function initSliderMobileHint() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    slider.addEventListener('scroll', () => {
      slider.classList.add('touched');
    }, { passive: true });
  }

  function renderFacts(data) {
    const target = document.querySelector(selectors.funFacts);
    if (!target || !data?.home?.team?.facts) return;
    target.innerHTML = data.home.team.facts
      .map((item) => `<div class="fun-fact">${item}</div>`)
      .join('');
  }

  function renderWormhout(data) {
    const target = document.querySelector(selectors.wormhout);
    if (!target || !data?.home?.wormhout?.figures) return;
    target.innerHTML = data.home.wormhout.figures
      .map((item) => `<div class="fun-fact">${item}</div>`)
      .join('');
  }

  function renderRseMetrics(data) {
    const target = document.querySelector(selectors.rseMetrics);
    if (!target || !data?.rse?.metrics) return;
    target.innerHTML = data.rse.metrics
      .map((metric) => `<div class="metric"><strong>${metric}</strong><p class="muted">Impact Positiv'ID</p></div>`)
      .join('');
  }

  function hydrateHotspots(data) {
    if (!data?.univers) return;
    document.querySelectorAll('.hotspot').forEach((spot) => {
      const universe = spot.dataset.universe;
      const zone = spot.dataset.zone;
      const modalData = data.univers?.[universe]?.modal?.[zone];
      if (modalData) {
        spot.dataset.title = modalData.title;
        spot.dataset.desc = modalData.desc;
        spot.setAttribute('aria-label', modalData.title);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectLayout();
    initBurger();
    initPanels();
    initHotspots();
    validateContactForm();
    initSliderMobileHint();
    if (window.IDG_I18N) {
      IDG_I18N.initI18n();
    }
  });

  document.addEventListener('i18n:loaded', (event) => {
    const data = event.detail.data;
    renderNews(data);
    renderArticle(data);
    renderFacts(data);
    renderWormhout(data);
    renderRseMetrics(data);
    hydrateHotspots(data);
  });
})();
