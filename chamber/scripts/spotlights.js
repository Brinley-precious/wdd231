// spotlights.js
// Lagos Chamber of Commerce - Member Spotlights
// WDD 231 | Brinley Francis

const spotlightsContainer = document.querySelector('#spotlights-container');

// Fetch members data
async function fetchSpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (response.ok) {
      const data = await response.json();
      displaySpotlights(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Spotlights error:', error);
  }
}

// Display 3 random gold or silver members
function displaySpotlights(members) {
  // Filter only gold (3) and silver (2) members
  const eligibleMembers = members.filter(member =>
    member.membershipLevel === 3 || member.membershipLevel === 2
  );

  // Shuffle randomly
  const shuffled = eligibleMembers.sort(() => Math.random() - 0.5);

  // Pick 3
  const spotlights = shuffled.slice(0, 3);

  spotlightsContainer.innerHTML = spotlights.map(member => {
    const badgeLabel = member.membershipLevel === 3 ? 'Gold' : 'Silver';
    const badgeClass = member.membershipLevel === 3 ? 'badge-gold' : 'badge-silver';

    return `
      <div class="spotlight-card">
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="120" height="80">
        <h3>${member.name}</h3>
        <p class="spotlight-industry">${member.industry}</p>
        <p class="spotlight-phone">${member.phone}</p>
        <p class="spotlight-address">${member.address}</p>
        <a href="${member.website}" class="spotlight-website" target="_blank" rel="noopener noreferrer">Visit Website</a>
        <span class="membership-badge ${badgeClass}">${badgeLabel}</span>
      </div>
    `;
  }).join('');
}

// Initialize
fetchSpotlights();