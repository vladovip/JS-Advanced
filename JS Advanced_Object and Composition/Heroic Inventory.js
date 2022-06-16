function heroicInventory (inputArr){

   let resultArr = [];

   for (let element of inputArr) {
       let [name, level, itemsSequence] = element.split(" / ");
       level = Number(level);
       //    condition ? exprIfTrue : exprIfFalse
       items = itemsSequence ? itemsSequence.split(", ") : [];
       resultArr.push({name, level,  items});
   }
   console.log(JSON.stringify(resultArr));
}



heroicInventory (['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log(`----------`);


heroicInventory (['Jake / 1000 / Gauss, HolidayGrenade']);


