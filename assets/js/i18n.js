// Inicialización de i18next
i18next.init({
  lng: navigator.language.startsWith('es') ? 'es' : 'en', // Detecta idioma del navegador
  debug: false,
  resources: {
    en: {
      translation: {}
    },
    es: {
      translation: {}
    }
  }
}, function(err, t) {
  // Cargar los archivos JSON externos
  Promise.all([
    fetch('locales/en.json').then(res => res.json()),
    fetch('locales/es.json').then(res => res.json())
  ]).then(([en, es]) => {
    i18next.addResourceBundle('en', 'translation', en, true, true);
    i18next.addResourceBundle('es', 'translation', es, true, true);
    updateContent();
  });
});

// Función para actualizar los textos
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });
}

// Cambiar idioma desde el selector
document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'lang-switcher') {
    i18next.changeLanguage(e.target.value, updateContent);
  }
});

// Actualizar textos al cambiar de idioma
i18next.on('languageChanged', updateContent);

// Si navbar/footer se cargan dinámicamente, reintentar actualización tras un pequeño delay
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateContent, 500);
});
