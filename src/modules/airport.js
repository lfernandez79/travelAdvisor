// Airport Finder — uses airport-info RapidAPI
// API key stored in .env as VITE_AIRPORT_API_KEY

const airportBtn = document.getElementById('airportBtn');
const cityNameInput = document.getElementById('cityName');
const airportNames = document.getElementById('airportNames');

function showAirportResult(html) {
  const existing = airportNames.querySelector('.airport-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'airport-result list-unstyled mt-2';
  result.innerHTML = html;
  airportNames.appendChild(result);
}

airportBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const code = cityNameInput.value.trim().toUpperCase();
  if (!code || code.length !== 3) {
    showAirportResult('<li class="text-danger">Please enter a valid 3-letter IATA airport code.</li>');
    return;
  }

  showAirportResult('<li class="text-muted">Searching...</li>');

  try {
    const response = await fetch(
      `https://airport-info.p.rapidapi.com/airport?iata=${encodeURIComponent(code)}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'airport-info.p.rapidapi.com',
          'x-rapidapi-key': import.meta.env.VITE_AIRPORT_API_KEY,
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    if (!data.name) {
      showAirportResult('<li class="text-danger">Airport not found. Check the IATA code and try again.</li>');
      return;
    }

    showAirportResult(`
      <li class="fw-bold">${data.name}</li>
      <li>${data.street_number ?? ''} ${data.street ?? ''}</li>
      <li>${data.city ?? ''} ${data.state ? data.state + ',' : ''} ${data.postal_code ?? ''}</li>
      <li>${data.country ?? ''}</li>
      ${data.phone ? `<li>${data.phone}</li>` : ''}
      ${data.website ? `<li><a href="${data.website}" target="_blank" rel="noopener">${data.website}</a></li>` : ''}
    `);
  } catch (err) {
    console.error('Airport API error:', err);
    showAirportResult('<li class="text-danger">Could not fetch airport data. Please try again.</li>');
  }
});
