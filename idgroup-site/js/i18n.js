(function () {
  const LANG_STORAGE_KEY = 'idgroup-lang';
  const DEFAULT_LANG = 'fr';
  const selectorButtons = document.querySelectorAll('[data-lang]');
  const urlParams = new URLSearchParams(window.location.search);

  function currentLang() {
    const fromUrl = urlParams.get('lang');
    if (fromUrl) return fromUrl;
    const fromStorage = localStorage.getItem(LANG_STORAGE_KEY);
    return fromStorage || DEFAULT_LANG;
  }

  async function loadLang(lang) {
    try {
      const response = await fetch(`data/content.${lang}.json`);
      const data = await response.json();
      applyTranslations(data);
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      updateButtons(lang);
      applyMeta(data);
      window.history.replaceState({}, '', `${window.location.pathname}?lang=${lang}${window.location.hash}`);
      document.body.dataset.langReady = 'true';
    } catch (e) {
      console.error('Erreur chargement i18n', e);
    }
  }

  function applyTranslations(dictionary) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const path = el.getAttribute('data-i18n');
      const value = path.split('.').reduce((acc, key) => (acc ? acc[key] : null), dictionary);
      if (value) {
        if (el.placeholder !== undefined && el.tagName === 'INPUT') {
          el.placeholder = value;
        } else if (el.tagName === 'TITLE') {
          el.textContent = value;
        } else {
          el.innerHTML = value;
        }
      }
    });
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dictionary.meta && dictionary.meta.description) {
      metaDesc.setAttribute('content', dictionary.meta.description);
    }
  }

  function applyMeta(dictionary) {
    if (dictionary.meta && dictionary.meta.title) {
      document.title = dictionary.meta.title;
    }
    if (dictionary.meta && dictionary.meta.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = dictionary.meta.description;
    }
  }

  function updateButtons(lang) {
    selectorButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function setupSelector() {
    selectorButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        loadLang(btn.dataset.lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupSelector();
    loadLang(currentLang());
  });
})();
