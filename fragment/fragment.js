const projectStats = {
    totalCharacters: 4,
    lastUpdated: "April 2026",
    version: 1.2
}

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('currentyear');

if (footerYear) {
    footerYear.textContent = currentYear;
} else {
    console.log("Footer year element not found.");
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', function() {
            card.classList.toggle('is-flipped');
        });
    });
});