const typeEl = document.getElementById('type');
const categoryEl = document.getElementById('category');
const btn = document.getElementById('generate');
const resultEl = document.getElementById('result');
const answerEl = document.getElementById('answer');
const errorEl = document.getElementById('error');
const endpointEl = document.getElementById('endpoint');

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Data store (populated from data.json if available)
let staticData = null;

// Update endpoint preview (show both options)
function updateEndpointPreview() {
  const type = typeEl.value;
  const category = categoryEl.value;
  endpointEl.textContent = `data.json OR /api?type=${encodeURIComponent(type)}&category=${encodeURIComponent(category)}`;
}

// Populate category select based on selected type and available data
function populateCategories(type) {
  // clear existing options
  categoryEl.innerHTML = '';

  const jokeKeys = staticData && staticData.jokes ? Object.keys(staticData.jokes) : ['general', 'programming', 'dad'];
  const triviaKeys = staticData && staticData.trivia ? Object.keys(staticData.trivia) : ['science', 'history', 'geography', 'sports'];

  const keys = type === 'joke' ? jokeKeys : triviaKeys;

  keys.forEach(k => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = k.charAt(0).toUpperCase() + k.slice(1);
    categoryEl.appendChild(opt);
  });

  // set category to first option
  if (categoryEl.options.length) categoryEl.selectedIndex = 0;
  updateEndpointPreview();
}

typeEl.addEventListener('change', () => {
  populateCategories(typeEl.value);
  updateEndpointPreview();
});
categoryEl.addEventListener('change', updateEndpointPreview);

// Try to load static data.json first (works on GitHub Pages). If not found, fall back to server API (api.php).
async function generate() {
  errorEl.style.display = 'none';
  resultEl.textContent = 'Loading...';
  answerEl.textContent = '—';

  const type = typeEl.value;
  const category = categoryEl.value;

  // Helper to render result
  function renderFromData(dataObj) {
    if (type === 'joke') {
      const pool = (dataObj.jokes && dataObj.jokes[category]) ? dataObj.jokes[category] : dataObj.jokes.general;
      resultEl.textContent = pickRandom(pool) || 'No joke available.';
      answerEl.textContent = '—';
    } else {
      const pool = (dataObj.trivia && dataObj.trivia[category]) ? dataObj.trivia[category] : dataObj.trivia.science;
      const item = pickRandom(pool) || { q: 'No question available.', a: '—' };
      resultEl.textContent = item.q;
      answerEl.textContent = item.a || '—';
    }
  }

  // First attempt: fetch local data.json
  try {
    const res = await fetch('data.json', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      renderFromData(data);
      return;
    }
  } catch (e) {
    // ignore and fall back to API
  }

  // Fallback: try server-side API (api.php) - requires PHP server
  try {
    const res2 = await fetch(`api.php?type=${encodeURIComponent(type)}&category=${encodeURIComponent(category)}`);
    if (!res2.ok) throw new Error('Network error');
    const data2 = await res2.json();

    if (type === 'joke') {
      resultEl.textContent = data2.joke || 'No joke returned.';
      answerEl.textContent = '—';
    } else {
      resultEl.textContent = data2.question || 'No trivia question returned.';
      answerEl.textContent = data2.answer || '—';
    }
    return;
  } catch (e) {
    resultEl.textContent = 'Click “Generate” to get a joke or trivia.';
    answerEl.textContent = '—';
    errorEl.style.display = 'block';
  }
}

btn.addEventListener('click', generate);
