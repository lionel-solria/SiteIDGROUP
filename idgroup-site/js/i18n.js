(function() {
  const STORAGE_KEY = 'idgroup-lang';
  const langSelector = document.querySelector('#lang-select');
  const pageKey = document.body.dataset.page || 'home';

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lang');
  }

  function setLangInUrl(lang) {
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang);
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.replaceState({}, '', newUrl);
  }

  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function saveLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  async function loadContent(lang) {
    try {
      const response = await fetch(`data/content.${lang}.json`);
      const data = await response.json();
      applyTranslations(data);
      updateMeta(data);
      document.documentElement.lang = lang;
    } catch (e) {
      console.error('Erreur chargement i18n', e);
    }
  }

  function resolvePath(obj, path) {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  }

  function applyTranslations(data) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = resolvePath(data, el.dataset.i18n);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const value = resolvePath(data, el.dataset.i18nPlaceholder);
      if (value) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const value = resolvePath(data, el.dataset.i18nAria);
      if (value) el.setAttribute('aria-label', value);
    });
  }

  function updateMeta(data) {
    const pageMeta = data.meta.pages[pageKey] || {};
    const title = pageMeta.title || data.meta.defaultTitle;
    const description = pageMeta.description || data.meta.defaultDescription;
    document.title = title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }

  function initLang() {
    const paramLang = getLangFromUrl();
    const stored = getSavedLang();
    const lang = paramLang || stored || 'fr';
    if (langSelector) langSelector.value = lang;
    setLangInUrl(lang);
    saveLang(lang);
    loadContent(lang);
  }

  function bindLangSelector() {
    if (!langSelector) return;
    langSelector.addEventListener('change', (e) => {
      const lang = e.target.value;
      setLangInUrl(lang);
      saveLang(lang);
      loadContent(lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindLangSelector();
    initLang();
  });
})();
