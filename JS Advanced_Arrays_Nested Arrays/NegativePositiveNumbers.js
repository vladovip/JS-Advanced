function PositiveNegative (inputArr){

 let result = [];

 for (let num of inputArr) {

    if ( num < 0) {
        result.unshift(num);
    } else {
        result.push(num);
    }
 }
 console.log(result.join("\n"));

}
PositiveNegative ([7, -2, 8, 9]);
console.log(`------------`);
PositiveNegative ([3, -2, 0, -1]);