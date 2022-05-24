function mathOperations(a, b, paramStr) {
  let num1 = +a;
  let num2 = +b;
  let operator = paramStr;
  let result = 0;
  switch (operator) {
    case "+": result = num1 + num2;
      break;
    case "-": result = num1 - num2;
      break;
    case "*": result = num1 * num2;
      break;
    case "/": result = num1 / num2;
      break;
    case "%": result = num1 % num2;
      break;
    case "**": result = num1 ** num2;
      break;

    default:
      break;
  }

  console.log(result);

}

mathOperations(5, 6, "+");

console.log(`---------`);

mathOperations(3, 5.5, "*");
