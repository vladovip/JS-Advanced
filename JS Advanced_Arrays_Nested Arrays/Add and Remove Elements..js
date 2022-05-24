function addRemoveElements(inputArr) {

let initialValue = 1;
let counter = 0;
let resultArr = [];
// resultArr.unshift(initialValue);
// console.log(resultArr);
for ( let command of inputArr) {
    if ( command == "add"  ){
        resultArr.push(initialValue);
        initialValue+=1;
    } else if ( command == "remove"){
        initialValue+=1;
        resultArr.pop();
    }  
}
  
// console.log(resultArr);
if (resultArr.length > 0){
    console.log(resultArr.join("\n"));
} else {
    console.log("Empty");
}

}


addRemoveElements(["add", "add", "add", "add"]);
console.log(`------------`);
addRemoveElements(["add", "add", "remove", "add", "add"]);
console.log(`------------`);
addRemoveElements(["remove", "remove", "remove"]);
