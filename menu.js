const mobileMenu = document.getElementById('menu');
const navbar = document.querySelector('.navbar-items');
const header = document.querySelector('.main-header');

mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('toggle');
  header.classList.toggle('more-space');
});
