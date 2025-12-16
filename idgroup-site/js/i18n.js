(function() {
  const DEFAULT_LANG = 'fr';
  const LANG_PARAM = 'lang';

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const byParam = params.get(LANG_PARAM);
    if (byParam) return byParam;
    const hash = window.location.hash.replace('#', '');
    if (['fr', 'en', 'de'].includes(hash)) return hash;
    const saved = localStorage.getItem('idg_lang');
    if (saved) return saved;
    return DEFAULT_LANG;
  }

  function updateUrlLang(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set(LANG_PARAM, lang);
    window.history.replaceState({}, '', url.toString());
  }

  function resolveKey(path, data) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), data);
  }

  async function loadLanguage(lang) {
    try {
      const response = await fetch(`./data/content.${lang}.json`);
      const json = await response.json();
      window.__i18nData = json;
      applyI18n(json);
      localStorage.setItem('idg_lang', lang);
      updateUrlLang(lang);
      document.dispatchEvent(new CustomEvent('i18n:loaded', { detail: { lang, data: json } }));
    } catch (e) {
      console.error('Erreur chargement i18n', e);
    }
  }

  function applyI18n(data) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = resolveKey(key, data);
      if (value !== null && value !== undefined) {
        if ((el.placeholder !== undefined) && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
          el.placeholder = value;
        }
        if (el.dataset.i18nAttr) {
          el.setAttribute(el.dataset.i18nAttr, value);
        } else {
          el.textContent = value;
        }
      }
    });

    if (data.meta) {
      document.title = data.meta.title || document.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc && data.meta.description) desc.setAttribute('content', data.meta.description);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && data.meta.title) ogTitle.setAttribute('content', data.meta.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && data.meta.description) ogDesc.setAttribute('content', data.meta.description);
    }

    document.querySelectorAll('.lang-switcher button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === data.lang);
    });
  }

  function bindLangSwitcher() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.matches('.lang-switcher button')) {
        const lang = target.dataset.lang;
        if (lang) {
          loadLanguage(lang);
        }
      }
    });
  }

  function initI18n() {
    bindLangSwitcher();
    const lang = getLangFromUrl();
    loadLanguage(lang);
  }

  window.IDG_I18N = { initI18n, applyI18n, loadLanguage };
})();
