// Unit Converter — pure JS, no API required
// Categories: Temperature, Distance, Weight, Volume

const converterBtn = document.getElementById('converterBtn');
const converterCategory = document.getElementById('converterCategory');
const converterInput = document.getElementById('converterInput');
const converterUnit = document.getElementById('converterUnit');
const converterCard = document.getElementById('converterCard');

const units = {
  temperature: ['°C', '°F'],
  distance:    ['km', 'mi'],
  weight:      ['kg', 'lbs'],
  volume:      ['L', 'gal'],
};

function populateUnits() {
  const category = converterCategory.value;
  const options = units[category];
  converterUnit.innerHTML = options
    .map(u => `<option value="${u}">${u}</option>`)
    .join('');
}

converterCategory.addEventListener('change', populateUnits);
populateUnits();

function convert(value, from, category) {
  switch (category) {
    case 'temperature':
      if (from === '°C') return [{ label: '°F', value: (value * 9/5 + 32).toFixed(1) }];
      return [{ label: '°C', value: ((value - 32) * 5/9).toFixed(1) }];
    case 'distance':
      if (from === 'km') return [{ label: 'mi', value: (value * 0.621371).toFixed(2) }];
      return [{ label: 'km', value: (value * 1.60934).toFixed(2) }];
    case 'weight':
      if (from === 'kg') return [{ label: 'lbs', value: (value * 2.20462).toFixed(2) }];
      return [{ label: 'kg', value: (value * 0.453592).toFixed(2) }];
    case 'volume':
      if (from === 'L') return [{ label: 'gal', value: (value * 0.264172).toFixed(2) }];
      return [{ label: 'L', value: (value * 3.78541).toFixed(2) }];
    default:
      return [];
  }
}

function showConverterResult(html) {
  const existing = converterCard.querySelector('.converter-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'converter-result list-unstyled mt-2';
  result.innerHTML = html;
  converterCard.appendChild(result);
}

converterBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const raw = converterInput.value.trim();
  const value = parseFloat(raw);

  if (!raw || isNaN(value)) {
    showConverterResult('<li class="text-danger">Please enter a valid number.</li>');
    return;
  }

  const category = converterCategory.value;
  const from = converterUnit.value;
  const results = convert(value, from, category);

  const lines = results.map(r =>
    `<li class="fw-bold">${value} ${from} = ${r.value} ${r.label}</li>`
  ).join('');

  showConverterResult(lines);
});
