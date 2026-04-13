// Currency Converter — uses api.exchangerate-api.com/v4 (free, no API key required)

const convertBtn = document.getElementById('convertBtn');
const currencyConv = document.getElementById('currencyConv');

function showCurrencyResult(html) {
  const existing = currencyConv.querySelector('.currency-result');
  if (existing) existing.remove();
  const result = document.createElement('ul');
  result.className = 'currency-result list-unstyled mt-2';
  result.innerHTML = html;
  currencyConv.appendChild(result);
}

convertBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const cur1 = document.getElementById('first-currency').value;
  const cur2 = document.getElementById('second-currency').value;
  const amountRaw = document.getElementById('currency-amount').value;
  const amount = parseFloat(amountRaw);

  if (!amountRaw || isNaN(amount) || amount <= 0) {
    showCurrencyResult('<li class="text-danger">Please enter a valid amount greater than 0.</li>');
    return;
  }

  if (cur1 === cur2) {
    showCurrencyResult(`<li class="text-muted">${amount.toFixed(2)} ${cur1} = ${amount.toFixed(2)} ${cur2}</li>`);
    return;
  }

  showCurrencyResult('<li class="text-muted">Converting...</li>');

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${encodeURIComponent(cur1)}`
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const rate = data.rates[cur2];
    if (rate === undefined) {
      showCurrencyResult('<li class="text-danger">Exchange rate not available for this currency pair.</li>');
      return;
    }

    const converted = (rate * amount).toFixed(2);

    showCurrencyResult(`
      <li class="fw-bold">${amount.toFixed(2)} ${cur1} = ${converted} ${cur2}</li>
      <li class="text-muted">Rate: 1 ${cur1} = ${rate.toFixed(4)} ${cur2}</li>
      <li class="text-muted">Rate date: ${data.date}</li>
    `);
  } catch (err) {
    console.error('Currency API error:', err);
    showCurrencyResult('<li class="text-danger">Could not fetch exchange rate. Please try again.</li>');
  }
});
