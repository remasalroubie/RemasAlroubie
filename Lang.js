// Shared language manager — reads/writes localStorage so the choice persists across all pages
(function () {
  function applyLang(isArabic) {
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    document.body.classList.toggle('rtl', isArabic);
    const btn = document.querySelector('.lang-btn');
    if (btn) btn.textContent = isArabic ? 'English' : 'العربية';
  }

  // Apply saved preference as soon as DOM is ready (before full load to avoid flash)
  const saved = localStorage.getItem('lang') === 'ar';
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(saved);
  });

  // Global toggle called by the button onclick
  window.toggleLang = function () {
    const nowArabic = localStorage.getItem('lang') !== 'ar';
    localStorage.setItem('lang', nowArabic ? 'ar' : 'en');
    applyLang(nowArabic);
  };
})();