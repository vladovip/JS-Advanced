function solve (arr){
 
    let counter = arr.length;
    arr.sort((a,b) => a.localeCompare(b));
    for (let index = 0; index < arr.length; index++) {
        console.log(`${index+1}.${arr[index]}`);
        
    }
} 

solve(["John", "Bob", "Christina", "Ema"]);
