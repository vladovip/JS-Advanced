function carFactory(wantedCar) {

let  enginesArr = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 } ];
let  carriagesArr = [ { type: 'hatchback', color: wantedCar.color },  { type: 'coupe', color: wantedCar.color}];
let adjustedWheelSize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize-1;
let arrWheels = [];

return {
 model: wantedCar.model,
 engine : enginesArr.filter( element => element.power >= wantedCar.power)[0],
 carriage : carriagesArr.filter(elemCarriage => elemCarriage.type == wantedCar.carriage)[0],
 wheels: Array(4).fill(adjustedWheelSize),      

}

}


carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});




carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);

