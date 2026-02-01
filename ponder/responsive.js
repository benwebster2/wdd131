const btn = document.querySelector('.menu-btn')
const meny = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMeny() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}