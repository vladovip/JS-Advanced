function evenPositionElements  (inputArr) {


let newStr = '';
for (let index = 0; index < inputArr.length; index++) {
     
    if ( index % 2 == 0 ){
        newStr += " "+inputArr[index];
    }
    
}
console.log(newStr);

}

evenPositionElements (['20', '30', '40', '50', '60']);
evenPositionElements (['5', '10']);