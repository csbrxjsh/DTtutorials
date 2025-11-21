const typeEl = document.getElementById('type');
const categoryEl = document.getElementById('category');
const btn = document.getElementById('generate');
const resultEl = document.getElementById('result');
const answerEl = document.getElementById('answer');
const errorEl = document.getElementById('error');
const endpointEl = document.getElementById('endpoint');

// Change endpoint preview on select change
function updateEndpointPreview() {
  const type = typeEl.value;
  const category = categoryEl.value;
  endpointEl.textContent = `/api?type=${encodeURIComponent(type)}&category=${encodeURIComponent(category)}`;
}
typeEl.addEventListener('change', updateEndpointPreview);
categoryEl.addEventListener('change', updateEndpointPreview);
updateEndpointPreview();

// Fetch from API
async function generate() {
  errorEl.style.display = 'none';
  resultEl.textContent = 'Loading...';
  answerEl.textContent = '—';

  const type = typeEl.value;
  const category = categoryEl.value;

  try {
    const res = await fetch(`/api?type=${encodeURIComponent(type)}&category=${encodeURIComponent(category)}`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();

    if (type === 'joke') {
      resultEl.textContent = data.joke || 'No joke returned.';
      answerEl.textContent = '—';
    } else {
      resultEl.textContent = data.question || 'No trivia question returned.';
      answerEl.textContent = data.answer || '—';
    }
  } catch (e) {
    resultEl.textContent = 'Click “Generate” to get a joke or trivia.';
    answerEl.textContent = '—';
    errorEl.style.display = 'block';
  }
}
btn.addEventListener('click', generate);
