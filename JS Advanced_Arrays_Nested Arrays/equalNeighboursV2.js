function solve(inputArr) {
 
    let counter = 0;

  for (let rowIndex = 0; rowIndex < inputArr.length; rowIndex++) {
    for ( columnIndex = 0; columnIndex < inputArr[rowIndex].length; columnIndex++){
        let currentElement = inputArr[rowIndex][columnIndex];
        if ((columnIndex + 1) < inputArr[rowIndex].length ){
            let nextElement = inputArr[rowIndex][columnIndex + 1];
            if( currentElement == nextElement){
                counter++;
            }
        }
    }
  }

  for (let rowIndex = 0; rowIndex < inputArr.length; rowIndex++) {
    for ( columnIndex = 0; columnIndex < inputArr[rowIndex].length; columnIndex++){
        let currentElement = inputArr[rowIndex][columnIndex];
        if ( (rowIndex +1) < inputArr.length ){
        let nextElement = inputArr[rowIndex + 1][columnIndex];
        if(nextElement == currentElement ){
         counter++;
        }
        }  
    }
  }

    return counter;

}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
