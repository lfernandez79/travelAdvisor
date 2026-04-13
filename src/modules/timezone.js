// World Time — uses timeapi.io (free, no API key required)
// Timezone values are valid IANA strings selected from the dropdown

const clockSearchBtn = document.getElementById('clockSearchBtn');
const timezoneSelect = document.getElementById('timezone-select');
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

  const timezone = timezoneSelect.value;

  showTimeResult('<li class="text-muted">Searching...</li>');

  try {
    const response = await fetch(
      `https://timeapi.io/api/time/current/zone?timeZone=${encodeURIComponent(timezone)}`
    );

    if (response.status === 400 || response.status === 404) {
      showTimeResult('<li class="text-danger">Timezone not found. Please select a city from the list.</li>');
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

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
