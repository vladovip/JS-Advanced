function solve(arrMatrix) {
  let resultRowCollection = [];
  let sumEachRow = 0;
  // reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)
  for (let rowIndex = 0; rowIndex < arrMatrix.length; rowIndex++) {
    sumEachRow = arrMatrix[rowIndex].reduce((accumulator, currentValue) => {
      let result = accumulator + currentValue;
      return result;
    }, 0);
    resultRowCollection.push(sumEachRow);
  }
    //console.log(resultRowCollection);

  //      sums of rows
  // var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
  //      sums of columns
  // var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

  let colSumCollectionArr = arrMatrix.reduce((a, b) =>a.map((x, i) => x + b[i]));
  let result = function arraysEqual(rowSum,colSum) {
    return JSON.stringify(rowSum) === JSON.stringify(colSum);
}
   
 console.log(result(colSumCollectionArr,resultRowCollection));

}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);

solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
