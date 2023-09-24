function juiceFlavor(arrJuices) {
  let bottlesOfJuices = new Map();
  let juicesCollection = new Map();

  for (let line of arrJuices) {
    let [flavour, qty] = line.split(" => ");
    qty = Number(qty);
    //    console.log( flavour, qty )
    if(!juicesCollection.has(flavour)){

        juicesCollection.set(flavour,qty);
        if (juicesCollection.get(flavour) >= 1000){
            let bottles =  Math.trunc(juicesCollection.get(flavour) / 1000);
            let reminderQty = juicesCollection.get(flavour) % 1000;
            if(bottlesOfJuices.has(flavour) == false){
                bottlesOfJuices.set(flavour, bottles);
                juicesCollection.set(flavour,reminderQty);
            } else if (bottlesOfJuices.has(flavour) == true) {
                bottlesOfJuices.set( flavour, bottlesOfJuices.get(flavour) + bottles);
            }
        }
        
    } else if (juicesCollection.has(flavour) == true) {

        juicesCollection.set(flavour, juicesCollection.get(flavour) + qty );

        if(juicesCollection.get(flavour) >= 1000){
            let bottlesJuice = Math.trunc( juicesCollection.get(flavour)/1000);
            let remainQty = juicesCollection.get(flavour) % 1000;
            if(bottlesOfJuices.has(flavour) == false){
                bottlesOfJuices.set(flavour, bottlesJuice);
                juicesCollection.set(flavour, remainQty);
            }else if ( bottlesOfJuices.has(flavour) == true){
                bottlesOfJuices.set(flavour, bottlesOfJuices.get(flavour) + bottlesJuice );
                juicesCollection.set(flavour, remainQty);
            }
        }
    }

}

Array.from(bottlesOfJuices.entries()).forEach(x =>  console.log(`${x[0]} => ${x[1]}`));


}



juiceFlavor([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

console.log(`*********`);

juiceFlavor(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
