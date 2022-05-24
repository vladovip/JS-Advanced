function solve (inputArr) {
    inputArr.sort( (a,b)=> a-b );
    // console.log(inputArr);
   let result = [];
   for (let index = Math.floor(inputArr.length/2); index < inputArr.length; index++) {
        result.push(inputArr[index]);   
   }
   return result;
}

solve ([4, 7, 2, 5]);
solve ([3, 19, 14, 7, 2, 19, 6])
