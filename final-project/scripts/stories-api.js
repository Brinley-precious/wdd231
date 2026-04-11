// stories-api.js
// Digital Skills Resource Hub - Stories Module
// WDD 231 | Brinley Francis

export async function fetchStories() {
  try {
    const response = await fetch('data/stories.json');
    if (!response.ok) {
      throw new Error(`Failed to load stories: ${response.status}`);
    }
    const stories = await response.json();
    return stories;
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
}

export function buildStoryCard(story) {
  const card = document.createElement('article');
  card.classList.add('story-card');

  const tagsHTML = story.tags.map(tag => `<span class="story-tag">${tag}</span>`).join('');

  card.innerHTML = `
    <div class="story-img">
      <img
        src="${story.image}"
        alt="Photo of ${story.name}"
        width="400"
        height="200"
        loading="lazy">
    </div>
    <div class="story-body">
      <h3 class="story-name">${story.name}</h3>
      <p class="story-role">${story.role} &bull; ${story.location}</p>
      <p class="story-excerpt">${story.excerpt}</p>
      <div class="story-tags">${tagsHTML}</div>
      <button class="story-read-btn" type="button">Read Full Story</button>
    </div>
  `;

  card.querySelector('.story-read-btn').addEventListener('click', () => {
    openStoryModal(story);
  });

  return card;
}

function openStoryModal(story) {
  const modal = document.getElementById('story-modal');
  if (!modal) return;

  document.getElementById('story-modal-name').textContent = story.name;
  document.getElementById('story-modal-img').src = story.image;
  document.getElementById('story-modal-img').alt = `Photo of ${story.name}`;
  document.getElementById('story-modal-description').textContent = story.fullStory;

  const tagsHTML = story.tags.map(tag =>
    `<span class="modal-badge modal-badge-category">${tag}</span>`
  ).join('');

  document.getElementById('story-modal-meta').innerHTML = `
    <span class="modal-badge modal-badge-platform">${story.role}</span>
    <span class="modal-badge modal-badge-free">${story.location}</span>
    ${tagsHTML}
  `;

  modal.showModal();

  localStorage.setItem('lastReadStory', JSON.stringify({
    name: story.name,
    role: story.role
  }));
}