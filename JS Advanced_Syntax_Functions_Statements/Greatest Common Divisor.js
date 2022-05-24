function GreatestCommonDivisor (param1, param2){  // x,y  
 
    let num1 = Math.abs(param1);
    let num2 = Math.abs(param2);
    
    while(num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
      }

      console.log(num1);
    }

//  console.log(GreatestCommonDivisor (15, 5));
//  console.log(GreatestCommonDivisor (2154, 458));




GreatestCommonDivisor (15, 5);
GreatestCommonDivisor (2154, 458);
