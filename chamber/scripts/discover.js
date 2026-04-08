// discover.js
// Lagos Chamber of Commerce - Discover Page
// WDD 231 | Brinley Francis

import places from '../data/discover.mjs';

// ── Footer dates ──
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// ── Navigation hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

// ── localStorage visit message ──
const messageBox = document.getElementById('visit-message');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
  messageBox.textContent = 'Welcome! Let us know if you have any questions.';
} else {
  const diff = now - Number(lastVisit);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageBox.textContent = 'Back so soon! Awesome!';
  } else if (days === 1) {
    messageBox.textContent = 'You last visited 1 day ago.';
  } else {
    messageBox.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// ── Build place cards ──
const grid = document.getElementById('places-grid');

places.forEach((place, index) => {
  const card = document.createElement('article');
  card.classList.add('place-card');
  card.classList.add(`place-${index + 1}`);

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img
        src="${place.image}"
        alt="${place.alt}"
        width="300"
        height="200"
        loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button class="learn-more-btn" type="button" onclick="window.open('${place.maps}', '_blank')">Learn More</button>
    `;
  grid.appendChild(card);
});