function sumNumbersNtoM (param1, param2) {


    let num1 = +param1;
    let num2 = +param2;
    let result = 0;
    for (let i = num1; i <= num2 ; i++) {
        result += i;
        
    }
    console.log(result);



}


sumNumbersNtoM ('1', '5'  );

console.log(`********`);

sumNumbersNtoM ('-8', '20'  );