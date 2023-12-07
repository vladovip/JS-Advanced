let { chooseYourCar } = require("./chooseYourCar");
let { expect } = require("chai");



describe ("Choose Your Car", () => {

    describe ("Choosing Type of the car", () => {
        // - A function that accepts three parameters: string, string, and number.
        it ("choosingType (type, color, year)", () => {
         expect(() => chooseYourCar.choosingType("Combi", "red", 1800)).to.throw(`Invalid Year!`);
         expect(() => chooseYourCar.choosingType("Combi", "red", 2023)).to.throw(`Invalid Year!`);
        });
        it ("If the value of the string type is different from Sedan ", () => {
            expect(() => chooseYourCar.choosingType("Combi", "red", 2000)).to.throw(`This type of car is not what you are looking for.`); 
        });
        it ("If the year of the car is greater or equal to 2010, return the string", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2011)).to.equal(`This red Sedan meets the requirements, that you have.`); 
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(`This red Sedan meets the requirements, that you have.`); 
        });
        it ("If the year of the car is less than 2010, return the string", () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2009)).to.equal(`This Sedan is too old for you, especially with that red color.`); 
            expect(chooseYourCar.choosingType("Sedan", "red", 1901)).to.equal(`This Sedan is too old for you, especially with that red color.`); 
            expect(chooseYourCar.choosingType("Sedan", "red", 2005)).to.equal(`This Sedan is too old for you, especially with that red color.`); 
        });
    });

    describe ("brandName (brands, brandIndex) ", () => {
        // -A function that accepts an array and number;
        // The brands array will store the brand names (["BMW", "Toyota", "Peugeot"…]);
        it (" test the validation of the inputs", () => {
         expect(() => chooseYourCar.brandName({}, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName("a", 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(null, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(undefined, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(true, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "a")).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [])).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], {})).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], true)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], undefined)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], null)).to.throw(`Invalid Information!`);
        });

        it (" testhappy case when the index is between the limits of the array", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal(`BMW, Peugeot`);
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot","Opel", "Mitsubishi", "Mazda"], 3)).to.equal("BMW, Toyota, Peugeot, Mitsubishi, Mazda");
        });

    });

    describe (" •	CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)", () => {
        // - A function that accepts two parameters: number, number.
        it (" test the validation of the inputs", () => {
         expect(() => chooseYourCar.carFuelConsumption({}, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption([], 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(null, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(undefined, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption("1", 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(true, 1)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, [])).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, "1")).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, {})).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, true)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, null)).to.throw(`Invalid Information!`);
         expect(() => chooseYourCar.carFuelConsumption(2, undefined)).to.throw(`Invalid Information!`);
        });

        it (" test happy case, when the car is efficient enough, If the liters/100km is less or equal to 7L. return  ", () => {
            expect(chooseYourCar.carFuelConsumption(500, 35)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(500, 30)).to.equal(`The car is efficient enough, it burns 6.00 liters/100 km.`); 
        });

        it ("test happy case, when the car burns too much fuel  return the following message  ", () => {
            expect(chooseYourCar.carFuelConsumption(500, 36)).to.equal(`The car burns too much fuel - 7.20 liters!`);
            expect(chooseYourCar.carFuelConsumption(500, 60)).to.equal(`The car burns too much fuel - 12.00 liters!`);
            expect(chooseYourCar.carFuelConsumption(500, 70)).to.equal(`The car burns too much fuel - 14.00 liters!`); 
        });

    });


});