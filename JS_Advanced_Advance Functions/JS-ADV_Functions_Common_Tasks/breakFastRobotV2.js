function breakfast (){

    let stock = {
        protein : 0,
        carbohydrate: 0, 
        fat: 0,  
        flavour: 0,
    }

    // •	apple - made with 1 carbohydrate and 2 flavour
    // •	lemonade - made with 10 carbohydrate and 20 flavour
    // •	burger - made with 5 carbohydrate, 7 fat and 3 flavour
    // •	eggs - made with 5 protein, 1 fat and 1 flavour
    // •	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour

 
    let recipiesObJ = {
        apple : {carbohydrate:1, flavour: 2 },
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat:7, flavour: 3},
        eggs: {protein: 5, fat:1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10,  fat: 10, flavour:10}
    }

    let commands = {
        restock,
        prepare,
        report,

    }
    
    function manager (commandLine) {
         let [command, param1, qty ] = commandLine.split(" ");
         let currentFn = commands[command];
         return currentFn(param1, qty);
    }
    return manager;


    function restock (typeElement, qty){
        stock[typeElement] += Number(qty);
        return "Success";
    }

    function prepare (recipeStr, qty){
        let eachRecipe = Object.entries(recipiesObJ[recipeStr]);
        qty = Number(qty);
        eachRecipe.forEach (element => element[1] *= qty);
        for (let [ingredient, requiredQTY] of eachRecipe) {

            if(stock[ingredient] < requiredQTY ){
                return `Error: not enough ${ingredient} in stock`
            } 
      }

         eachRecipe.forEach( ([ingredient, requiredQty]) => stock[ingredient] -= requiredQty);
         return `Success`;
      
    }
    

    function report (){
      return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }

}


let manager = breakfast (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));

 

