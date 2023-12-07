
let {motorcycleRider}  = require("./Motorcycle Rider");
let { expect } = require("chai");



  // 100 out of 100 points in Judge... 
  
describe("motorcycleRider General  test ", () => {

    
    describe("test function - licenseRestriction (category)", () => {
       // A function that accepts one parameter: string.
      it("If the category is AM ", () => {
        expect(motorcycleRider.licenseRestriction("AM")).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`);

      });

      it("If the category is A1 ", () => {
        expect(motorcycleRider.licenseRestriction("A1")).to.equal(`Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.`);
      });

      it("If the category is A2 ", () => {
        expect(motorcycleRider.licenseRestriction("A2")).to.equal(`Motorcycles with maximum power of 35KW. and the minimum age is 18.`);
      });

      it("If the category is A", () => {
        expect(motorcycleRider.licenseRestriction("A")).to.equal(`No motorcycle restrictions, and the minimum age is 24.`);
      });

      it("Invalid input  if string type is different from AM,A1,A2,A" , () => {
        expect(()=> motorcycleRider.licenseRestriction("1")).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction(1)).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction({})).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction([])).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction(null)).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction(undefined)).to.throw(`Invalid Information!`);
        expect(()=> motorcycleRider.licenseRestriction("a")).to.throw(`Invalid Information!`);
      });
      
    });


    describe("motorcycleShowroom (engineVolume, maximumEngineVolume)", () => {
        // A function that accepts an array and number. 
       it("Invalid Information", () => {
         expect(() => motorcycleRider.motorcycleShowroom("a",1)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom({},1)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom(null,1)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom(1,1)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([], 49)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([200, 300, 500], 49)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom(["200", "300", "500"], 49)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([], 51)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([100,200,300], "a")).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([100,200,300], [])).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([100,200,300], {})).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([100,200,300], null)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([100,200,300], undefined)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.motorcycleShowroom([], 1)).to.throw(`Invalid Information!`);
       });

       it("happy case when proposed engineVolumesa are smaller than maximumEngineVolume Criteria ", () => {
// MORE TO DO...You must add an element (engineVolume) if maximumEngineVolume is less or equal to engineVolume from the array in to new availableBikes array.
        expect(motorcycleRider.motorcycleShowroom([100,200,300,400,500], 250 )).to.equal(`There are 2 available motorcycles matching your criteria!`);
      });
        it("happy case when specific engineVolumes == maximumEngineVolume Criteria ", () => {
        expect(motorcycleRider.motorcycleShowroom([100,200,300,400,500], 300 )).to.equal(`There are 3 available motorcycles matching your criteria!`);
      });
     });

     


    describe("otherSpendings (equipment, consumables, discount) ", () => {
        // A function that accepts three parameters: array, array and boolean.
       it("test the invalid inputs : throw message Invalid Information", () => {
         expect(() => motorcycleRider.otherSpendings([],[],1)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],[],"a")).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],[],[])).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],[],{})).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],[],null)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings(1,[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings("A",[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings({},[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings(true,[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings(null,[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings(undefined,[],true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],1,true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],"1",true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],{},true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],true,true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],null,true)).to.throw(`Invalid Information!`);
         expect(() => motorcycleRider.otherSpendings([],undefined,true)).to.throw(`Invalid Information!`);
       });

       // MORE TO DO... Happy cases...

         it("test total price that you should pay based on choices witout discount", () => {
         expect(motorcycleRider.otherSpendings(["helmet" ],["engine oil"], false)).to.equal(`You spend $270.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings(["helmet"],["oil filter"], false)).to.equal(`You spend $230.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings(["helmet"],["engine oil","oil filter"], false)).to.equal(`You spend $300.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings(["jacked"],["engine oil"], false)).to.equal(`You spend $370.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings(["jacked"],["oil filter"], false)).to.equal(`You spend $330.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings([ "jacked"],["engine oil","oil filter"], false)).to.equal(`You spend $400.00 for equipment and consumables!`);
         expect(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil","oil filter"], false)).to.equal(`You spend $600.00 for equipment and consumables!`);
       });

       it("test total price that you should pay based on choices with 10% discount", () => {
        expect(motorcycleRider.otherSpendings(["helmet" ],["engine oil"], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(["helmet"],["oil filter"], true)).to.equal(`You spend $207.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(["helmet"],["engine oil","oil filter"], true)).to.equal(`You spend $270.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(["jacked"],["engine oil"], true)).to.equal(`You spend $333.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(["jacked"],["oil filter"], true)).to.equal(`You spend $297.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings([ "jacked"],["engine oil","oil filter"], true)).to.equal(`You spend $360.00 for equipment and consumables with 10% discount!`);
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil","oil filter"], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`);
      });
  
     });

  });
  