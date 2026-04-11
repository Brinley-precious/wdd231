// index.js
// Digital Skills Resource Hub - Home Page
// WDD 231 | Brinley Francis

import { fetchCoursesByCategory, buildCourseCard } from './courses-api.js';
import { fetchStories, buildStoryCard } from './stories-api.js';

// ── Nav hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// ── Footer ──
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// ── Timestamp for form ──
document.getElementById('timestamp').value = new Date().toLocaleString();

// ── Load featured courses (Web Dev, first 6) ──
const featuredGrid = document.getElementById('featured-grid');

async function loadFeaturedCourses() {
    try {
        const courses = await fetchCoursesByCategory('Web Development', 'web development full course beginner', 6);
        featuredGrid.innerHTML = '';
        courses.forEach(course => {
            featuredGrid.appendChild(buildCourseCard(course));
        });
    } catch (error) {
        featuredGrid.innerHTML = `<p class="error-message">Could not load courses: ${error.message}</p>`;
    }
}

// ── Load stories preview (first 3) ──
const storiesPreview = document.getElementById('stories-preview');

async function loadStoriesPreview() {
    try {
        const stories = await fetchStories();
        const preview = stories.slice(0, 3);
        storiesPreview.innerHTML = '';
        preview.forEach(story => {
            storiesPreview.appendChild(buildStoryCard(story));
        });
    } catch (error) {
        storiesPreview.innerHTML = `<p class="error-message">Could not load stories: ${error.message}</p>`;
    }
}

// ── Course modal close (for featured cards on home page) ──
const modal = document.getElementById('course-modal');
if (modal) {
    const modalClose = document.getElementById('modal-close');
    modalClose.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.close();
    });
}

// ── Story modal close (for home page story preview) ──
const storyModal = document.getElementById('story-modal');
if (storyModal) {
    const storyModalClose = document.getElementById('story-modal-close');
    storyModalClose.addEventListener('click', () => storyModal.close());
    storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) storyModal.close();
    });
}

loadFeaturedCourses();
loadStoriesPreview();