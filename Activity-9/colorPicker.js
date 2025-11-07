window.addEventListener('DOMContentLoaded', () => {
  // Background color change
  document.getElementById('bgColorPicker').addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
  });

  // Paragraph color change
  document.getElementById('textColorPicker').addEventListener('input', (e) => {
    document.getElementById('paragraph').style.color = e.target.value;
  });

  // Modify div content with user input
  document.getElementById('changeTextBtn').addEventListener('click', () => {
    const userInput = prompt('Enter new content for the div:');
    if (userInput !== null && userInput.trim() !== '') {
      document.getElementById('content-box').textContent = userInput;
    }
  });

  // Replace image with user-provided URL
  document.getElementById('changeImageBtn').addEventListener('click', () => {
    const newImageUrl = prompt('Enter the URL of the new image:');
    if (newImageUrl !== null && newImageUrl.trim() !== '') {
      const img = document.getElementById('mainImage');
      img.src = newImageUrl;
      img.onerror = () => {
        alert('⚠️ Image failed to load. Please check the URL.');
        img.src = 'https://via.placeholder.com/300x200?text=Image+Error';
      };
    }
  });
});
