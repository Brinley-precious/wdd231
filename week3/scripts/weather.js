// weather.js
// OpenWeatherMap API Practice - Trier, Germany
// WDD 231 | Brinley Francis

// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL - Trier, Germany coordinates: lat=49.75, lon=6.64
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=b19766924618a39b6a57e7ae8a284cf7';

// Async function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display results on the page
function displayResults(data) {
  currentTemp.textContent = `${data.main.temp}°C`;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.src = iconUrl;
  weatherIcon.alt = data.weather[0].description;
  captionDesc.textContent = data.weather[0].description;
}

// Call the function
apiFetch();