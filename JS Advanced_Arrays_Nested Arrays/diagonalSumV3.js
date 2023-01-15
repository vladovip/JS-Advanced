function solve(inputArr) {
  //Write a function that finds the sum at the main and the secondary diagonals.
  let sumFirstDiagonal = 0;
  let sumSecondaryDiagonal = 0;
  let currentIndex = 0;
  let nextIndex = inputArr[currentIndex].length - 1;

  inputArr.forEach((array) => {
    sumFirstDiagonal += array[currentIndex++];
    sumSecondaryDiagonal += array[nextIndex--];
  });

  console.log(sumFirstDiagonal + " " + sumSecondaryDiagonal);
}
