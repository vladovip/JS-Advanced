let {flowerShop}  = require("./flowerShop");
let { expect } = require("chai");


describe ("flowerShop", ()=>{

    describe ("•	calcPriceOfFlowers(flower, price, quantity)", ()=>{
        // A function that accepts three parameters (one string and two numbers):
        it (" test for invalid inputs testflowerShop", ()=>{
        expect(() => flowerShop.calcPriceOfFlowers([],1,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers({},1,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers(undefined,1,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers(true,1,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",[],1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",{},1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",true,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",undefined,1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a","a",1)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",1,{})).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",1,[])).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",1,true)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",1,undefined)).to.throw(`Invalid input!`);
        expect(() => flowerShop.calcPriceOfFlowers("a",1,"a")).to.throw(`Invalid input!`);
        
        });

        it ("happy case- function returns the multiplies price and quantity;", ()=>{
            expect(flowerShop.calcPriceOfFlowers("a",1,2)).to.equal(`You need $2.00 to buy a!`);
            expect(flowerShop.calcPriceOfFlowers("b",2,2)).to.equal(`You need $4.00 to buy b!`);
        });
    });


    describe ("checkFlowersAvailable(flower, gardenArr) ", ()=>{
        // A function that accepts two parameters (string and array):
        // The array (gardenArr) includes all available flowers (example: ["Rose", "Lily", "Orchid"]);
        it ("If  flower present in the array, the function returns: `The ${flower} are available!`", ()=>{ 
        expect(flowerShop.checkFlowersAvailable("a", ["a", "b", "c"])).to.equal(`The a are available!`);
        expect(flowerShop.checkFlowersAvailable("c", ["a", "b", "c"])).to.equal(`The c are available!`);
        });

        it ("If the given flower is not in the array of flowers, then return", ()=>{ 
            expect(flowerShop.checkFlowersAvailable("a", ["e", "b", "d"])).to.equal(`The a are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable("c", ["a", "b", "e"])).to.equal(`The c are sold! You need to purchase more!`);
            });

    });

    describe ("•	sellFlowers(gardenArr, space)", ()=>{
        // A function that accepts two parameters (array and number):
        // o	The gardenArr array will store the names of flowers(["Rose", "Lily", "Orchid"])
        
        it ("test for invalid parameters ", ()=>{ 
        expect(()=>  flowerShop.sellFlowers([],"1")).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers([],[])).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers([],true)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers([],{})).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers([],undefined)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers(1,1)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers("1",1)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers({},1)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers(true,1)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers(undefined,1)).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers({},{})).to.throw(`Invalid input!`);
        expect(()=> flowerShop.sellFlowers(true,true)).to.throw(`Invalid input!`);
        });

        it (" happy case test return the changed array of flowers as a string, joined by / ", ()=>{ 
            expect(flowerShop.sellFlowers(["a","b","c"], 1)).to.equal(`a / c`);
            expect(flowerShop.sellFlowers(["a","b","c", "d", "e"], 4)).to.equal(`a / b / c / d`);
           
         });

    });


});