function solve(arr, str) {
// 1st solution
//   if (str === "asc") {
//     return arr.sort((a, b) => a - b);
//   } else if (str === "desc") {
//     return arr.sort((a, b) => b - a);
//   }

// 2nd solution
  return str == "asc" ?  arr.sort((a, b) => a-b) : arr.sort((a, b) => b-a)


}

solve([14, 7, 17, 6, 8], "asc");

solve([14, 7, 17, 6, 8], "desc");
