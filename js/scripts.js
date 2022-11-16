// Js Todo

// Select hamburguer
const hamburguer = document.querySelector('.hamburguer');
// Select nav-menu
const navMenu = document.querySelector('.nav-menu');
// Add event listener
hamburguer.addEventListener('click', mobileMenu);
// Navmenu function
// Toggle active
function mobileMenu() {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
}