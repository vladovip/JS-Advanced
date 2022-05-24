function solve (radius) {

    if ( (typeof radius === "number") == true ){
        let area = Math.pow(radius,2) * Math.PI;
        console.log(area.toFixed(2));  
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }

}

solve (5) ; 
solve ('name') ; 