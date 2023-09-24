function solve(input) {
    const cars = {};
    input.forEach((carInfo) => {
      let [carBrand, carModel, producedCars] = carInfo.split(" | ");
      producedCars = Number(producedCars);
  
      if (!cars[carBrand]) cars[carBrand] = {};
      if (!cars[carBrand][carModel]) cars[carBrand][carModel] = 0;
      cars[carBrand][carModel] += producedCars;
    });
  
    for (const carBrand in cars) {
      console.log(carBrand);
      for (const carModel in cars[carBrand]) {
        console.log(`###${carModel} -> ${cars[carBrand][carModel]}`);
      }
    }
  }