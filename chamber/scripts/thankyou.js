// thankyou.js
// Lagos Chamber of Commerce - Thank You Page
// WDD 231 | Brinley Francis

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

// ── Display form data from URL params ──
const params = new URLSearchParams(window.location.search);
const summary = document.getElementById('application-summary');

const membershipLabels = {
  np: 'Non-Profit Membership (No Fee)',
  bronze: 'Bronze Membership',
  silver: 'Silver Membership',
  gold: 'Gold Membership'
};

const fields = [
  { key: 'first-name', label: 'First Name' },
  { key: 'last-name', label: 'Last Name' },
  { key: 'email', label: 'Email Address' },
  { key: 'phone', label: 'Mobile Phone' },
  { key: 'organization', label: 'Business / Organization' },
  { key: 'membership', label: 'Membership Level', transform: (val) => membershipLabels[val] || val },
  { key: 'timestamp', label: 'Application Date & Time' }
];

if (params.toString()) {
  summary.innerHTML = fields.map(field => {
    const raw = params.get(field.key);
    if (!raw) return '';
    const value = field.transform ? field.transform(raw) : raw;
    return `
      <div class="summary-item">
        <span class="summary-label">${field.label}</span>
        <span class="summary-value">${value}</span>
      </div>
    `;
  }).join('');
} else {
  summary.innerHTML = `
    <div class="summary-item">
      <span class="summary-value">No application data found. Please <a href="join.html">complete the form</a>.</span>
    </div>
  `;
}