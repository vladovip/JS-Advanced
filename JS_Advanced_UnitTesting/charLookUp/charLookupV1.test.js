let { lookupChar } = require("./charLookup");
let { expect } = require("chai");

// lookupChar(string, index)
describe('retrieves a character at a given index from a passed-in string', () => {
    it("check whether a first parameter type is  not valid", () => {
        expect(lookupChar(0,0)).to.be.undefined;
    });

    it("check whether a first parameter type is  not valid", () => {
        expect(lookupChar({},0)).to.be.undefined;
    });

    it("check whether a first parameter type is  not valid", () => {
        expect(lookupChar([],0)).to.be.undefined;
    });

    it("check whether a second parameter type is not valid", () => {
        expect(lookupChar("Hello Vladi","Working")).to.be.undefined;
    });

    it("check whether a second parameter is not integer", () => {
        expect(lookupChar("Hello Vladi", 0.5 )).to.be.undefined;
    });
    
    it("check value of the index bigger than string length", () => {
        expect(lookupChar("Hello Vladi", 20)).to.equal("Incorrect index");
    });

    it("check value of the index is equal to a string length", () => {
        expect(lookupChar("Hello", 5 )).to.equal("Incorrect index");
    });

    it("check value of the index is negative number", () => {
        expect(lookupChar("Hello", -1 )).to.equal("Incorrect index");
    });

    it("check values with valid first and second parameters", () => {
        expect(lookupChar("Vladimir", 3 )).to.equal("d");
    });

});