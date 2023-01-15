function solve(input) {
  let result = [];
  for (let index = 0; index < input.length; index++) {
    let el = Number(input[index]);
    if (el < 0) {
      result.unshift(el);
    } else if (el >= 0) {
      result.push(el);
    }
  }
  console.log(result.join("\n"));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
