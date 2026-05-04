const grid = document.getElementById('numbers-grid');
const availableCountEl = document.getElementById('available-count');
const reservedCountEl = document.getElementById('reserved-count');

const formatNumberKey = (value) => (value === 100 ? '100' : String(value).padStart(2, '0'));

fetch('data/rifa.json')
  .then((response) => response.json())
  .then((data) => {
    let availableCount = 0;
    let reservedCount = 0;

    for (let i = 1; i <= 100; i += 1) {
      const key = formatNumberKey(i);
      const item = data[key];

      const button = document.createElement('button');
      button.type = 'button';
      button.classList.add('number-card');
      button.textContent = key;

      if (item && item.reservado) {
        reservedCount += 1;
        button.classList.add('reserved');
        button.disabled = true;

        const lock = document.createElement('span');
        lock.classList.add('lock');
        lock.textContent = '🔒';
        button.appendChild(lock);
      } else {
        availableCount += 1;
        button.classList.add('available');
        button.addEventListener('click', () => {
          window.location.href = `detalhe.html?numero=${key}`;
        });
      }

      grid.appendChild(button);
    }

    availableCountEl.textContent = availableCount;
    reservedCountEl.textContent = reservedCount;
  })
  .catch(() => {
    grid.innerHTML = '<p>Não foi possível carregar os números. Tente novamente.</p>';
  });
