function solve(arr, numRotation) {
    let counter = 0;
    while (counter <  numRotation) {
    let lastEl = arr.pop();
    let firstEl = lastEl;
    arr.unshift(firstEl);
    counter++;

  }

  console.log(arr.join(" "));
}

solve(["1", "2", "3", "4"], 2);

solve(["Banana", "Orange", "Coconut", "Apple"], 15);
