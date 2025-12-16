(function(){
  const App = {
    init(){
      this.renderSharedLayout();
      this.bindCommon();
      document.addEventListener('languageChanged', (event) => {
        this.onLanguage(event.detail.content);
      });
      LanguageManager.init();
    },
    renderSharedLayout(){
      const header = document.getElementById('site-header');
      if (header) {
        header.innerHTML = `
          <div class="container">
            <div class="navbar">
              <a class="brand" href="index.html">ID GROUP</a>
              <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
              <nav class="menu" aria-label="Navigation principale">
                <ul class="nav-links">
                  <li><a data-i18n="nav.group" href="le-groupe.html"></a></li>
                  <li><a data-i18n="nav.rse" href="rse.html"></a></li>
                  <li><a data-i18n="nav.solutions" href="solutions.html"></a></li>
                  <li><a data-i18n="nav.news" href="actus.html"></a></li>
                  <li><a data-i18n="nav.contact" href="contact.html"></a></li>
                </ul>
              </nav>
              <div class="actions">
                <div class="lang-switcher">
                  <button class="lang-option" data-lang="fr">FR</button>
                  <button class="lang-option" data-lang="en">EN</button>
                  <button class="lang-option" data-lang="de">DE</button>
                </div>
                <a class="button" data-i18n="nav.client" href="espace-client.html"></a>
              </div>
            </div>
          </div>`;
      }

      const footer = document.getElementById('site-footer');
      if (footer) {
        footer.innerHTML = `
          <div class="footer">
            <div class="container">
              <div class="columns">
                <div>
                  <div class="brand">ID GROUP</div>
                  <p data-i18n="footer.title"></p>
                  <div class="lang-switcher">
                    <button class="lang-option" data-lang="fr">FR</button>
                    <button class="lang-option" data-lang="en">EN</button>
                    <button class="lang-option" data-lang="de">DE</button>
                  </div>
                </div>
                <div>
                  <h4 data-i18n="footer.map"></h4>
                  <div class="site-map">
                    <a href="index.html" data-i18n="nav.solutions"></a>
                    <a href="solutions.html" data-i18n="nav.solutions"></a>
                    <a href="le-groupe.html" data-i18n="nav.group"></a>
                    <a href="rse.html" data-i18n="nav.rse"></a>
                    <a href="actus.html" data-i18n="nav.news"></a>
                    <a href="contact.html" data-i18n="nav.contact"></a>
                  </div>
                </div>
                <div>
                  <h4 data-i18n="footer.follow"></h4>
                  <p>LinkedIn · Youtube · Presse</p>
                  <p><a href="espace-client.html" data-i18n="nav.client"></a></p>
                </div>
              </div>
              <div style="margin-top:16px; display:flex; gap:12px; flex-wrap:wrap;">
                <a href="#" data-i18n="footer.legal"></a>
                <a href="#" data-i18n="footer.privacy"></a>
              </div>
            </div>
          </div>`;
      }
    },
    bindCommon(){
      document.addEventListener('click', (e) => {
        if (e.target.closest('.burger')) {
          this.toggleMenu();
        }
        if (e.target.matches('.modal-backdrop')) {
          this.closeModal();
        }
        if (e.target.matches('[data-close-modal]')) {
          this.closeModal();
        }
      });
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') this.closeModal();
      });
    },
    toggleMenu(){
      const menu = document.querySelector('.menu');
      const burger = document.querySelector('.burger');
      if (menu && burger) {
        menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', menu.classList.contains('open'));
      }
    },
    onLanguage(content){
      this.renderPage(content);
      this.bindHotspots(content);
      this.initSlider();
      this.renderNews(content);
      this.renderArticle(content);
      this.prepareContact(content);
      this.renderNewsPreview(content);
    },
    renderPage(content){
      const page = document.body.dataset.page;
      if (page === 'index') this.renderHome(content);
      if (page === 'solutions') this.renderSolutions(content);
      if (page === 'id-home' || page === 'id-pro' || page === 'id-agri') this.renderUniverse(page, content);
      if (page === 'le-groupe') this.renderGroup(content);
      if (page === 'rse') this.renderRse(content);
      if (page === 'espace-client') this.renderEspace(content);
    },
    renderHome(content){
      const panelsContainer = document.getElementById('panel-list');
      if (panelsContainer) {
        panelsContainer.innerHTML = '';
        content.home.panels.forEach((panel, index) => {
          const div = document.createElement('div');
          div.className = 'panel' + (index === 0 ? ' active' : '');
          div.dataset.index = index;
          const imgSrc = index === 0 ? 'assets/sketch-home.svg' : index === 1 ? 'assets/sketch-pro.svg' : 'assets/sketch-agri.svg';
          div.innerHTML = `
            <img src="${imgSrc}" alt="${panel.label}" />
            <div class="panel-body">
              <span class="label">${panel.label}</span>
              <div class="tagline">${panel.tagline}</div>
              <a class="button secondary" href="id-${panel.id || panel.color}.html">${panel.cta}</a>
            </div>`;
          panelsContainer.appendChild(div);
        });
      }

      const whyList = document.getElementById('why-list');
      if (whyList) {
        whyList.innerHTML = '';
        content.home.why.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
          whyList.appendChild(card);
        });
      }

      const stats = document.getElementById('industrial-stats');
      if (stats) {
        stats.innerHTML = '';
        content.home.industrialStats.forEach(s => {
          const div = document.createElement('div');
          div.className = 'stat';
          div.innerHTML = `<strong>${s.value}</strong><span>${s.label}</span>`;
          stats.appendChild(div);
        });
      }

      const funFacts = document.getElementById('fun-facts');
      if (funFacts) {
        funFacts.innerHTML = '';
        content.home.funFacts.forEach(f => {
          const li = document.createElement('div');
          li.className = 'card';
          li.textContent = f;
          funFacts.appendChild(li);
        });
      }

      const team = document.getElementById('team-cards');
      if (team) {
        team.innerHTML = '';
        ['Camille', 'Alex', 'Mina'].forEach(name => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<img src="assets/avatar-sketch.svg" alt="${name}"><h3>${name}</h3><p>Design · Industrie · Support</p>`;
          team.appendChild(card);
        });
      }
      this.renderNewsPreview(content);
    },
    initSlider(){
      const panels = document.querySelectorAll('.panel');
      if (!panels.length) return;
      panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
          if (window.innerWidth >= 900) this.activatePanel(panel);
        });
        panel.addEventListener('click', () => {
          this.activatePanel(panel);
        });
      });
    },
    activatePanel(panel){
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    },
    renderSolutions(content){
      const cards = document.getElementById('solutions-cards');
      if (cards) {
        cards.innerHTML = '';
        content.solutionsHub.cards.forEach(card => {
          const div = document.createElement('div');
          div.className = 'card';
          div.innerHTML = `<h3>${card.title}</h3><p>${card.text}</p><a class="button secondary" href="id-${card.id}.html">${card.cta}</a>`;
          cards.appendChild(div);
        });
      }
      const picker = document.getElementById('picker');
      if (picker) {
        picker.innerHTML = '';
        content.solutionsHub.picker.forEach(item => {
          const li = document.createElement('div');
          li.className = 'badge';
          li.textContent = item;
          picker.appendChild(li);
        });
      }
    },
    renderUniverse(page, content){
      const key = page.replace('id-', '');
      const data = content.univers[key];
      const heroTitle = document.querySelector('[data-hero-title]');
      const heroText = document.querySelector('[data-hero-text]');
      if (heroTitle) heroTitle.textContent = data.heroTitle;
      if (heroText) heroText.textContent = data.heroText;

      const cases = document.getElementById('case-studies');
      if (cases) {
        cases.innerHTML = '';
        data.cases.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
          cases.appendChild(card);
        });
      }

      const modalTitle = document.getElementById('modal-title');
      if (modalTitle) modalTitle.textContent = data.heroTitle;
    },
    bindHotspots(content){
      const page = document.body.dataset.page;
      if (!page.startsWith('id-')) return;
      const key = page.replace('id-', '');
      const data = content.univers[key];
      const modal = document.getElementById('hotspot-modal');
      const modalBody = document.getElementById('modal-body');
      document.querySelectorAll('.hotspot').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const target = data.hotspots.find(h => h.id === id);
          if (target && modal && modalBody) {
            modal.querySelector('h3').textContent = target.label;
            modalBody.textContent = target.text;
            this.openModal();
          }
        });
      });
    },
    openModal(){
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.classList.add('open');
    },
    closeModal(){
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.classList.remove('open');
    },
    renderNews(content){
      if (document.body.dataset.page !== 'actus') return;
      const list = document.getElementById('news-list');
      const filter = document.getElementById('news-filter');
      if (!list) return;
      if (filter && !filter.dataset.bound) {
        filter.innerHTML = '';
        content.news.filters.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.textContent = opt;
          filter.appendChild(option);
        });
        filter.dataset.bound = 'true';
        filter.addEventListener('change', () => this.renderNews(content));
      }
      const selected = filter ? filter.value : content.news.filters[0];
      list.innerHTML = '';
      content.news.articles
        .filter(a => selected === content.news.filters[0] || a.category === selected)
        .forEach(article => {
          const card = document.createElement('div');
          card.className = 'news-card';
          card.innerHTML = `<small>${article.category} · ${article.date}</small><h3>${article.title}</h3><p>${article.excerpt}</p><a class="button secondary" href="article.html?id=${article.id}&lang=${LanguageManager.currentLang}">${content.news.cta}</a>`;
          list.appendChild(card);
        });
    },
    renderArticle(content){
      if (document.body.dataset.page !== 'article') return;
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id') || content.news.articles[0].id;
      const article = content.news.articles.find(a => a.id === id) || content.news.articles[0];
      const container = document.getElementById('article-content');
      if (container) {
        container.innerHTML = `<div class="badge">${article.category} · ${article.date}</div><h1>${article.title}</h1>`;
        article.content.forEach(p => {
          const para = document.createElement('p');
          para.textContent = p;
          container.appendChild(para);
        });
        const highlight = document.createElement('div');
        highlight.className = 'alert';
        highlight.textContent = article.highlight;
        container.appendChild(highlight);
      }
      const back = document.getElementById('back-news');
      if (back) back.textContent = content.news.back;
    },
    renderNewsPreview(content){
      const preview = document.getElementById('news-preview');
      if (!preview) return;
      preview.innerHTML = '';
      content.news.articles.slice(0, 3).forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `<small>${article.category} · ${article.date}</small><h3>${article.title}</h3><p>${article.excerpt}</p><a class="button secondary" href="article.html?id=${article.id}&lang=${LanguageManager.currentLang}">${content.news.cta}</a>`;
        preview.appendChild(card);
      });
    },
    prepareContact(content){
      if (document.body.dataset.page !== 'contact') return;
      const profile = document.getElementById('profile');
      const universe = document.getElementById('universe');
      if (profile && !profile.dataset.filled) {
        content.contact.profile.forEach(p => {
          const opt = document.createElement('option');
          opt.value = p;
          opt.textContent = p;
          profile.appendChild(opt);
        });
        profile.dataset.filled = 'true';
      }
      if (universe && !universe.dataset.filled) {
        content.contact.universe.forEach(u => {
          const opt = document.createElement('option');
          opt.value = u;
          opt.textContent = u;
          universe.appendChild(opt);
        });
        universe.dataset.filled = 'true';
      }
      const form = document.getElementById('contact-form');
      if (form && !form.dataset.bound) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const valid = this.validateForm(form);
          if (valid) this.showSuccess(content.contact.success);
        });
        form.dataset.bound = 'true';
      }
      const submit = document.querySelector('#contact-form button[type="submit"]');
      if (submit) submit.textContent = content.contact.submit;
    },
    validateForm(form){
      const required = ['fullname', 'email', 'profile', 'universe', 'message'];
      for (const name of required) {
        const field = form.querySelector(`[name="${name}"]`);
        if (!field || !field.value.trim()) {
          field.focus();
          return false;
        }
        if (name === 'email' && !/.+@.+\..+/.test(field.value)) {
          field.focus();
          return false;
        }
      }
      return true;
    },
    showSuccess(message){
      const zone = document.getElementById('form-success');
      if (zone) {
        zone.textContent = message;
        zone.style.display = 'block';
      }
    },
    renderGroup(content){
      const values = document.getElementById('value-list');
      if (values) {
        values.innerHTML = '';
        content.group.values.forEach(v => {
          const badge = document.createElement('span');
          badge.className = 'tag';
          badge.textContent = v;
          values.appendChild(badge);
        });
      }
      const sites = document.getElementById('site-list');
      if (sites) {
        sites.innerHTML = '';
        content.group.sites.forEach(s => {
          const item = document.createElement('div');
          item.className = 'card';
          item.textContent = s;
          sites.appendChild(item);
        });
      }
      const mission = document.getElementById('mission');
      if (mission) mission.textContent = content.group.mission;
      const history = document.getElementById('history');
      if (history) history.textContent = content.group.history;
    },
    renderRse(content){
      const pillars = document.getElementById('pillar-list');
      if (pillars) {
        pillars.innerHTML = '';
        content.rse.pillars.forEach(p => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h3>${p.title}</h3><p>${p.text}</p>`;
          pillars.appendChild(card);
        });
      }
      const proofs = document.getElementById('proofs');
      if (proofs) {
        proofs.innerHTML = '';
        content.rse.proofs.forEach(p => {
          const kpi = document.createElement('div');
          kpi.className = 'kpi';
          kpi.innerHTML = `<strong>${p.value}</strong><div>${p.label}</div>`;
          proofs.appendChild(kpi);
        });
      }
      const downloads = document.getElementById('downloads');
      if (downloads) {
        downloads.innerHTML = '';
        content.rse.downloads.forEach(d => {
          const li = document.createElement('div');
          li.className = 'badge';
          li.textContent = d;
          downloads.appendChild(li);
        });
      }
    },
    renderEspace(content){
      const title = document.querySelector('[data-espace-title]');
      const text = document.querySelector('[data-espace-text]');
      const cta = document.querySelector('[data-espace-cta]');
      if (title) title.textContent = content.espace.title;
      if (text) text.textContent = content.espace.text;
      if (cta) cta.textContent = content.espace.cta;
    }
  };

  document.addEventListener('DOMContentLoaded', () => App.init());
})();
