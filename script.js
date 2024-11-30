function countDigits() {
    const input = document.getElementById('userInput').value;
    const digitCount = (input.match(/\d/g) || []).length; // Match all digits
    document.getElementById('result').innerText = `Number of digits: ${digitCount}`;
  }
  