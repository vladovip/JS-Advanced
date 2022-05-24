function aggregateElements (inputArr) {
    
 let sumArr = 0;
 for (let element of inputArr) {
    sumArr += +element;  
 }
 console.log(sumArr);
 
 let sumIversion = 0
 for (let element of inputArr) {
    sumIversion += +(1/element);  
 }
 console.log(sumIversion);
 

 let concatArr = "";
 for (let element of inputArr) {
    concatArr += element;  
 }
 console.log(concatArr);

}

aggregateElements([1, 2, 3]);
console.log(`-------------`);
aggregateElements ([2, 4, 8, 16]);
