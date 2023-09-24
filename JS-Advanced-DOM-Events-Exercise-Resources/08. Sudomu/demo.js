var matrix = [
    [ 1, 2, 3 ],
    [ 7, 2, 6 ]
  ];
  
  // sums of rows
  var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
  // [ 6, 15 ]

  // sums of columns
  var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
   //[ 8, 4, 9 ]

  console.log(rowSum);
  console.log(colSum);
 
 

  let sumR = rowSum.reduce((acc,currV) => acc + currV, 0);
  console.log(sumR);
   // 21 
  let sumCol = colSum.reduce((acc,currV) => acc + currV, 0);
  console.log(sumCol);
  //  21