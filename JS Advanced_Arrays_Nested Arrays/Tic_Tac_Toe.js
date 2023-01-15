function solve(initialStateMatrix, playersMoveArr) {

    let firstPlayerMark = "X";
    let secondPlayerMark = "O";
    
    // let make For loop through CommandArr by index
    // make check for index separation even index - 1 player - 0,2,4,6 etc. -> playersMoveArr
    // make check for index separation, odd index - 2 player - 1,3,5,7, etc. -> playersMoverArr
    // Nested  For Loops to iterate over the Matrix by given coordinates;
    // check the current Status , if its == false,  switch value to =>  X || O, based on PlayerMove( odd / even index);
    // make check and print the message if the element is already occupied or not;
    // print the message if there is no free spaces and nobody wins the game;
    // print message for the winner and current state of MatrixDashBoard; 




}

solve(
  [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ],
  ["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]
);

console.log(`-------`);


solve(
  [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ],
  ["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]
);

console.log(`-------`);
