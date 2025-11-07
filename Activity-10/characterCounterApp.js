const textInput = document.getElementById('textInput');
const counter = document.getElementById('counter');
const maxLimitInput = document.getElementById('maxLimit');

function updateCounter() {
  const maxLimit = parseInt(maxLimitInput.value, 10);
  const currentLength = textInput.value.length;

  counter.textContent = `Characters: ${currentLength} / ${maxLimit}`;
  counter.classList.toggle('limit-exceeded', currentLength > maxLimit);
}

textInput.addEventListener('input', updateCounter);
maxLimitInput.addEventListener('input', updateCounter);
