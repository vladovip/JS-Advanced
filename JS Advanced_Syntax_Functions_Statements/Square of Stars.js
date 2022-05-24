function squareOfStars (param1) {
    
    let num = +param1;
    let star = '* ';

    if ( num === null || num === ' ' || num === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(star.repeat(5));
        }
    } else {
        for (let i = 0; i < num; i++) {
            console.log(star.repeat(num));
        }
    }

}


squareOfStars (1);
console.log(`------`); 
squareOfStars (2); 
console.log(`------`); 
squareOfStars (5); 
console.log(`------`); 
squareOfStars (7); 
