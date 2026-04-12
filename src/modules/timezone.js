// World Time — uses timeapi.io (free, no API key required)
// Input: region (e.g. "America") and city (e.g. "New_York")

const clockSearchBtn = document.getElementById('clockSearchBtn');
const clockRegionInput = document.getElementById('clock-region');
const clockCityInput = document.getElementById('clock-city');
const clockZones = document.getElementById('clockZones');

function showTimeResult(html) {
  const existing = clockZones.querySelector('.time-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'time-result list-unstyled mt-2';
  result.innerHTML = html;
  clockZones.appendChild(result);
}

clockSearchBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const region = clockRegionInput.value.trim();
  const city = clockCityInput.value.trim();

  if (!region || !city) {
    showTimeResult('<li class="text-danger">Please enter both a region and a city.</li>');
    return;
  }

  showTimeResult('<li class="text-muted">Searching...</li>');

  // Encode each part separately so the / remains a path separator
  const timezone = `${encodeURIComponent(region)}/${encodeURIComponent(city)}`;

  try {
    const response = await fetch(
      `https://timeapi.io/api/time/current/zone?timeZone=${timezone}`
    );

    if (response.status === 400 || response.status === 404) {
      showTimeResult(`<li class="text-danger">Timezone not found. Try "America" / "New_York" or "Europe" / "London".</li>`);
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    // timeapi.io returns dateTime as "2024-01-12T14:30:45.123"
    const dt = new Date(data.dateTime);
    const formattedTime = new Intl.DateTimeFormat('en-US', {
      timeZone: data.timeZone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(dt);

    showTimeResult(`
      <li class="fw-bold">${data.timeZone}</li>
      <li>${formattedTime}</li>
      <li class="text-muted">${data.dstActive ? 'Daylight Saving Time active' : 'Standard Time'}</li>
    `);
  } catch (err) {
    console.error('WorldTime API error:', err);
    showTimeResult('<li class="text-danger">Could not fetch time data. Please try again.</li>');
  }
});
