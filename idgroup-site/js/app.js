(function() {
  document.addEventListener('DOMContentLoaded', () => {
    setupBurger();
    setupSlider();
    setupHotspots();
    setupNews();
    setupArticle();
    setupContactForm();
  });

  function currentLang() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang') || localStorage.getItem('idgroup-lang') || 'fr';
  }

  function setupBurger() {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('nav ul');
    if (!burger || !navList) return;
    burger.addEventListener('click', () => navList.classList.toggle('open'));
  }

  function setupSlider() {
    const mobilePanels = document.querySelectorAll('.slider-mobile .slider-panel');
    if (!mobilePanels.length) return;
    let index = 0;
    function show(i) {
      mobilePanels.forEach((panel, idx) => panel.style.display = idx === i ? 'block' : 'none');
    }
    show(index);
    document.querySelectorAll('[data-slider-next]').forEach(btn => btn.addEventListener('click', () => {
      index = (index + 1) % mobilePanels.length;
      show(index);
    }));
    document.querySelectorAll('[data-slider-prev]').forEach(btn => btn.addEventListener('click', () => {
      index = (index - 1 + mobilePanels.length) % mobilePanels.length;
      show(index);
    }));
  }

  function setupHotspots() {
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalContent = document.querySelector('.modal-body');
    if (!modal || !modalTitle || !modalContent) return;
    const closeBtn = modal.querySelector('.modal-close');

    document.querySelectorAll('.hotspot').forEach(btn => {
      btn.addEventListener('click', () => {
        modalTitle.textContent = btn.dataset.title || document.querySelector('[data-i18n="universe.hotspotTitle"]')?.textContent || '';
        modalContent.textContent = btn.dataset.text || '';
        modal.classList.add('open');
        closeBtn?.focus();
      });
    });

    function closeModal() { modal.classList.remove('open'); }
    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  async function fetchContent() {
    const lang = currentLang();
    const res = await fetch(`data/content.${lang}.json`);
    return res.json();
  }

  async function setupNews() {
    const list = document.querySelector('#news-list');
    if (!list) return;
    const data = await fetchContent();
    const filters = document.querySelectorAll('[data-filter]');

    function render(category) {
      list.innerHTML = '';
      data.articles.filter(a => !category || category === 'all' || a.category.toLowerCase().includes(category.toLowerCase())).forEach(article => {
        const card = document.createElement('article');
        card.className = 'article-card';
        card.innerHTML = `
          <h3>${article.title}</h3>
          <p><small>${article.date} • ${article.category}</small></p>
          <p>${article.excerpt}</p>
          <a href="article.html?id=${article.id}&lang=${currentLang()}" class="button ghost">Lire</a>
        `;
        list.appendChild(card);
      });
    }

    filters.forEach(btn => btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    }));

    render('all');
  }

  async function setupArticle() {
    if (document.body.dataset.page !== 'article') return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '1';
    const data = await fetchContent();
    const article = data.articles.find(a => a.id === id) || data.articles[0];
    document.querySelector('[data-article-title]')?.append(document.createTextNode(article.title));
    document.querySelector('[data-article-meta]')?.append(document.createTextNode(`${article.date} • ${article.category}`));
    document.querySelector('[data-article-content]')?.append(document.createTextNode(article.content));
  }

  function setupContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    const message = document.querySelector('.form-message');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const valid = Array.from(form.querySelectorAll('input, select, textarea')).every(field => field.value.trim() !== '');
      if (!valid) {
        message.textContent = message.dataset.error;
        message.style.color = '#b91c1c';
        return;
      }
      message.textContent = message.dataset.success;
      message.style.color = '#16a34a';
      form.reset();
    });
  }
})();
