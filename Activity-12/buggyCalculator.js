function calculate() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operator = document.getElementById('operator').value;
  const resultDiv = document.getElementById('result');

  let result;

  // Intentional bugs:
  // - Missing parseFloat
  // - Incorrect operator logic
  // - No divide-by-zero check
  // - Typo in 'multiply' case

  if (operator === 'add') {
    result = num1 + num2; // Bug: string concatenation
  } else if (operator === 'sub') {
    result = num1 - num2;
  } else if (operator === 'mult') {
    result = num1 * num2;
  } else if (operator === 'div') {
    result = num1 / num2;
  } else {
    result = 'Invalid operator';
  }

  resultDiv.textContent = 'Result: ' + result;
}
