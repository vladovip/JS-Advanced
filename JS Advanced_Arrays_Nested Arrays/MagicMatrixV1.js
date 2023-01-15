function solve(matrixArr) {
     let isMagical = true;


     for (let index = 0; index < matrixArr.length; index++) {
         let sumRowOne = matrixArr[index].reduce((a,b)=> a + b , 0);
         let sumRowTwo = matrixArr[index+1].reduce((a,b)=> a + b , 0);
         let sumColonOne = 0;
         let sumColonTwo = 0;

         for (let j = 0; j < matrixArr.length; j++) {
            sumColonOne += matrixArr[index][j];
            sumColonTwo +=  matrixArr[index+1][j];
         }

         if ( sumRowOne !== sumRowTwo || sumColonOne !== sumColonTwo ){
            isMagical = false;
       }
       return isMagical;
     }
  }
  
  console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ]));

  console.log(`----------`);

  console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ]));

  console.log(`----------`);

  console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ]));
  