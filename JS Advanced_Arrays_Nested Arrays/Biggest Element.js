function solve( InputArrMatrix) {

    let newArr = [];

    for (let index = 0; index < InputArrMatrix.length; index++) {

       for (let j = 0; j < InputArrMatrix[index].length; j++) {
           
        newArr.push(InputArrMatrix[index][j] );
           
       }
        
    }
  
   let maxNumber = (newArr.sort((a,b) => a-b)).pop();
   return maxNumber;

}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);

console.log(`---------`);

solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
