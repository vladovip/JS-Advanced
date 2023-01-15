function solve (arr){

let initialValue = 1;
let resultArr= [];
for (let el of arr) {

    if( el == "add"){
       resultArr.push(initialValue);
    } else if (el == "remove") {
       resultArr.pop();
    }
    initialValue++;
}
if( resultArr.length == 0){
    console.log("Empty");
} else{
    console.log(resultArr.join("\n"));
}

}


solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);
