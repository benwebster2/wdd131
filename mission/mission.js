let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark-theme');
        logo.src = 'logo-dark.png';
    } else {
        document.body.classList.remove('dark-theme');
        // code for changes to colors and logo
        logo.src = 'logo-light.webp';
    }
}           