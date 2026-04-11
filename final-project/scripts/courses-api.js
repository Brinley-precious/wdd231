// courses-api.js
// Digital Skills Resource Hub - YouTube API Module
// WDD 231 | Brinley Francis

const API_KEY = 'AIzaSyDD6PnXr39p5LxdFxf6wOspBe--Q0daCRg';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const CATEGORY_QUERIES = {
  'Web Development': 'web development full course beginner',
  'Python Programming': 'python programming full course beginner',
  'UI/UX Design': 'UI UX design course beginner',
  'Data Science': 'data science full course beginner',
  'Cybersecurity': 'cybersecurity course beginner',
  'Digital Marketing': 'digital marketing full course beginner',
  'Graphic Design': 'graphic design course beginner',
  'Mobile App Development': 'mobile app development course beginner',
  'Project Management': 'project management course beginner',
  'Product Design': 'product design course beginner',
  'Customer Service': 'customer service skills course'
};

export async function fetchCoursesByCategory(category, query, maxResults = 3) {
  try {
    const url = `${BASE_URL}?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }
    const data = await response.json();
    return data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      description: item.snippet.description || 'Watch this course on YouTube to learn more.',
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      platform: 'YouTube',
      free: true,
      category: category
    }));
  } catch (error) {
    console.error(`Error fetching ${category} courses:`, error);
    throw error;
  }
}

export function buildCourseCard(course) {
  const card = document.createElement('article');
  card.classList.add('course-card');
  card.setAttribute('data-category', course.category);

  const year = new Date(course.publishedAt).getFullYear();

  card.innerHTML = `
    <div class="course-thumbnail">
      <img
        src="${course.thumbnail}"
        alt="${course.title}"
        width="320"
        height="180"
        loading="lazy">
      <span class="course-category-badge">${course.category}</span>
    </div>
    <div class="course-body">
      <h3 class="course-title">${course.title}</h3>
      <p class="course-channel">${course.channel} &bull; ${year}</p>
      <div class="course-meta">
        <span class="course-platform">${course.platform}</span>
        <span class="course-free">Free</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openCourseModal(course));

  return card;
}

function openCourseModal(course) {
  const modal = document.getElementById('course-modal');
  if (!modal) return;

  document.getElementById('modal-title').textContent = course.title;
  const modalImg = document.getElementById('modal-img');
  modalImg.src = course.thumbnail;
  modalImg.alt = course.title;
  modalImg.style.display = 'block';
  document.getElementById('modal-description').textContent = course.description;
  document.getElementById('modal-link').href = course.url;

  document.getElementById('modal-meta').innerHTML = `
    <span class="modal-badge modal-badge-category">${course.category}</span>
    <span class="modal-badge modal-badge-free">Free</span>
    <span class="modal-badge modal-badge-platform">${course.platform}</span>
  `;

  modal.showModal();

  // Replace img with iframe for video
  setTimeout(() => {
    const videoId = course.url.split('v=')[1];
    if (videoId) {
      modalImg.style.display = 'none';
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = '560';
      iframe.height = '250';
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      modalImg.parentNode.insertBefore(iframe, modalImg.nextSibling);
      iframe.id = 'modal-video';
    }
  }, 100);

  localStorage.setItem('lastViewedCourse', JSON.stringify({
    title: course.title,
    category: course.category,
    url: course.url
  }));
}