// courses-api.js
// Digital Skills Resource Hub - YouTube API Module
// WDD 231 | Brinley Francis

const API_KEY = 'AIzaSyAQuDMN4Fb9Uk0W6LBgAchVmlrpqjO04SE';
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

// Curated real YouTube courses used as fallback when API quota is exceeded
export const FALLBACK_COURSES = {
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
      id: 'G3e-cpL7ofc',
      title: 'HTML & CSS Full Course for Beginners',
      channel: 'SuperSimpleDev',
      description: 'A clear beginner-friendly HTML and CSS course covering everything from tags to page layout.',
      thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg',
      publishedAt: '2023-03-05T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
      platform: 'YouTube',
      free: true,
      category: 'Web Development'
    },
    {
      id: 'PkZNo7MFNFg',
      title: 'Learn JavaScript - Full Course for Beginners',
      channel: 'freeCodeCamp.org',
      description: 'A complete JavaScript course for beginners covering fundamentals and real projects.',
      thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
      publishedAt: '2023-07-15T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
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
      id: 'c9Wg6Cb7YVU',
      title: 'Figma UI Design Tutorial for Beginners',
      channel: 'DesignCourse',
      description: 'A beginner-friendly Figma tutorial that teaches UI design workflows from scratch.',
      thumbnail: 'https://i.ytimg.com/vi/c9Wg6Cb7YVU/hqdefault.jpg',
      publishedAt: '2023-07-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=c9Wg6Cb7YVU',
      platform: 'YouTube',
      free: true,
      category: 'UI/UX Design'
    },
    {
      id: 'Ovj4hFxko7c',
      title: 'UX Design Course for Beginners',
      channel: 'Google Career Certificates',
      description: 'A modern introduction to UX design principles and research methods.',
      thumbnail: 'https://i.ytimg.com/vi/Ovj4hFxko7c/hqdefault.jpg',
      publishedAt: '2023-10-02T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=Ovj4hFxko7c',
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
      id: 'JL_grPUnXzY',
      title: 'Data Science for Beginners',
      channel: 'Alex The Analyst',
      description: 'A fast-paced introduction to data science with practical examples.',
      thumbnail: 'https://i.ytimg.com/vi/JL_grPUnXzY/hqdefault.jpg',
      publishedAt: '2022-07-21T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=JL_grPUnXzY',
      platform: 'YouTube',
      free: true,
      category: 'Data Science'
    },
    {
      id: 'mkv5mxYu0Wk',
      title: 'Statistics for Data Science',
      channel: 'Krish Naik',
      description: 'A beginner course covering statistics, Python, and real-world data workflows.',
      thumbnail: 'https://i.ytimg.com/vi/mkv5mxYu0Wk/hqdefault.jpg',
      publishedAt: '2023-09-05T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=mkv5mxYu0Wk',
      platform: 'YouTube',
      free: true,
      category: 'Data Science'
    }
  ],
  'Cybersecurity': [
    {
      id: 'hXSFdwIIsXc',
      title: 'Cybersecurity for Beginners Full Course',
      channel: 'NetworkChuck',
      description: 'A beginner-friendly guide to cybersecurity concepts and hands-on labs.',
      thumbnail: 'https://i.ytimg.com/vi/hXSFdwIIsXc/hqdefault.jpg',
      publishedAt: '2024-01-12T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=hXSFdwIIsXc',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    },
    {
      id: 'U_P23SqJaDc',
      title: 'Ethical Hacking Full Course',
      channel: 'freeCodeCamp.org',
      description: 'Learn ethical hacking, penetration testing, and cybersecurity defense from scratch.',
      thumbnail: 'https://i.ytimg.com/vi/U_P23SqJaDc/hqdefault.jpg',
      publishedAt: '2023-05-30T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    },
    {
      id: '3Kq1MIfTWCE',
      title: 'Intro to Cybersecurity for Beginners',
      channel: 'Simplilearn',
      description: 'A practical introduction to cybersecurity fundamentals and career paths.',
      thumbnail: 'https://i.ytimg.com/vi/3Kq1MIfTWCE/hqdefault.jpg',
      publishedAt: '2023-02-03T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
      platform: 'YouTube',
      free: true,
      category: 'Cybersecurity'
    }
  ],
  'Digital Marketing': [
    {
      id: 'bixR-NFAQB0',
      title: 'Digital Marketing Full Course',
      channel: 'Simplilearn',
      description: 'A practical digital marketing course covering SEO, social media, and paid ads.',
      thumbnail: 'https://i.ytimg.com/vi/bixR-NFAQB0/hqdefault.jpg',
      publishedAt: '2024-02-21T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=bixR-NFAQB0',
      platform: 'YouTube',
      free: true,
      category: 'Digital Marketing'
    },
    {
      id: 'nU-IIXBWlS4',
      title: 'Social Media Marketing Course',
      channel: 'HubSpot',
      description: 'Learn how to create marketing campaigns for social media and grow your audience.',
      thumbnail: 'https://i.ytimg.com/vi/nU-IIXBWlS4/hqdefault.jpg',
      publishedAt: '2023-11-08T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=nU-IIXBWlS4',
      platform: 'YouTube',
      free: true,
      category: 'Digital Marketing'
    },
    {
      id: 'DvwS7cV9GmQ',
      title: 'SEO Full Course for Beginners',
      channel: 'Ahrefs',
      description: 'A beginner-friendly introduction to search engine optimization and keyword strategy.',
      thumbnail: 'https://i.ytimg.com/vi/DvwS7cV9GmQ/hqdefault.jpg',
      publishedAt: '2023-09-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=DvwS7cV9GmQ',
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
      id: 'WONZVnlam6U',
      title: 'Canva Tutorial for Beginners',
      channel: 'Yes I\'m a Designer',
      description: 'Learn how to create professional designs using Canva from scratch.',
      thumbnail: 'https://i.ytimg.com/vi/WONZVnlam6U/hqdefault.jpg',
      publishedAt: '2023-12-08T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=WONZVnlam6U',
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
      id: '0-S5HgT5UhI',
      title: 'React Native Full Course for Beginners',
      channel: 'Traversy Media',
      description: 'Build native mobile apps with React Native and JavaScript from scratch.',
      thumbnail: 'https://i.ytimg.com/vi/0-S5HgT5UhI/hqdefault.jpg',
      publishedAt: '2023-07-06T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=0-S5HgT5UhI',
      platform: 'YouTube',
      free: true,
      category: 'Mobile App Development'
    },
    {
      id: 'VPvVD8t02U8',
      title: 'Flutter App Development for Beginners',
      channel: 'Fireship',
      description: 'A fast-paced introduction to building mobile apps with Flutter.',
      thumbnail: 'https://i.ytimg.com/vi/VPvVD8t02U8/hqdefault.jpg',
      publishedAt: '2024-02-01T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
      platform: 'YouTube',
      free: true,
      category: 'Mobile App Development'
    },
    {
      id: 'fis26HvvDII',
      title: 'Android Development for Beginners',
      channel: 'freeCodeCamp.org',
      description: 'A beginner-friendly guide to building Android apps with Kotlin.',
      thumbnail: 'https://i.ytimg.com/vi/fis26HvvDII/hqdefault.jpg',
      publishedAt: '2023-09-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=fis26HvvDII',
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
      description: 'A practical guide to managing projects, teams, and deadlines effectively.',
      thumbnail: 'https://i.ytimg.com/vi/M-UAuvujYKY/hqdefault.jpg',
      publishedAt: '2022-10-11T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=M-UAuvujYKY',
      platform: 'YouTube',
      free: true,
      category: 'Project Management'
    },
    {
      id: '9tSbMs6FoiU',
      title: 'Agile Project Management Full Course',
      channel: 'Simplilearn',
      description: 'Learn agile planning, sprints, and team coordination for modern projects.',
      thumbnail: 'https://i.ytimg.com/vi/9tSbMs6FoiU/hqdefault.jpg',
      publishedAt: '2023-08-17T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=9tSbMs6FoiU',
      platform: 'YouTube',
      free: true,
      category: 'Project Management'
    },
    {
      id: 'GE6khKFpqqQ',
      title: 'Project Planning for Beginners',
      channel: 'Smartsheet',
      description: 'A beginner guide to planning, scheduling, and tracking project work.',
      thumbnail: 'https://i.ytimg.com/vi/GE6khKFpqqQ/hqdefault.jpg',
      publishedAt: '2023-05-20T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=GE6khKFpqqQ',
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
      id: 'a0K_bCBCPiw',
      title: 'Design Thinking for Beginners',
      channel: 'IDEO',
      description: 'A beginner-friendly guide to design thinking and human-centered product design.',
      thumbnail: 'https://i.ytimg.com/vi/a0K_bCBCPiw/hqdefault.jpg',
      publishedAt: '2024-02-14T00:00:00Z',
      url: 'https://www.youtube.com/watch?v=a0K_bCBCPiw',
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

export async function fetchCoursesByCategory(category, query, maxResults = 3) {
  try {
    const url = `${BASE_URL}?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`YouTube API error ${response.status}: ${await response.text()}`);
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
    console.warn(`YouTube API failed for ${category}, using fallback.`, error);
    return FALLBACK_COURSES[category] || [];
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

  localStorage.setItem('lastViewedCourse', JSON.stringify({
    title: course.title,
    category: course.category,
    url: course.url
  }));
}