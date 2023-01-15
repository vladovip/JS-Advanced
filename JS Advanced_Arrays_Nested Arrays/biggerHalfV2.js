function solve(inputArr) {
  if (inputArr.length % 2 == 0) {
    let sortedArr = inputArr.sort((a, b) => a - b);
    let resultArr = sortedArr.slice(inputArr.length / 2);
    return resultArr;
  } else if (inputArr.length % 2 !== 0) {
    let sortedArr = inputArr.sort((a, b) => a - b);
    let resultArr = sortedArr.slice(Math.floor(inputArr.length / 2));
    return resultArr;
  }
}
