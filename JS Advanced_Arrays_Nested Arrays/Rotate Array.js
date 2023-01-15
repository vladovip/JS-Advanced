function rotateArray(inputArr, stepNum) {
  for (let index = 0; index < stepNum; index++) {
    inputArr.unshift(inputArr.pop());
  }

  console.log(inputArr.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);
console.log(`---------`);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

// Second Option - 100 points in judge:
// function rotateArray(inputArr, stepNum) {
//   if (inputArr.length === stepNum || stepNum === 0) {
//     console.log(inputArr.join(" "));
//   } else {
//     stepNum = stepNum % inputArr.length;

//     for (let i = 0; i < stepNum; i++) {
//       inputArr.unshift(inputArr.pop());
//     }
//     console.log(inputArr.join(" "));
//   }
// }

// rotateArray(["1", "2", "3", "4"], 2);
// console.log(`---------`);
// rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
