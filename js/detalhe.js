const selectedNumberEl = document.getElementById('selected-number');
const statusBadgeEl = document.getElementById('status-badge');
const reservedByEl = document.getElementById('reserved-by');
const whatsappButton = document.getElementById('whatsapp-button');
const whatsappDisabled = document.getElementById('whatsapp-disabled');
const reservedMessage = document.getElementById('reserved-message');
const copyPixButton = document.getElementById('copy-pix');
const pixKeyEl = document.getElementById('pix-key');

const params = new URLSearchParams(window.location.search);
const rawNumber = params.get('numero');
const parsedNumber = rawNumber ? parseInt(rawNumber, 10) : NaN;

const formatNumberKey = (value) => (value === 100 ? '100' : String(value).padStart(2, '0'));

const isInvalid = Number.isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 100;

if (isInvalid) {
  alert('Número inválido. Escolha um número disponível.');
  window.location.href = 'index.html';
} else {
  const formattedNumber = formatNumberKey(parsedNumber);

  fetch('data/rifa.json')
    .then((response) => response.json())
    .then((data) => {
      const item = data[formattedNumber];

      if (!item) {
        alert('Número não encontrado. Volte e escolha outro.');
        window.location.href = 'index.html';
        return;
      }

      selectedNumberEl.textContent = formattedNumber;

      if (item.reservado) {
        selectedNumberEl.classList.add('reserved');
        statusBadgeEl.textContent = 'Reservado 🔒';
        statusBadgeEl.classList.add('reserved');
        reservedByEl.textContent = `Reservado por: ${item.nome || 'Participante'}`;
        reservedByEl.classList.remove('hidden');
        whatsappButton.classList.add('hidden');
        whatsappDisabled.classList.remove('hidden');
        reservedMessage.classList.remove('hidden');
      } else {
        selectedNumberEl.classList.add('available');
        statusBadgeEl.textContent = 'Disponível ✅';
        statusBadgeEl.classList.add('available');

        const message = `Olá Jamilly, gostaria de reservar o número ${formattedNumber}, já te mando o comprovante do PIX. Me deseje boa sorte 😄`;
        whatsappButton.href = `https://wa.me/5598984614936?text=${encodeURIComponent(message)}`;
      }
    })
    .catch(() => {
      alert('Não foi possível carregar os dados da rifa.');
      window.location.href = 'index.html';
    });
}

copyPixButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixKeyEl.textContent.trim());
    const originalText = copyPixButton.textContent;
    copyPixButton.textContent = '✅ Copiado!';
    setTimeout(() => {
      copyPixButton.textContent = originalText;
    }, 2000);
  } catch (error) {
    alert('Não foi possível copiar a chave PIX.');
  }
});
