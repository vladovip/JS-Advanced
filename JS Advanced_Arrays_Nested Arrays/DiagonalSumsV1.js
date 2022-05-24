function diagonalSum ( matrixArr) {

    let sum = 0;
    let sum2 = 0;
    matrixArr.forEach((el, index) => (sum += el[index]));
    matrixArr.reverse().forEach((el, index) => (sum2 += el[index]));
  
    return [sum,sum2].join(" "); 


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
  