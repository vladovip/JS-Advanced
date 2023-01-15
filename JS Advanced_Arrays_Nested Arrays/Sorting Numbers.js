function solve(inputArr) {

  let sortedArr = inputArr.sort((a, b) => a - b);
  // console.log(sortedArr);
  // sorted array ->  [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]

  let resultArr = [];

  while (sortedArr.length > 0) {
    let smallerElement = sortedArr.shift();
    let BiggerElement = sortedArr.pop();
    resultArr.push(smallerElement, BiggerElement);
  }

  return resultArr;

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

// output  should be - [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
