function calc() {
  // console.log('hello');
  // TODO: sum = num1 + num2
  let firstNum = document.getElementById("num1").value;
  let SecondNum = document.getElementById("num2").value;
  let sumResult = Number(firstNum) + Number(SecondNum);
  document.getElementById('sum').value = sumResult;
}
