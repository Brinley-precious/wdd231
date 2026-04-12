// stories.js
// Digital Skills Resource Hub - Stories Page
// WDD 231 | Brinley Francis

import { fetchStories, buildStoryCard } from './stories-api.js';

// ── Nav hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    navBar.classList.toggle('open');
});

// ── Footer ──
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

const storiesGrid = document.getElementById('stories-grid');

// ── Load all stories ──
async function loadStories() {
    try {
        const stories = await fetchStories();
        storiesGrid.innerHTML = '';
        stories.forEach(story => {
            storiesGrid.appendChild(buildStoryCard(story));
        });
    } catch (error) {
        storiesGrid.innerHTML = `<p class="error-message">Could not load stories: ${error.message}</p>`;
    }
}

// ── Modal close ──
const modal = document.getElementById('story-modal');
const modalClose = document.getElementById('story-modal-close');

modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

loadStories();