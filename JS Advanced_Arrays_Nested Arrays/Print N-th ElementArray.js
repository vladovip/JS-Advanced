function solve(inputArr, stepNumber) {

let result = [];
for (let index = 0; index < inputArr.length; index+=stepNumber ) {
   result.push(inputArr[index]);

}
 return result;

}

solve(["5", "20", "31", "4", "20"], 2);

console.log(`-------------`);

solve(["dsa", "asd", "test", "tset"], 2);


//  second Option : 
//  return inputArr.filter((element, index)=>  index %  stepNumber == 0);