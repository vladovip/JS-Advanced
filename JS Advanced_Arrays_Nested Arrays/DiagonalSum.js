function diagonalSum(inputArr) {

  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let firstIndex = 0;
  let secondIndex = inputArr[0].length - 1;
  inputArr.forEach((array) => {
    firstDiagonal += array[firstIndex++];
    secondDiagonal += array[secondIndex--];
  });
  console.log(firstDiagonal + " " + secondDiagonal);
  
}

diagonalSum([
  [20, 40],
  [10, 60],
]);

console.log(`-------- `);

diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
