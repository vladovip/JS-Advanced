function solve(n, k) {

  let num1 = n;
  let num2 = k;
  let array = [];
  array.length = num1;
  array[0] = 1;

  for (let i = 1; i < num1; i++) {
    
    let sum = 0;
    let startIndex = Math.max(0, i - num2);

    for (let j = startIndex; j < i; j++) {
      sum += array[j];
    }
    array[i] = sum;
  }

  return array;
}

solve(6, 3);

console.log(`---------`);

solve(8, 2);



// Second option :

// function solve (n, k) {
//     let result = [1];

//     for (let i = 1; i < n; i++) {
//         let startIndex = Math.max(0, i - k);
//         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
//         result.push(currentElement);
//     }

//     return result;
// }


// solve(6, 3);
