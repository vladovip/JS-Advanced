function solve(inputArr) {
  //Write a function that finds the sum at the main and the secondary diagonals.
  let sumFirstDiagonal = 0;
  let sumSecondaryDiagonal = 0;
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    sumFirstDiagonal += inputArr[i][i];
    sumSecondaryDiagonal += inputArr[i][n - i - 1];
  }

  console.log(sumFirstDiagonal + " " + sumSecondaryDiagonal);
}
