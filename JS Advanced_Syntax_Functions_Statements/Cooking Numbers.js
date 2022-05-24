function cookingNumber(param1, param2, param3, param4, param5, param6) {
  let num = Number(param1);
  let arrayOfCommands = [param2, param3, param4, param5, param6];

  for (let index = 0; index < arrayOfCommands.length; index++) {
      let currentCommand = arrayOfCommands[index];

      if ( currentCommand ==  "chop"){
        num /= 2;
        console.log(num);
    } else if (currentCommand ==  "dice") {
        num = Math.sqrt(num);
        console.log(num);
    } else if ( currentCommand == "spice" ){
        num += 1;
        console.log(num);
    } else if (currentCommand ==  "bake") {
        num *= 3;
        console.log(num);
    } else if (currentCommand == "fillet" ) {
        num *= 0.80;
        console.log(num.toFixed(1));
    }       
  }
  
}

cookingNumber("32", "chop", "chop", "chop", "chop", "chop");

console.log(`---------`);

cookingNumber("9", "dice", "spice", "chop", "bake", "fillet");
