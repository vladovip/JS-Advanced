let {movieTheater}  = require("./03. Movie Theater _Resources");
let { expect } = require("chai");


describe ("Movie", () => {

    describe ("ageRestrictions (movieRating) ", () => {
        // A function that accepts one parameter: string.
        it("If the value of the parameter movieRating  is equal to G " , () => {
        expect(movieTheater.ageRestrictions("G")).to.equal(`All ages admitted to watch the movie`);
        });

        it("If the value of the parameter movieRating  is equal to PG " , () => {
            expect(movieTheater.ageRestrictions("PG")).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        })
        it("If the value of the parameter movieRating  is equal to R " , () => {
            expect(movieTheater.ageRestrictions("R")).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        })
        it("If the value of the parameter movieRating  is equal to NC-17 " , () => {
            expect(movieTheater.ageRestrictions("NC-17")).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it("If the value of the parameter movieRating  is equal to A " , () => {
            expect(movieTheater.ageRestrictions("A")).to.equal(`There are no age restrictions for this movie`);
        });
        it("If the value of the parameter movieRating  is equal to 1 " , () => {
            expect(movieTheater.ageRestrictions("1")).to.equal(`There are no age restrictions for this movie`);
        });

    });

    describe ("moneySpent (tickets, food, drinks) ", () => {
        // A function that accepts three parameters: number, array and array.
        it("validate the input" , () => {
        expect(() => movieTheater.moneySpent("1",[],[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent([],[],[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent({},[],[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(true,[],[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(3,"a",[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(3,{},[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(3,true,[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(3,null,[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(3,undefined,[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,1,[])).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,[],1)).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,[],{})).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,[],true)).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,[],null)).to.throw(`Invalid input`);
        expect(() => movieTheater.moneySpent(1,[],undefined)).to.throw(`Invalid input`);
        });

        it("happy case  - no discount total cost is less than 50 levs " , () => {
            expect(movieTheater.moneySpent(1,["Nachos"],["Soda"])).to.equal(`The total cost for the purchase is 23.50`);
            expect(movieTheater.moneySpent(1,["Nachos"],["Soda", "Water"])).to.equal(`The total cost for the purchase is 25.00`);
            expect(movieTheater.moneySpent(1,["Nachos","Popcorn"],["Soda", "Water"])).to.equal(`The total cost for the purchase is 29.50`);
            expect(movieTheater.moneySpent(1,["Popcorn"],["Soda"])).to.equal(`The total cost for the purchase is 22.00`);
            expect(movieTheater.moneySpent(1,["Popcorn"],["Soda", "Water"])).to.equal(`The total cost for the purchase is 23.50`);
            expect(movieTheater.moneySpent(1,["Nachos","Popcorn"],["Soda"])).to.equal(`The total cost for the purchase is 28.00`);
            expect(movieTheater.moneySpent(1,["Nachos","Popcorn"],["Water"])).to.equal(`The total cost for the purchase is 27.00`);
            
        });

        it("happy case  -  20% discount can be applied total cost is more than 50 levs " , () => {
            expect(movieTheater.moneySpent(3,["Nachos"],["Soda"])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
            expect(movieTheater.moneySpent(3,["Nachos"],["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 44.00`);
            expect(movieTheater.moneySpent(3,["Nachos","Popcorn"],["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 47.60`);
            expect(movieTheater.moneySpent(3,["Popcorn"],["Soda"])).to.equal(`The total cost for the purchase with applied discount is 41.60`);
            expect(movieTheater.moneySpent(3,["Popcorn"],["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
            expect(movieTheater.moneySpent(3,["Nachos","Popcorn"],["Soda"])).to.equal(`The total cost for the purchase with applied discount is 46.40`);
            expect(movieTheater.moneySpent(3,["Nachos","Popcorn"],["Water"])).to.equal(`The total cost for the purchase with applied discount is 45.60`);
        });
    });

    describe ("reservation (rowsArray, neededSeatsCount) ", () => {
        // AA function that accepts array and number.
        it("validate the input" , () => {
        expect(() => movieTheater.reservation([],"1")).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation([],null)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation([],[])).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation([],{})).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation([],true)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation({}, 1)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation(true, 1)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation(null, 1)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation(undefined, 1)).to.throw(`Invalid input`);
        expect(() => movieTheater.reservation("a", 1)).to.throw(`Invalid input`);
        });

        it(" test happy cases " , () => {
            expect(movieTheater.reservation([{rowNumber:1, freeSeats:5 }, {rowNumber: 2, freeSeats: 10 }], 6)).to.equal(Number("2"));
        });
    });
});
