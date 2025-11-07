// Background color change
document.getElementById('bgColorPicker').addEventListener('input', function () {
  document.body.style.backgroundColor = this.value;
});

// Paragraph text color change
document.getElementById('textColorPicker').addEventListener('input', function () {
  document.getElementById('paragraph').style.color = this.value;
});

// Change div text
document.getElementById('changeTextBtn').addEventListener('click', function () {
  document.getElementById('content-box').textContent = 'The content has been updated!';
});

// Replace image
document.getElementById('changeImageBtn').addEventListener('click', function () {
  const newImageUrl = 'https://via.placeholder.com/300x200/ff7f7f/333333?text=New+Image';
  document.getElementById('mainImage').src = newImageUrl;
});
