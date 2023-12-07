let { carService } = require("./03. Car Service_Resources");
let { expect } = require("chai");

describe ("carService", ()=>{

    describe ("isItExpensive (issue) ", ()=>{
         // A function that accepts one parameter: string.
        it ("If the value of the parameter issue is equal to Engine or Transmission", ()=>{
         expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`)
         expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`)
        });
        it ("If the value of the parameter issue is !=  Engine or Transmission", ()=>{
            expect(carService.isItExpensive("Suspenshion")).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive("Brake System")).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive("Emission System")).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive("Lighting & Wipers")).to.equal(`The overall price will be a bit cheaper`)
        });

    });

    describe ("discount (numberOfParts, totalPrice)  ", ()=>{
        // A function that accepts two parameters: number and number.
       it ("test the invalid inputs", ()=>{
        expect(() => carService.discount([],[])).to.throw(`Invalid input`)
        expect(() => carService.discount({},{})).to.throw(`Invalid input`)
        expect(() => carService.discount(1,{})).to.throw(`Invalid input`)
        expect(() => carService.discount(1,undefined)).to.throw(`Invalid input`)
        expect(() => carService.discount(1,"a")).to.throw(`Invalid input`)
        expect(() => carService.discount(1,[])).to.throw(`Invalid input`)
        expect(() => carService.discount(1,true)).to.throw(`Invalid input`)
        expect(() => carService.discount([],true)).to.throw(`Invalid input`)
        expect(() => carService.discount([],"1")).to.throw(`Invalid input`)
        expect(() => carService.discount([],1)).to.throw(`Invalid input`)
        expect(() => carService.discount(true,true)).to.throw(`Invalid input`)
        expect(() => carService.discount({},1)).to.throw(`Invalid input`)
        expect(() => carService.discount(1,"1")).to.throw(`Invalid input`)
        expect(() => carService.discount(1,undefined)).to.throw(`Invalid input`)
       });

       it (" hapy case test - discount based on the numberOfParts, 15% when numberOfParts is higher than 2 and smaller or equal to 7", ()=>{
        expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
        expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
       });
       it (" happy case test - discount based on the numberOfParts,  30% when numberOfParts is higher than 7", ()=>{
        expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
        expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`)
       });

       it (" o	If the numberOfParts is smaller or equal to 2, return", ()=>{
        expect(carService.discount(1, 100)).to.equal(`You cannot apply a discount`)
        expect(carService.discount(2, 100)).to.equal(`You cannot apply a discount`)
       });
    
   });

   describe ("partsToBuy (partsCatalog, neededParts) ", ()=>{
    // A function that accepts two arrays.
   it ("test the invalid inputs", ()=>{
     expect(() => carService.partsToBuy(1,1)).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy(1,"1")).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy({},{})).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy([],1)).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy([],"a")).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy([],{})).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy([],true)).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy(1,[])).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy({},[])).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy("a",[])).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy(true,[])).to.throw(`Invalid input`);
     expect(() => carService.partsToBuy(undefined,[])).to.throw(`Invalid input`);
   });

   it (" happy case test ", ()=>{
    // o	The partsCatalog array will store the parts and the price for them 
    // o	The neededParts array will store the parts that you need to buy (["blowoff valve", "injectors" ...])
    expect(carService.partsToBuy([{ part: "a", price: 1 }, { part: "b", price: 2 }], ["a","b"])).to.equal(3);
    expect(carService.partsToBuy([{ part: "a", price: 5 }, { part: "b", price: 10 }], ["a","b", "c"])).to.equal(15);
    expect(carService.partsToBuy([{ part: "a", price: 10 }], ["a","b", "c", "d"])).to.equal(10);
    expect(carService.partsToBuy([{ part: "a", price: 1 },{ part: "b", price: 2 }, { part: "c", price: 3 }], ["a"])).to.equal(1);
  });

  it ("If partsCatalog is empty, return 0 ", ()=>{
    // o	The partsCatalog array will store the parts and the price for them 
    // o	The neededParts array will store the parts that you need to buy (["blowoff valve", "injectors" ...])
    expect(carService.partsToBuy([], ["a","b", "c", "d"])).to.equal(0);
  });


});

});