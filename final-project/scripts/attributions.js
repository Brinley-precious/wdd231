// attributions.js
// Digital Skills Resource Hub - Attributions Page
// WDD 231 | Brinley Francis

// ── Nav hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
if (navButton && navBar) {
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('open');
        navBar.classList.toggle('open');
    });
}

// ── Footer ──
const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}