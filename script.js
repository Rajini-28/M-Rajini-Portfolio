// script.js — basic interactivity: responsive nav + smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  // Toggle mobile nav
  navToggle && navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (navList.classList.contains('show')) navList.classList.remove('show');
      }
    });
  });

  // Optional: Light console message
  console.log('Portfolio script loaded — navigation and smooth scroll active.');
});
