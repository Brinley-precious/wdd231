// join.js
// Lagos Chamber of Commerce - Join Page
// WDD 231 | Brinley Francis

// ── Set timestamp on form load ──
document.getElementById('timestamp').value = new Date().toLocaleString();

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

// ── Modal controls ──
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const closeModalBtns = document.querySelectorAll('.close-modal');

learnMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    } else {
      console.warn('Modal not found:', modalId);
    }
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('dialog');
    if (modal) modal.close();
  });
});

// ── Close modal when clicking backdrop ──
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
});