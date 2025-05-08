// Configura aquí tus datos de EmailJS
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
const EMAILJS_USER_ID = 'TU_USER_ID'; // o public key

// Traducción de placeholders
function updatePlaceholders() {
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = i18next.t(key);
  });
}

// Actualiza los placeholders al cambiar idioma
i18next.on('languageChanged', updatePlaceholders);
document.addEventListener('DOMContentLoaded', () => setTimeout(updatePlaceholders, 500));

// Validación y envío del formulario
document.addEventListener('submit', function(e) {
  if (e.target && e.target.id === 'contact-form') {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const status = document.getElementById('form-status');

    // Validación básica
    if (!name || !email || !message || !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      status.textContent = i18next.t('contact.form.invalid');
      status.className = "mt-4 text-center text-sm text-red-600";
      return;
    }

    // Envío con EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: name,
      from_email: email,
      message: message
    }, EMAILJS_USER_ID)
    .then(function() {
      status.textContent = i18next.t('contact.form.success');
      status.className = "mt-4 text-center text-sm text-green-600";
      form.reset();
    }, function() {
      status.textContent = i18next.t('contact.form.error');
      status.className = "mt-4 text-center text-sm text-red-600";
    });
  }
});
