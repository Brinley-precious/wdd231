// courses.js
// Digital Skills Resource Hub - Courses Page
// WDD 231 | Brinley Francis

import { CATEGORY_QUERIES, fetchCoursesByCategory, buildCourseCard } from './courses-api.js';

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

const coursesGrid = document.getElementById('courses-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
let allCourses = [];

// ── Load all courses from all categories ──
async function loadAllCourses() {
    try {
        coursesGrid.innerHTML = '<p class="loading">Loading courses from YouTube...</p>';

        const fetchPromises = Object.entries(CATEGORY_QUERIES).map(
            ([category, query]) => fetchCoursesByCategory(category, query, 3)
        );

        const results = await Promise.all(fetchPromises);
        allCourses = results.flat();

        // Apply saved filter from localStorage
        const savedFilter = localStorage.getItem('preferredCategory') || 'all';
        applyFilter(savedFilter);

        // Highlight saved filter button
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === savedFilter);
        });

    } catch (error) {
        coursesGrid.innerHTML = `<p class="error-message">Could not load courses: ${error.message}</p>`;
    }
}

// ── Filter function using array filter method ──
function applyFilter(category) {
    const filtered = category === 'all'
        ? allCourses
        : allCourses.filter(course => course.category === category);

    coursesGrid.innerHTML = '';

    if (filtered.length === 0) {
        coursesGrid.innerHTML = '<p class="loading">No courses found for this category.</p>';
        return;
    }

    filtered.forEach(course => {
        coursesGrid.appendChild(buildCourseCard(course));
    });
}

// ── Filter button event listeners ──
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        localStorage.setItem('preferredCategory', category);
        applyFilter(category);
    });
});

// ── Modal close ──
const modal = document.getElementById('course-modal');
const modalClose = document.getElementById('modal-close');

function closeModal() {
    modal.close();
    // Remove iframe and show img
    const iframe = document.getElementById('modal-video');
    if (iframe) {
        iframe.remove();
    }
    document.getElementById('modal-img').style.display = 'block';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

loadAllCourses();