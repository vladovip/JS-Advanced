function solve(inputArr) {
  let tempArr = [];

  for (let i = 1; i < inputArr.length; i += 2) {
    tempArr.push(inputArr[i]);
  }
  tempArr = tempArr
    .map((x) => x * 2)
    .reverse()
    .join(" ");
  return tempArr;
}
