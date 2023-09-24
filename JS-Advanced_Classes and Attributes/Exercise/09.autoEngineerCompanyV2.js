function  autoEngineeringCarCompany (inputArr){

    let carRegister = new Map();
    inputArr.forEach(element => {
        
        let [brand, carModel, producedCars] = element.split(" | ");
       
        let carModelQty = new Map ();
        if(!carRegister.has(brand)){
            carRegister.set(brand, carModelQty);
        }

        if(!carRegister.get(brand).has(carModel)){
            carRegister.get(brand).set(carModel,0);
        }

        let currentQty = Number((carRegister.get(brand)).get(carModel));
        carRegister.get(brand).set(carModel, currentQty + Number(producedCars));
  
    });
   let collectionCars =  Array.from(carRegister.entries());
//    console.log(collectionCars);

    collectionCars.forEach ( element => {
    console.log(element[0]);
    Array.from(element[1].entries()).forEach(x => {console.log(`###${x[0]} -> ${x[1]}`)});
   });
}

autoEngineeringCarCompany(
['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);

