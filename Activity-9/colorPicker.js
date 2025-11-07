function applyColor() {
  const color = document.getElementById('colorPicker').value;

  // a. Change background color
  document.body.style.backgroundColor = color;

  // b. Change paragraph text color
  document.getElementById('colorTarget').style.color = color;

  // c. Change <div> text color
  document.getElementById('textDiv').style.color = color;

  // d. Replace image with a colored box
  const imageBox = document.getElementById('imageBox');
  const image = document.getElementById('image');
  image.style.display = 'none';
  imageBox.style.backgroundColor = color;
}
