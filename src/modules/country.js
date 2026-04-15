// Country Info — uses restcountries.com (free, no API key required)
// Accepts country name and returns flag, capital, population, languages, currency, region

const countryBtn = document.getElementById('countryBtn');
const countryInput = document.getElementById('countryInput');
const countryCard = document.getElementById('countryCard');

function showCountryResult(html) {
  const existing = countryCard.querySelector('.country-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'country-result list-unstyled mt-2';
  result.innerHTML = html;
  countryCard.appendChild(result);
}

countryBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const name = countryInput.value.trim();
  if (!name) {
    showCountryResult('<li class="text-danger">Please enter a country name.</li>');
    return;
  }

  showCountryResult('<li class="text-muted">Searching...</li>');

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fields=name,capital,population,languages,currencies,flags,region,subregion`
    );

    if (response.status === 404) {
      showCountryResult('<li class="text-danger">Country not found. Check the spelling and try again.</li>');
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const c = data[0];

    const flag = c.flags?.emoji ?? c.flags?.png ? `<img src="${c.flags.png}" alt="flag" style="height:16px;vertical-align:middle;margin-right:4px;">` : '';
    const capital = c.capital?.[0] ?? 'N/A';
    const population = c.population?.toLocaleString() ?? 'N/A';
    const region = c.subregion ? `${c.subregion}, ${c.region}` : c.region;
    const languages = c.languages ? Object.values(c.languages).join(', ') : 'N/A';
    const currencies = c.currencies
      ? Object.values(c.currencies).map(cu => `${cu.name} (${cu.symbol ?? ''})`).join(', ')
      : 'N/A';

    showCountryResult(`
      <li class="fw-bold">${flag}${c.name.common}</li>
      <li>Capital: ${capital}</li>
      <li>Region: ${region}</li>
      <li>Population: ${population}</li>
      <li class="text-muted">Languages: ${languages}</li>
      <li class="text-muted">Currency: ${currencies}</li>
    `);
  } catch (err) {
    console.error('Country API error:', err);
    showCountryResult('<li class="text-danger">Could not fetch country data. Please try again.</li>');
  }
});
