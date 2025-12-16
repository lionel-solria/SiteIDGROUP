const I18n = {
  currentLang: 'fr',
  data: {},

  init: async function() {
    this.detectLang();
    await this.loadData();
    this.updateUI();
    this.bindEvents();
  },

  detectLang: function() {
    // 1. URL param
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');

    // 2. LocalStorage
    const storedLang = localStorage.getItem('idgroup_lang');

    // 3. Browser
    const browserLang = navigator.language.slice(0, 2);

    if (paramLang && ['fr', 'en', 'de'].includes(paramLang)) {
      this.currentLang = paramLang;
    } else if (storedLang && ['fr', 'en', 'de'].includes(storedLang)) {
      this.currentLang = storedLang;
    } else if (['fr', 'en', 'de'].includes(browserLang)) {
      this.currentLang = browserLang;
    } else {
      this.currentLang = 'fr';
    }

    // Persist
    localStorage.setItem('idgroup_lang', this.currentLang);
    document.documentElement.lang = this.currentLang;
  },

  loadData: async function() {
    try {
      const response = await fetch(`data/content.${this.currentLang}.json`);
      if (!response.ok) throw new Error('Failed to load language file');
      this.data = await response.json();
    } catch (e) {
      console.error(e);
      // Fallback to FR if error?
    }
  },

  updateUI: function() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.resolveKey(key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerText = text; // or innerHTML if needed, but innerText is safer
        }
      }
    });

    // Update select value
    const selector = document.getElementById('lang-select');
    if (selector) selector.value = this.currentLang;

    // Update links to keep lang param
    this.updateLinks();
  },

  resolveKey: function(path) {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, this.data);
  },

  updateLinks: function() {
    // Add ?lang=xx to all internal links
    const links = document.querySelectorAll('a');
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
        const url = new URL(a.href, window.location.origin);
        url.searchParams.set('lang', this.currentLang);
        a.href = url.toString();
      }
    });
  },

  bindEvents: function() {
    const selector = document.getElementById('lang-select');
    if (selector) {
      // Remove old listeners to avoid duplicates if called multiple times
      const newSelector = selector.cloneNode(true);
      selector.parentNode.replaceChild(newSelector, selector);

      newSelector.addEventListener('change', (e) => {
        const newLang = e.target.value;
        localStorage.setItem('idgroup_lang', newLang);

        // Reload page with new param to ensure everything is fresh
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.location.href = url.toString();
      });
    }
  }
};

window.I18n = I18n;
