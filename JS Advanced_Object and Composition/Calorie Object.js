function calorieOBJ( inputArr ) {
   let obj = {};

  for (let index = 0; index < inputArr.length; index +=2) {
       let product = inputArr[index];
       let calories = inputArr[index+1];
       obj[product] = +calories;
      
  }
  console.log(obj);

}

calorieOBJ(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

calorieOBJ(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
