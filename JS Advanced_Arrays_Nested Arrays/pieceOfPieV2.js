function solve(inputArr, str1, str2) {
  let startIndex = inputArr.indexOf(str1);
  let endIndex = inputArr.indexOf(str2);
  let pieceOfPie = inputArr.slice(startIndex, endIndex + 1);
  return pieceOfPie;
}
