// course.js
// Dynamically displays course cards, supports filtering, shows total credits
// and displays course details in a modal dialog
// WDD 231 | Brinley Francis

const courses = [
  {
    code: 'CSE 110',
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    completed: true,
    certificate: 'Web and Computer Programming',
    description: 'A beginner-friendly introduction to programming concepts using Python. Covers variables, data types, control flow, functions, and basic problem-solving techniques.',
    technology: ['Python', 'VS Code']
  },
  {
    code: 'CSE 111',
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    completed: true,
    certificate: 'Web and Computer Programming',
    description: 'Builds on CSE 110 by focusing on the design and use of functions in Python. Topics include parameter passing, return values, and functional decomposition.',
    technology: ['Python', 'VS Code']
  },
  {
    code: 'CSE 210',
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    completed: true,
    certificate: 'Web and Computer Programming',
    description: 'Introduces object-oriented programming principles using Python. Covers classes, objects, inheritance, encapsulation, and polymorphism.',
    technology: ['Python', 'VS Code']
  },
  {
    code: 'WDD 130',
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    completed: true,
    certificate: 'Web and Computer Programming',
    description: 'Introduces the basics of web development including HTML structure, CSS styling, and responsive design principles for building modern websites.',
    technology: ['HTML', 'CSS', 'VS Code']
  },
  {
    code: 'WDD 131',
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    completed: true,
    certificate: 'Web and Computer Programming',
    description: 'Expands on WDD 130 by introducing JavaScript for dynamic web content. Covers DOM manipulation, events, arrays, and fetch API basics.',
    technology: ['HTML', 'CSS', 'JavaScript', 'VS Code']
  },
  {
    code: 'WDD 231',
    subject: 'WDD',
    number: 231,
    title: 'Web Frontend Development I',
    credits: 2,
    completed: false,
    certificate: 'Web and Computer Programming',
    description: 'Focuses on advanced frontend development techniques including ES Modules, external APIs, JSON data handling, responsive design, and accessibility best practices.',
    technology: ['HTML', 'CSS', 'JavaScript', 'JSON', 'APIs', 'VS Code']
  }
];

// ── DOM references ──
const container = document.querySelector('#courses');
const courseDetails = document.querySelector('#course-details');

// ── Display courses ──
function displayCourses(courseList) {
  container.innerHTML = '';

  courseList.forEach(course => {
    const div = document.createElement('div');
    div.textContent = course.code;
    div.classList.add('course');
    if (course.completed) {
      div.classList.add('completed');
    }

    // Click to open modal
    div.addEventListener('click', () => {
      displayCourseDetails(course);
    });

    container.appendChild(div);
  });

  const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  document.querySelector('#credits').textContent =
    'The total credits for courses listed above is: ' + totalCredits;
}

// ── Display course details in modal ──
function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">&#10060;</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;

  courseDetails.showModal();

  // Close button listener
  document.querySelector('#closeModal').addEventListener('click', () => {
    courseDetails.close();
  });

  // Close when clicking outside modal
  courseDetails.addEventListener('click', (e) => {
    if (e.target === courseDetails) {
      courseDetails.close();
    }
  });
}

// ── Initial display ──
displayCourses(courses);

// ── Filter buttons ──
document.querySelector('#all').addEventListener('click', () => {
  displayCourses(courses);
});

document.querySelector('#cse').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.subject === 'CSE'));
});

document.querySelector('#wdd').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.subject === 'WDD'));
});