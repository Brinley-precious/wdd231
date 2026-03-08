// course.js
// Dynamically displays course cards, supports filtering, and shows total credits

const courses = [
  { code: 'CSE 110', subject: 'CSE', credits: 2, completed: true },
  { code: 'CSE 111', subject: 'CSE', credits: 2, completed: false },
  { code: 'CSE 210', subject: 'CSE', credits: 2, completed: false },
  { code: 'WDD 130', subject: 'WDD', credits: 2, completed: true },
  { code: 'WDD 131', subject: 'WDD', credits: 2, completed: false },
  { code: 'WDD 231', subject: 'WDD', credits: 2, completed: false }
];

const container = document.querySelector('#courses');

function displayCourses(courseList) {
  container.innerHTML = '';

  courseList.forEach(course => {
    const div = document.createElement('div');
    div.textContent = course.code;
    div.classList.add('course');
    if (course.completed) {
      div.classList.add('completed');
    }
    container.appendChild(div);
  });

  const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  document.querySelector('#credits').textContent =
    'The total credits for courses listed above is: ' + totalCredits;
}

// Initial display — all courses
displayCourses(courses);

// Filter buttons
document.querySelector('#all').addEventListener('click', () => {
  displayCourses(courses);
});

document.querySelector('#cse').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.subject === 'CSE'));
});

document.querySelector('#wdd').addEventListener('click', () => {
  displayCourses(courses.filter(course => course.subject === 'WDD'));
});