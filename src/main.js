import './modules/airport.js';
import './modules/timezone.js';
import './modules/currency.js';
import './modules/weather.js';
import './modules/converter.js';
import './modules/country.js';

// Tab switching
document.querySelectorAll('[data-bs-toggle="pill"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-pane').forEach(p => {
      p.classList.remove('show', 'active');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.querySelector(btn.dataset.bsTarget).classList.add('show', 'active');
  });
});
