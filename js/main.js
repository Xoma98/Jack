document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!burger || !mobileMenu) return;

  const setMenuOpen = (open) => {
    mobileMenu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'mobile-menu');
  mobileMenu.id = 'mobile-menu';

  burger.addEventListener('click', () => {
    setMenuOpen(!mobileMenu.classList.contains('open'));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
      setMenuOpen(false);
    }
  });
});
