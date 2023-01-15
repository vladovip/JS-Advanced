function solve (inputArr){
 let newArr = [];

for (let index = 1; index < inputArr.length; index+=2) {
      newArr.push(inputArr[index]); 
}
 let result = newArr.map( x => x*2).reverse().join(" ");
 console.log(result);

}

solve([10, 15, 20, 25]); 

console.log(`--------`);

solve([3, 0, 10, 4, 7, 3]); 



// Second option: 

// function solve (inputArr){
//       let newArr = inputArr.filter((element, index) => index % 2 != 0).map(x => x*2).reverse().join(" ");
//       console.log(newArr);
//      }

// solve([10, 15, 20, 25]); 

// console.log(`--------`);

// solve([3, 0, 10, 4, 7, 3]); 