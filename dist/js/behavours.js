const bagaToggler = document.querySelector('#baga-toggler');
const navMenu = document.querySelector('.nav-menu');

bagaToggler.addEventListener('input', () => {
  navMenu.classList.toggle('show-flex-nav');
});

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show-flex-nav');
  bagaToggler.checked = false;
});