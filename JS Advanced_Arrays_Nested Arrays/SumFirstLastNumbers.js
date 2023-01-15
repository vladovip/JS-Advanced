function sumFirstLast (inputArr){


let firstElement = +inputArr.shift();
let lastElement = +inputArr.pop();
let sum = lastElement + firstElement;
console.log(sum);


}

sumFirstLast (['20', '30', '40']);
sumFirstLast (['5', '10']);




//  Second Option: 
// function sumFirstLast (inputArr){
//     let firstElement = +[...inputArr].shift();
//     let lastElement = +[...inputArr].pop();
//     let sum = lastElement + firstElement;
//     console.log(sum);
//     }

// sumFirstLast (['20', '30', '40']);
// sumFirstLast (['5', '10']);
    
