function solve(arr) {
    result = [];
    let tempBiggerNum = arr[0];

for (let index = 0; index < arr.length; index++) {
       let currentNum  = arr[index];
       if ( currentNum >= tempBiggerNum){
        result.push(currentNum);
        tempBiggerNum = currentNum;
       }
       
}
    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
