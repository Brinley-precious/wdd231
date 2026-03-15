// members.js
// Lagos Chamber of Commerce - Member Directory
// WDD 231 | Brinley Francis

// ── Footer: dynamic year and last modified ──
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// ── DOM references ──
const membersContainer = document.querySelector('#members-container');
const memberCountEl = document.querySelector('#member-count');
const gridBtn = document.querySelector('#grid-view');
const listBtn = document.querySelector('#list-view');

// ── Fetch member data ──
const url = 'data/members.json';

async function getMemberData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching member data:', error);
    membersContainer.innerHTML = '<p class="error">Unable to load members. Please try again later.</p>';
  }
}

// ── Display members ──
const displayMembers = (members) => {
  membersContainer.innerHTML = '';
  memberCountEl.textContent = members.length;

  members.forEach((member) => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    // Membership badge label
    let badgeClass = '';
    let badgeLabel = '';
    if (member.membershipLevel === 3) {
      badgeClass = 'badge-gold';
      badgeLabel = 'Gold';
    } else if (member.membershipLevel === 2) {
      badgeClass = 'badge-silver';
      badgeLabel = 'Silver';
    } else {
      badgeClass = 'badge-member';
      badgeLabel = 'Member';
    }

    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          src="images/${member.image}"
          alt="${member.name} logo"
          loading="lazy"
          width="160"
          height="100"
        >
      </div>
      <div class="card-body">
        <h2 class="card-name">${member.name}</h2>
        <p class="card-industry">${member.industry}</p>
        <p class="card-description">${member.description}</p>
        <p class="card-details"><span>Address:</span> ${member.address}</p>
        <p class="card-details"><span>Phone:</span> ${member.phone}</p>
        <div class="card-footer">
          <a href="${member.website}" class="card-website" target="_blank" rel="noopener noreferrer">Visit Website</a>
          <span class="membership-badge ${badgeClass}">${badgeLabel}</span>
        </div>
      </div>
    `;

    membersContainer.appendChild(card);
  });
};

// ── Grid / List toggle ──
gridBtn.addEventListener('click', () => {
  membersContainer.classList.remove('members-list');
  membersContainer.classList.add('members-grid');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.remove('members-grid');
  membersContainer.classList.add('members-list');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});

// ── Navigation hamburger ──
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

// ── Initialize ──
getMemberData();