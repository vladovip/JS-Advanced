function subSum(arr, startIdnex, endIdnex) {
  
    if (Array.isArray(arr) == false) {
    return NaN;
  }

  if (startIdnex < 0) {
    startIdnex = 0;
  }


  if (endIdnex > arr.length - 1) {
    endIdnex = arr.length - 1;
  }

  
  let sumElements = 0;
  for (let i = startIdnex; i <= endIdnex; i++ ) {
    sumElements += Number(arr[i]);
  }
  return sumElements;

}



console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum("text", 0, 2));
