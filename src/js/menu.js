document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const tabletMenu = document.getElementById('mobile-tablet');

  menuBtn.addEventListener('click', () => {
    tabletMenu.classList.toggle('hidden');
  });
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});