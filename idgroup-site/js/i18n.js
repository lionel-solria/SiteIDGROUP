(function(){
  const LanguageManager = {
    currentLang: 'fr',
    content: {},
    init: async function() {
      this.currentLang = this.detectLanguage();
      await this.loadLanguage(this.currentLang);
      this.bindLanguageSwitcher();
    },
    detectLanguage: function(){
      const urlParam = new URLSearchParams(window.location.search).get('lang');
      const stored = localStorage.getItem('idg-lang');
      return urlParam || stored || 'fr';
    },
    async loadLanguage(lang){
      try {
        const response = await fetch(`data/content.${lang}.json`);
        this.content = await response.json();
        this.currentLang = lang;
        localStorage.setItem('idg-lang', lang);
        this.updateUrl(lang);
        this.applyTranslations();
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, content: this.content }}));
        this.highlightActive(lang);
      } catch (e) {
        console.error('Erreur chargement langue', e);
      }
    },
    updateUrl: function(lang){
      const params = new URLSearchParams(window.location.search);
      params.set('lang', lang);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    },
    applyTranslations: function(){
      const nodes = document.querySelectorAll('[data-i18n]');
      nodes.forEach(node => {
        const key = node.getAttribute('data-i18n');
        const value = this.byPath(key);
        if (value !== undefined) node.textContent = value;
      });
      const htmlNodes = document.querySelectorAll('[data-i18n-html]');
      htmlNodes.forEach(node => {
        const key = node.getAttribute('data-i18n-html');
        const value = this.byPath(key);
        if (value !== undefined) node.innerHTML = value;
      });
      this.applyMeta();
    },
    applyMeta: function(){
      const page = document.body.dataset.page;
      const meta = this.content.meta && this.content.meta[page];
      if (!meta) return;
      document.title = meta.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.description);
    },
    byPath: function(path){
      return path.split('.').reduce((acc, part) => acc && acc[part], this.content);
    },
    bindLanguageSwitcher: function(){
      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.dataset.lang;
          if (lang !== this.currentLang) this.loadLanguage(lang);
        });
      });
    },
    highlightActive: function(lang){
      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }
  };

  window.LanguageManager = LanguageManager;
})();
