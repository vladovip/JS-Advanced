function sameNumber (param1){

  let num1 = +param1;
  let tempArr = param1.toString().split("");
  let firstDigit = tempArr[0];
  let sum = 0;
  let istheSame = true;
  for (let index = 0; index < tempArr.length; index++) {
      sum += +tempArr[index];
      if( tempArr[index] != firstDigit){
          istheSame = false;
      }
  }
  console.log(istheSame);
  console.log(sum);


}

sameNumber (2222222 ); 

sameNumber (1234);
