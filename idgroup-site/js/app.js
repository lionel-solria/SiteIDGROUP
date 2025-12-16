(function () {
  const body = document.body;

  document.addEventListener('DOMContentLoaded', () => {
    setupBurger();
    setupVolets();
    setupHotspots();
    setupNews();
    setupFilters();
    setupContact();
    rewriteLinksWithLang();
    loadArticle();
  });

  function setupBurger() {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!burger || !mobileNav) return;
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      burger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    });
  }

  function setupVolets() {
    const volets = document.querySelectorAll('.volet');
    if (!volets.length) return;
    volets.forEach((volet) => {
      volet.addEventListener('mouseenter', () => activateVolet(volet));
      volet.addEventListener('click', () => activateVolet(volet));
    });
    activateVolet(volets[0]);
  }

  function activateVolet(volet) {
    document.querySelectorAll('.volet').forEach((v) => v.classList.remove('active'));
    volet.classList.add('active');
  }

  function setupHotspots() {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    const modalContent = modal.querySelector('.modal-body');
    document.querySelectorAll('.hotspot').forEach((spot) => {
      spot.addEventListener('click', () => {
        const target = spot.getAttribute('data-hotspot');
        const content = document.querySelector(`[data-hotspot-content="${target}"]`);
        if (content && modalContent) {
          modalContent.innerHTML = content.innerHTML;
          modal.classList.add('active');
          modal.setAttribute('aria-hidden', 'false');
        }
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
        closeModal(modal);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal(modal);
    });
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  function setupNews() {
    const newsContainer = document.querySelector('#news-list');
    const source = document.querySelector('script[type="application/json"][data-news]');
    if (!newsContainer || !source) return;
    try {
      const news = JSON.parse(source.textContent);
      renderNews(news, newsContainer);
    } catch (e) {
      console.error('Impossible de charger les actualités', e);
    }
  }

  function renderNews(list, container) {
    container.innerHTML = '';
    list.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="illus" aria-hidden="true"></div>
        <div class="badge">${item.category}</div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a class="cta" href="article.html?id=${item.id}&lang=${getCurrentLang()}">→ ${item.cta || 'Lire'}</a>
      `;
      container.appendChild(card);
    });
  }

  function setupFilters() {
    const filters = document.querySelectorAll('.filters button');
    const newsContainer = document.querySelector('#news-list');
    const source = document.querySelector('script[type="application/json"][data-news]');
    if (!filters.length || !newsContainer || !source) return;
    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        filters.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        const news = JSON.parse(source.textContent);
        const filtered = category === 'all' ? news : news.filter((n) => n.category === category);
        renderNews(filtered, newsContainer);
      });
    });
  }

  function setupContact() {
    const form = document.querySelector('#contact-form');
    const message = document.querySelector('#contact-success');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const valid = Array.from(form.querySelectorAll('[required]')).every((field) => field.value.trim() !== '');
      if (valid) {
        message.hidden = false;
        form.reset();
      } else {
        alert('Merci de remplir les champs obligatoires.');
      }
    });
  }

  function loadArticle() {
    const articleContainer = document.querySelector('#article-content');
    const source = document.querySelector('script[type="application/json"][data-articles]');
    if (!articleContainer || !source) return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const articles = JSON.parse(source.textContent);
    const article = articles.find((a) => a.id === id) || articles[0];
    if (!article) return;
    document.querySelector('[data-article-title]').textContent = article.title;
    document.querySelector('[data-article-date]').textContent = article.date;
    document.querySelector('[data-article-category]').textContent = article.category;
    articleContainer.innerHTML = article.body;
  }

  function getCurrentLang() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem('idgroup-lang') || 'fr';
  }

  function rewriteLinksWithLang() {
    const lang = getCurrentLang();
    document.querySelectorAll('a[data-keep-lang]').forEach((link) => {
      const url = new URL(link.getAttribute('href'), window.location.origin + window.location.pathname);
      url.searchParams.set('lang', lang);
      link.setAttribute('href', url.pathname + url.search);
    });
  }
})();
