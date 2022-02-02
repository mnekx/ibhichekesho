const mainNav = document.querySelector('#main-nav');
const bagaToggler = document.querySelector("#baga-toggler");
const navMenu = document.querySelector(".nav-menu")
// mainNav.addEventListener('click', (e)=>{
// bagaToggler.checked = !bagaToggler.checked;
// navMenu.classList.toggle('show-flex');
// })

bagaToggler.addEventListener('input', (e)=>{
    navMenu.classList.toggle('show-flex-nav');
})

navMenu.addEventListener('click', (e)=>{
    navMenu.classList.remove('show-flex-nav');
    bagaToggler.checked = false;
})