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

const FALLBACK_COURSES = {
  'Web Development': [
    {
      id: 'GxmfcnU3feo',
      title: 'The Complete Web Development Roadmap',
      channel: 'Programming with Mosh',
      description: 'Build full-stack web development skills step by step with one of the clearest roadmap courses available.',
      thumbnail: 'https://i.ytimg.com/vi/GxmfcnU3feo/hqdefault.jpg',
      publishedAt: '2024-02-10T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=GxmfcnU3feo',
      platform: 'YouTube',
      free: true,
      category: 'Web Development'
    },
    {
      id: 'u5vWFfZ6Csc',
      title: 'HTML Tutorial for Beginners',
      channel: 'The Syntax Squad01',
      description: 'A clear beginner-friendly HTML course that covers everything from tags to page structure.',
      thumbnail: 'https://i.ytimg.com/vi/u5vWFfZ6Csc/hqdefault.jpg',
      publishedAt: '2024-03-05T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=u5vWFfZ6Csc',
      platform: 'YouTube',
      free: true,
      category: 'Web Development'
    },
    {
      id: 'ysEN5RaKOlA',
      title: 'Learn Web Development as an Absolute Beginner',
      channel: 'Coder Coder',
      description: 'Start from zero with this beginner-friendly web development series.',
      thumbnail: 'https://i.ytimg.com/vi/ysEN5RaKOlA/hqdefault.jpg',
      publishedAt: '2019-07-15T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=ysEN5RaKOlA',
      platform: 'YouTube',
      free: true,
      category: 'Web Development'
    }
  ],
  'Python Programming': [
    {
      id: 'rfscVS0vtbw',
      title: 'Python for Beginners - Full Course',
      channel: 'freeCodeCamp.org',
      description: 'Learn Python basics and build real beginner-friendly projects in this full-length course.',
      thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
      publishedAt: '2022-01-15T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
      platform: 'YouTube',
      free: true,
      category: 'Python Programming'
    },
    {
      id: 'kqtD5dpn9C8',
      title: 'Python Tutorial for Beginners',
      channel: 'Programming with Mosh',
      description: 'A beginner-friendly introduction to Python fundamentals and syntax.',
      thumbnail: 'https://i.ytimg.com/vi/kqtD5dpn9C8/hqdefault.jpg',
      publishedAt: '2023-08-10T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
      platform: 'YouTube',
      free: true,
      category: 'Python Programming'
    },
    {
      id: 'YYXdXT2pyqY',
      title: 'Python Crash Course for Beginners',
      channel: 'Tech With Tim',
      description: 'A practical crash course that helps you write Python programs quickly.',
      thumbnail: 'https://i.ytimg.com/vi/YYXdXT2pyqY/hqdefault.jpg',
      publishedAt: '2021-09-20T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=YYXdXT2pyqY',
      platform: 'YouTube',
      free: true,
      category: 'Python Programming'
    }
  ],
  'UI/UX Design': [
    {
      id: 'iP4HDxzk7bA',
      title: 'UI/UX Design Fundamentals',
      channel: 'Flux Academy',
      description: 'Learn the core principles of UI and UX design and how to apply them in real work.',
      thumbnail: 'https://i.ytimg.com/vi/iP4HDxzk7bA/hqdefault.jpg',
      publishedAt: '2023-04-18T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=iP4HDxzk7bA',
      platform: 'YouTube',
      free: true,
      category: 'UI/UX Design'
    },
    {
      id: 'HxV6A4TjT7s',
      title: 'Figma UI/UX Design Tutorial',
      channel: 'DesignCourse',
      description: 'A beginner-friendly Figma tutorial that teaches UI design workflows from scratch.',
      thumbnail: 'https://i.ytimg.com/vi/HxV6A4TjT7s/hqdefault.jpg',
      publishedAt: '2023-07-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=HxV6A4TjT7s',
      platform: 'YouTube',
      free: true,
      category: 'UI/UX Design'
    },
    {
      id: 'r4hZ2AO0tL4',
      title: 'Beginner UI/UX Course',
      channel: 'CharliMarieTV',
      description: 'A modern introduction to UI/UX design with practical tips for beginners.',
      thumbnail: 'https://i.ytimg.com/vi/r4hZ2AO0tL4/hqdefault.jpg',
      publishedAt: '2023-10-02T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=r4hZ2AO0tL4',
      platform: 'YouTube',
      free: true,
      category: 'UI/UX Design'
    }
  ],
  'Data Science': [
    {
      id: 'ua-CiDNNj30',
      title: 'Data Science Full Course',
      channel: 'freeCodeCamp.org',
      description: 'A complete introduction to data science tools, Python, pandas and machine learning.',
      thumbnail: 'https://i.ytimg.com/vi/ua-CiDNNj30/hqdefault.jpg',
      publishedAt: '2023-11-12T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=ua-CiDNNj30',
      platform: 'YouTube',
      free: true,
      category: 'Data Science'
    },
    {
      id: '5Zg-C8AAIGg',
      title: 'Data Science in 5 Hours',
      channel: 'Alex The Analyst',
      description: 'A fast-paced introduction to data science with practical examples.',
      thumbnail: 'https://i.ytimg.com/vi/5Zg-C8AAIGg/hqdefault.jpg',
      publishedAt: '2022-07-21T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=5Zg-C8AAIGg',
      platform: 'YouTube',
      free: true,
      category: 'Data Science'
    },
    {
      id: 'G7F4-qRQFrM',
      title: 'Data Science for Beginners',
      channel: 'Krish Naik',
      description: 'A beginner course covering Python, pandas, and real-world data workflows.',
      thumbnail: 'https://i.ytimg.com/vi/G7F4-qRQFrM/hqdefault.jpg',
      publishedAt: '2023-09-05T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=G7F4-qRQFrM',
      platform: 'YouTube',
      free: true,
      category: 'Data Science'
    }
  ],
  'Cybersecurity': [
    {
      id: 'UpXn6HfO2U0',
      title: 'Cybersecurity for Beginners',
      channel: 'NetworkChuck',
      description: 'A beginner-friendly guide to cybersecurity concepts and hands-on labs.',
      thumbnail: 'https://i.ytimg.com/vi/UpXn6HfO2U0/hqdefault.jpg',
      publishedAt: '2024-01-12T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=UpXn6HfO2U0',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    },
    {
      id: 'RJdC0iEejU4',
      title: 'Ethical Hacking Tutorial',
      channel: 'HackerSploit',
      description: 'Learn the basics of ethical hacking, penetration testing, and cybersecurity defense.',
      thumbnail: 'https://i.ytimg.com/vi/RJdC0iEejU4/hqdefault.jpg',
      publishedAt: '2023-05-30T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=RJdC0iEejU4',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    },
    {
      id: 'mRLiJ_yKb4I',
      title: 'Intro to Cybersecurity',
      channel: 'Simplilearn',
      description: 'A practical introduction to cybersecurity fundamentals and tools.',
      thumbnail: 'https://i.ytimg.com/vi/mRLiJ_yKb4I/hqdefault.jpg',
      publishedAt: '2023-02-03T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=mRLiJ_yKb4I',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    }
  ],
  'Digital Marketing': [
    {
      id: 'xL3DUpCgeEk',
      title: 'Digital Marketing Full Course',
      channel: 'Neil Patel',
      description: 'A practical digital marketing course for beginners covering SEO, social media, and ads.',
      thumbnail: 'https://i.ytimg.com/vi/xL3DUpCgeEk/hqdefault.jpg',
      publishedAt: '2024-02-21T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=xL3DUpCgeEk',
      platform: 'YouTube',
      free: true,
      category: 'Digital Marketing'
    },
    {
      id: '3Y9v2zMkH0s',
      title: 'Social Media Marketing Tutorial',
      channel: 'HubSpot',
      description: 'Learn how to create marketing campaigns for social media and grow your audience.',
      thumbnail: 'https://i.ytimg.com/vi/3Y9v2zMkH0s/hqdefault.jpg',
      publishedAt: '2023-11-08T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=3Y9v2zMkH0s',
      platform: 'YouTube',
      free: true,
      category: 'Digital Marketing'
    },
    {
      id: '6wH0dAyR8V4',
      title: 'SEO for Beginners',
      channel: 'Ahrefs',
      description: 'A beginner-friendly introduction to search engine optimization and keyword strategy.',
      thumbnail: 'https://i.ytimg.com/vi/6wH0dAyR8V4/hqdefault.jpg',
      publishedAt: '2023-09-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=6wH0dAyR8V4',
      platform: 'YouTube',
      free: true,
      category: 'Digital Marketing'
    }
  ],
  'Graphic Design': [
    {
      id: 'u2zG8sPj8bo',
      title: 'Graphic Design Tutorial for Beginners',
      channel: 'Satori Graphics',
      description: 'A complete beginner course covering logo design, typography, and layouts.',
      thumbnail: 'https://i.ytimg.com/vi/u2zG8sPj8bo/hqdefault.jpg',
      publishedAt: '2024-01-10T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=u2zG8sPj8bo',
      platform: 'YouTube',
      free: true,
      category: 'Graphic Design'
    },
    {
      id: 'X1eweZgk0IE',
      title: 'Illustrator & Photoshop Crash Course',
      channel: "Yes I'm a Designer",
      description: 'A design crash course for beginners using Illustrator and Photoshop workflows.',
      thumbnail: 'https://i.ytimg.com/vi/X1eweZgk0IE/hqdefault.jpg',
      publishedAt: '2023-12-08T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=X1eweZgk0IE',
      platform: 'YouTube',
      free: true,
      category: 'Graphic Design'
    },
    {
      id: 'xA9Z0uuF7SI',
      title: 'Logo Design Fundamentals',
      channel: 'Will Paterson',
      description: 'Learn how to design clean, modern logos step by step.',
      thumbnail: 'https://i.ytimg.com/vi/xA9Z0uuF7SI/hqdefault.jpg',
      publishedAt: '2023-10-25T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=xA9Z0uuF7SI',
      platform: 'YouTube',
      free: true,
      category: 'Graphic Design'
    }
  ],
  'Mobile App Development': [
    {
      id: 'E1eqG4fQB-E',
      title: 'React Native App Development',
      channel: 'Traversy Media',
      description: 'Build native mobile apps with React Native and JavaScript.',
      thumbnail: 'https://i.ytimg.com/vi/E1eqG4fQB-E/hqdefault.jpg',
      publishedAt: '2023-07-06T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=E1eqG4fQB-E',
      platform: 'YouTube',
      free: true,
      category: 'Mobile App Development'
    },
    {
      id: 'JZMf7qx1zAU',
      title: 'Flutter App Development for Beginners',
      channel: 'Fireship',
      description: 'A fast-paced introduction to building mobile apps with Flutter.',
      thumbnail: 'https://i.ytimg.com/vi/JZMf7qx1zAU/hqdefault.jpg',
      publishedAt: '2024-02-01T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=JZMf7qx1zAU',
      platform: 'YouTube',
      free: true,
      category: 'Mobile App Development'
    },
    {
      id: '6M5VXKLf4D4',
      title: 'Android Development Tutorial',
      channel: 'Android Developers',
      description: 'A beginner-friendly guide to building apps with Android Studio and Kotlin.',
      thumbnail: 'https://i.ytimg.com/vi/6M5VXKLf4D4/hqdefault.jpg',
      publishedAt: '2023-09-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=6M5VXKLf4D4',
      platform: 'YouTube',
      free: true,
      category: 'Mobile App Development'
    }
  ],
  'Project Management': [
    {
      id: 'M-UAuvujYKY',
      title: 'Project Management Essentials',
      channel: 'ProjectManager',
      description: 'A practical guide to managing projects, teams, and deadlines.',
      thumbnail: 'https://i.ytimg.com/vi/M-UAuvujYKY/hqdefault.jpg',
      publishedAt: '2022-10-11T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=M-UAuvujYKY',
      platform: 'YouTube',
      free: true,
      category: 'Project Management'
    },
    {
      id: 'HLk5v4fT8ZE',
      title: 'Agile Project Management',
      channel: 'LinkedIn Learning',
      description: 'Learn agile planning, sprints, and team coordination for modern projects.',
      thumbnail: 'https://i.ytimg.com/vi/HLk5v4fT8ZE/hqdefault.jpg',
      publishedAt: '2023-08-17T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=HLk5v4fT8ZE',
      platform: 'YouTube',
      free: true,
      category: 'Project Management'
    },
    {
      id: 'n4EzwTI13dc',
      title: 'Project Planning for Beginners',
      channel: 'Smartsheet',
      description: "A beginner's guide to planning, scheduling, and tracking project work.",
      thumbnail: 'https://i.ytimg.com/vi/n4EzwTI13dc/hqdefault.jpg',
      publishedAt: '2023-05-20T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=n4EzwTI13dc',
      platform: 'YouTube',
      free: true,
      category: 'Project Management'
    }
  ],
  'Product Design': [
    {
      id: 'x5G_oXLW9qg',
      title: 'Product Design Fundamentals',
      channel: 'AJ&Smart',
      description: 'Learn how product teams design experiences and validate ideas quickly.',
      thumbnail: 'https://i.ytimg.com/vi/x5G_oXLW9qg/hqdefault.jpg',
      publishedAt: '2023-06-20T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=x5G_oXLW9qg',
      platform: 'YouTube',
      free: true,
      category: 'Product Design'
    },
    {
      id: 'MEot7tCxBN4',
      title: 'Design Sprint Workshop',
      channel: 'Google Design',
      description: 'Explore product design sprints and rapid user research techniques.',
      thumbnail: 'https://i.ytimg.com/vi/MEot7tCxBN4/hqdefault.jpg',
      publishedAt: '2024-01-09T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=MEot7tCxBN4',
      platform: 'YouTube',
      free: true,
      category: 'Product Design'
    },
    {
      id: 'uJlGkUqK8Qo',
      title: 'Design Thinking for Beginners',
      channel: 'Google Design',
      description: 'A beginner-friendly guide to design thinking and product research.',
      thumbnail: 'https://i.ytimg.com/vi/uJlGkUqK8Qo/hqdefault.jpg',
      publishedAt: '2024-02-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=uJlGkUqK8Qo',
      platform: 'YouTube',
      free: true,
      category: 'Product Design'
    }
  ],
  'Customer Service': [
    {
      id: 'pji1y2Ay8Rk',
      title: 'Customer Service Skills Training',
      channel: 'LinkedIn Learning',
      description: 'Develop communication and support skills for customer-facing roles.',
      thumbnail: 'https://i.ytimg.com/vi/pji1y2Ay8Rk/hqdefault.jpg',
      publishedAt: '2024-03-15T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=pji1y2Ay8Rk',
      platform: 'YouTube',
      free: true,
      category: 'Customer Service'
    },
    {
      id: 'BespO8c1kC0',
      title: 'Customer Support Best Practices',
      channel: 'Shep Hyken',
      description: 'Learn how to deliver excellent customer service and handle support challenges.',
      thumbnail: 'https://i.ytimg.com/vi/BespO8c1kC0/hqdefault.jpg',
      publishedAt: '2023-10-01T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=BespO8c1kC0',
      platform: 'YouTube',
      free: true,
      category: 'Customer Service'
    },
    {
      id: 'O7LRWkyaP2I',
      title: 'Remote Customer Service Training',
      channel: 'Support Driven',
      description: 'Best practices for delivering customer service in remote and hybrid environments.',
      thumbnail: 'https://i.ytimg.com/vi/O7LRWkyaP2I/hqdefault.jpg',
      publishedAt: '2023-12-05T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=O7LRWkyaP2I',
      platform: 'YouTube',
      free: true,
      category: 'Customer Service'
    }
  ]
};

function getFallbackCourses(category, maxResults) {
  const fallback = FALLBACK_COURSES[category] || [];
  return fallback.slice(0, maxResults);
}

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
    console.warn(`YouTube API failed for ${category}, using fallback data.`, error);
    const fallback = getFallbackCourses(category, maxResults);
    if (fallback.length > 0) {
      return fallback;
    }
    console.error(`No fallback data available for category: ${category}`);
    throw error;
  }
}

export function buildCourseCard(course) {
  const card = document.createElement('article');
  card.classList.add('course-card');
  card.setAttribute('data-category', course.category);

  const year = new Date(course.publishedAt).getFullYear();
  const placeholderThumbnail = 'data:image/svg+xml;charset=UTF-8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'320\' height=\'180\'><rect width=\'100%\' height=\'100%\' fill=\'%23e2e8f0\'/><text x=\'50%\' y=\'50%\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%237c3aed\' font-family=\'Inter, sans-serif\' font-size=\'16\'>Course image unavailable</text></svg>';

  const thumbnailWrapper = document.createElement('div');
  thumbnailWrapper.className = 'course-thumbnail';

  const img = document.createElement('img');
  img.src = course.thumbnail || placeholderThumbnail;
  img.alt = course.title;
  img.width = 320;
  img.height = 180;
  img.loading = 'lazy';
  img.addEventListener('error', () => {
    img.onerror = null;
    img.src = placeholderThumbnail;
  });

  const badge = document.createElement('span');
  badge.className = 'course-category-badge';
  badge.textContent = course.category;

  thumbnailWrapper.appendChild(img);
  thumbnailWrapper.appendChild(badge);

  const body = document.createElement('div');
  body.className = 'course-body';

  const title = document.createElement('h3');
  title.className = 'course-title';
  title.textContent = course.title;

  const metaLine = document.createElement('p');
  metaLine.className = 'course-channel';
  metaLine.innerHTML = `${course.channel} &bull; ${year}`;

  const courseMeta = document.createElement('div');
  courseMeta.className = 'course-meta';

  const platform = document.createElement('span');
  platform.className = 'course-platform';
  platform.textContent = course.platform;

  const freeTag = document.createElement('span');
  freeTag.className = 'course-free';
  freeTag.textContent = 'Free';

  courseMeta.appendChild(platform);
  courseMeta.appendChild(freeTag);

  body.appendChild(title);
  body.appendChild(metaLine);
  body.appendChild(courseMeta);

  card.appendChild(thumbnailWrapper);
  card.appendChild(body);

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