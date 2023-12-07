let {findNewApartment}  = require("./findApartment.js");
let { expect } = require("chai");


describe("find an apartment", () => {

    // function - 	PickVenue (capacity, pricePerGuest, location)
    describe("isGoodLocation (city, nearPublicTransportation)", () => {
      //A function that accepts two parameters: string and boolean.
      it("test the valid inputs", () => {
        expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation([], true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation(null, true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation(true, true)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation("a", 1)).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation("a", [])).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation("a", {})).to.throw(`Invalid input!`);
        expect(() => findNewApartment.isGoodLocation("a", undefined)).to.throw(`Invalid input!`);
      });
  
    
      it("If the value of the string city is different than a Sofia, Plovdiv or Varna ", () => {
        expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal(`This location is not suitable for you.`);
      });
      it("If the value of the string city is different than a Sofia, Plovdiv or Varna ", () => {
        expect(findNewApartment.isGoodLocation("StaraZagora", true)).to.equal(`This location is not suitable for you.`);
      });
      it("If the value of the boolean nearPublicTransportation is false", () => {
        expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(`There is no public transport in area.`);
      });
      it("If the value of the boolean nearPublicTransportation is false", () => {
        expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal(`There is no public transport in area.`);
      });
      it("If the value of the boolean nearPublicTransportation is false", () => {
        expect(findNewApartment.isGoodLocation("Varna", false)).to.equal(`There is no public transport in area.`);
      });
      it("happy case Sofia", () => {
        expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(`You can go on home tour!`);
      });
      it("happy case Plovdiv", () => {
        expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal(`You can go on home tour!`);
      });
      it("happy case Varna", () => {
        expect(findNewApartment.isGoodLocation("Varna", true)).to.equal(`You can go on home tour!`);
      });
    });

    
    describe("•	isLargeEnough (apartments, minimalSquareMeters) ", () => {
        //A function that accepts an array and number
        it("test the valid inputs", () => {
          expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough("1", 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough({}, 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough(null, 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough(undefined, 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough([], 1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough([1,2], "1")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough([1,1], [])).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough([1,1], {})).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isLargeEnough([1,1], null)).to.throw(`Invalid input!`);
        });
    
        it("checks whether area >= minimalSquareMeters, if YES then it must be added to the area of apartment in resultArr", () => {
          expect(findNewApartment.isLargeEnough([10,20,30,40], 21)).to.equal("30, 40");
        });

        it("checks whether area >= minimalSquareMeters, if YES then it must be added to the area of apartment in resultArr", () => {
            expect(findNewApartment.isLargeEnough([1,2,3,4,5,6], 2.4)).to.equal("3, 4, 5, 6");
        });
      });


      describe("isItAffordable (price, budget) ", () => {
        // A function that accepts two parameters: number and number.
        it("validation: if the price and budget are not a number,  and price and budget are less or equal to 0", () => {
          expect(() => findNewApartment.isItAffordable("a", "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable({}, "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable([], "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable({}, "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(null, "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(undefined, "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(0,0)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(-1,-1)).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(1, "a")).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(2, [])).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(1, {})).to.throw(`Invalid input!`);
          expect(() => findNewApartment.isItAffordable(1, null)).to.throw(`Invalid input!`);
        });
    
        it("If the result < 0 - calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget.", () => {
            expect(findNewApartment.isItAffordable(2,1)).to.equal("You don't have enough money for this house!");
        });

        it("happy case: If the result > 0,  you can afford buying the apartment by subtracting the price of the apartment from your budget.", () => {
            expect(findNewApartment.isItAffordable(1,5)).to.equal("You can afford this home!");
        });
      });

  
  });