function solve( inputArr) {
 let resultArr = [];
 let biggestNum = inputArr[0];

 for (let index = 0; index < inputArr.length; index++) {
    let currentNum = inputArr[index];
    if ( currentNum >= biggestNum){
        resultArr.push(currentNum);
        biggestNum = currentNum;
    }
 }
      return resultArr;

}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);



//  Second option - 100 points :

// function solve(inputArr) {
//   let resultArr = [];
//   let biggestNum = inputArr[0];
//   inputArr.reduce((previousValue, currentValue) => {
//     if (currentValue >= biggestNum) {
//       resultArr.push(currentValue);
//       biggestNum = currentValue;
//       return resultArr;
//     }
//   }, biggestNum);

//   return resultArr;

// }

// solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// solve([1, 2, 3, 4]);
// solve([20, 3, 2, 15, 6, 1]);
