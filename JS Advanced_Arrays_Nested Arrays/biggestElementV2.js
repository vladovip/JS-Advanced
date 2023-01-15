function solve(inputArr) {
  let result = [];
  for (let el of inputArr) {
    result = result.concat(el);
  }
  let biggestNum = result.sort((a, b) => a - b).pop();
  return biggestNum;
}
