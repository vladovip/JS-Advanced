function equalNumbers(inputMatrix) {
  let counter = 0;

  for (let rowindex = 0; rowindex < inputMatrix.length; rowindex++) {
    for (
      let colIndex = 0;
      colIndex < inputMatrix[rowindex].length - 1;
      colIndex++
    ) {
      if (
        inputMatrix[rowindex][colIndex] == inputMatrix[rowindex][colIndex + 1]
      ) {
        counter++;
      }
    }
  }

  let rowSize = inputMatrix[0].length;

  for (let colIndex = 0; colIndex < rowSize; colIndex++) {
    for (let rowindex = 0; rowindex < inputMatrix.length - 1; rowindex++) {
      if (
        inputMatrix[rowindex][colIndex] == inputMatrix[rowindex + 1][colIndex]
      ) {
        counter++;
      }
    }
  }
  console.log(counter);
}

equalNumbers([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

console.log(`********`);

equalNumbers([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
