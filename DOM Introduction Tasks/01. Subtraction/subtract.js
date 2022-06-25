function subtract() {
  let firstNumRef = document.getElementById('firstNumber').value;
  let secondNumRef = document.getElementById('secondNumber').value;
  let resultContentRef = document.getElementById('result');
  resultContentRef.textContent = Number(firstNumRef) - Number(secondNumRef);
}