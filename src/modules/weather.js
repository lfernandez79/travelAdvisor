// Weather — uses wttr.in (free, no API key required)
// Accepts any city name and returns current conditions

const weatherBtn = document.getElementById('weatherBtn');
const weatherInput = document.getElementById('weatherCity');
const weatherCard = document.getElementById('weatherCard');

function showWeatherResult(html) {
  const existing = weatherCard.querySelector('.weather-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'weather-result list-unstyled mt-2';
  result.innerHTML = html;
  weatherCard.appendChild(result);
}

weatherBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const city = weatherInput.value.trim();
  if (!city) {
    showWeatherResult('<li class="text-danger">Please enter a city name.</li>');
    return;
  }

  showWeatherResult('<li class="text-muted">Fetching weather...</li>');

  try {
    const response = await fetch(
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const current = data.current_condition[0];
    const area = data.nearest_area[0];
    const cityName = area.areaName[0].value;
    const country = area.country[0].value;
    const desc = current.weatherDesc[0].value;
    const tempC = current.temp_C;
    const tempF = current.temp_F;
    const humidity = current.humidity;
    const windKmph = current.windspeedKmph;
    const windMph = Math.round(windKmph * 0.621371);
    const feelsC = current.FeelsLikeC;
    const feelsF = current.FeelsLikeF;

    showWeatherResult(`
      <li class="fw-bold">${cityName}, ${country}</li>
      <li>${desc}</li>
      <li>${tempC}°C / ${tempF}°F</li>
      <li class="text-muted">Feels like ${feelsC}°C / ${feelsF}°F</li>
      <li class="text-muted">Humidity: ${humidity}%</li>
      <li class="text-muted">Wind: ${windKmph} km/h / ${windMph} mph</li>
    `);
  } catch (err) {
    console.error('Weather API error:', err);
    showWeatherResult('<li class="text-danger">Could not fetch weather data. Please check the city name and try again.</li>');
  }
});
