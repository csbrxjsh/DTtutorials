window.addEventListener('DOMContentLoaded', () => {
  // Background color change
  document.getElementById('bgColorPicker').addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
  });

  // Paragraph color change
  document.getElementById('textColorPicker').addEventListener('input', (e) => {
    document.getElementById('paragraph').style.color = e.target.value;
  });

  // Modify div content
  document.getElementById('changeTextBtn').addEventListener('click', () => {
    const userInput = prompt('Enter new content for the div:');
    if (userInput !== null && userInput.trim() !== '') {
      document.getElementById('content-box').textContent = userInput;
    }
  });

  // Replace image
  document.getElementById('changeImageBtn').addEventListener('click', () => {
    const newImageUrl = prompt('Enter the URL of the new image:');
    if (newImageUrl !== null && newImageUrl.trim() !== '') {
      document.getElementById('mainImage').src = newImageUrl;
    }
  });
});
