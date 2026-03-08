// date.js
// Dynamically outputs the current year and last modified date

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent =
  'Last Modified: ' + document.lastModified;