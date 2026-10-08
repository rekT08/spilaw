

const hamburger = document.querySelector('.hamburgerz');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});