// Shared language manager — persists across all pages via localStorage
(function () {
  function applyLang(isArabic) {
    document.querySelectorAll('[data-en]').forEach(el => {
      // Skip the lang button itself — handle it separately
      if (el.classList.contains('lang-btn')) return;
      el.innerHTML = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    document.body.classList.toggle('rtl', isArabic);
    // Update lang button text only
    const btn = document.querySelector('.lang-btn');
    if (btn) btn.textContent = isArabic ? 'English' : 'العربية';
  }

  const saved = localStorage.getItem('lang') === 'ar';
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(saved);
  });

  window.toggleLang = function () {
    const nowArabic = localStorage.getItem('lang') !== 'ar';
    localStorage.setItem('lang', nowArabic ? 'ar' : 'en');
    applyLang(nowArabic);
  };
})();