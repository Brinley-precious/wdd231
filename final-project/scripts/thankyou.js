// thankyou.js
// Digital Skills Resource Hub - Thank You Page
// WDD 231 | Brinley Francis

// ── Nav hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('open');
    navBar.classList.toggle('show');
});

// ── Footer ──
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// ── Display form data from URL params ──
const params = new URLSearchParams(window.location.search);
const summaryBody = document.getElementById('summary-body');

const fields = [
    { key: 'name', label: 'Full Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'timestamp', label: 'Subscribed On' }
];

if (params.toString()) {
    summaryBody.innerHTML = fields.map(field => {
        const value = params.get(field.key);
        if (!value) return '';
        return `
      <div class="summary-item">
        <span class="summary-label">${field.label}</span>
        <span class="summary-value">${value}</span>
      </div>
    `;
    }).join('');
} else {
    summaryBody.innerHTML = `
    <div class="summary-item">
      <span class="summary-value">No data found. Please <a href="index.html">return to the home page</a> and subscribe.</span>
    </div>
  `;
}