function TicTacToe(input) {
  let firstPlayer = "X";
  let secondPlayer = "O";
  let dashboard = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];
  let currPlayer = "";

  let playerTurn = 0;
  for (let el of input) {
    if (playerTurn % 2 == 0) {
      currPlayer = firstPlayer;
    } else {
      currPlayer = secondPlayer;
    }
    let [x, y] = el.split(" ");
    x = Number(x);
    y = Number(y);
    if (dashboard[x][y] == "false") {
      dashboard[x][y] = currPlayer;
    } else if (
      dashboard[0].includes("false") == true ||
      dashboard[1].includes("false") == true ||
      dashboard[2].includes("false") == true
    ) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }
    if (
      dashboard[0].includes("false") == false &&
      dashboard[1].includes("false") == false &&
      dashboard[2].includes("false") == false
    ) {
      console.log("The game ended! Nobody wins :(");

      break;
    }

    //main diagonal checker:
    let checker = true;
    for (let i = 0; i < dashboard.length - 1; i++) {
      if (dashboard[i][i] == "false") {
        checker = false;
        break;
      } else if (dashboard[i][i] !== dashboard[i + 1][i + 1]) {
        checker = false;
        break;
      }
    }
    if (checker == true) {
      console.log(`Player ${currPlayer} wins!`);
      break;
    }

    // secondary diagonal checker:
    for (let i = 0; i < dashboard.length - 1; i++) {
      if (dashboard[i][dashboard.length - i - 1] == "false") {
        checker = false;
        break;
      } else if (
        dashboard[i][dashboard.length - i - 1] !==
        dashboard[i + 1][dashboard.length - i - 2]
      ) {
        checker = false;
        break;
      }
    }
    if (checker == true) {
      console.log(`Player ${currPlayer} wins!`);

      break;
    }
    //row checker:
    for (let row of dashboard) {
      checker = true;
      for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == "false") {
          checker = false;
          break;
        } else if (row[i] !== row[i + 1]) {
          checker = false;
          break;
        }
      }
      if (checker == true) {
        console.log(`Player ${currPlayer} wins!`);

        break;
      }
    }
    if (checker == true) {
      break;
    }
    //column checker:
    let count = 0;
    while (count != dashboard.length) {
      checker = true;
      for (let i = 0; i < dashboard.length - 1; i++) {
        if (dashboard[i][count] == "false") {
          checker = false;
          break;
        } else if (dashboard[i][count] !== dashboard[i + 1][count]) {
          checker = false;
          break;
        }
      }
      if (checker == true) {
        console.log(`Player ${currPlayer} wins!`);

        break;
      }
      count++;
    }
    if (checker == true) {
      break;
    }
    playerTurn++;
  }
  for (let row of dashboard) {
    console.log(row.join("\t"));
  }
}

TicTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
TicTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
TicTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
TicTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
TicTacToe([
  "0 0",
  "0 0",
  "0 2",
  "1 1",
  "2 2",
  "1 2",
  "1 0",
  "0 1",
  "2 1",
  "2 0",
]);
