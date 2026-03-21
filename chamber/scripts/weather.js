// weather.js
// Lagos Chamber of Commerce - Weather Section
// WDD 231 | Brinley Francis

// Lagos, Nigeria coordinates
const lat = 6.52;
const lon = 3.38;
const apiKey = 'b19766924618a39b6a57e7ae8a284cf7';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast-container');

// Fetch current weather
async function fetchCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Weather error:', error);
  }
}

// Fetch 3-day forecast
async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Forecast error:', error);
  }
}

// Display current weather
function displayCurrentWeather(data) {
  currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDesc.textContent = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.alt = data.weather[0].description;
}

// Display 3-day forecast
function displayForecast(data) {
  // Get one reading per day for next 3 days (every 8th item = 24hrs apart)
  const dailyForecasts = [];
  const seenDates = new Set();

  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateStr = date.toLocaleDateString('en-NG', { weekday: 'short', month: 'short', day: 'numeric' });
    const today = new Date().toDateString();

    if (date.toDateString() !== today && !seenDates.has(dateStr) && dailyForecasts.length < 3) {
      seenDates.add(dateStr);
      dailyForecasts.push({
        date: dateStr,
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon,
        desc: item.weather[0].description
      });
    }
  });

  forecastContainer.innerHTML = dailyForecasts.map(day => `
    <div class="forecast-day">
      <p class="forecast-date">${day.date}</p>
      <img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="${day.desc}" width="40" height="40">
      <p class="forecast-temp">${day.temp}°C</p>
      <p class="forecast-desc">${day.desc}</p>
    </div>
  `).join('');
}

// Initialize
fetchCurrentWeather();
fetchForecast();

// Footer dates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;