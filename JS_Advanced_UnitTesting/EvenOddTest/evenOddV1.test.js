let { isOddOrEven } = require("./evenOrOdd");
let {expect} = require("chai");

describe ("is even or odd", () => {

it("should be undefined if is number", () => {
   expect(isOddOrEven(1)).to.be.undefined;
});

it("should be undefined if is array", () => {
    expect(isOddOrEven([])).to.be.undefined;
});

it("should be undefined if is object", () => {
    expect(isOddOrEven({})).to.be.undefined;
});

it("should return odd", () => {
    expect(isOddOrEven("Hello")).to.be.equal("odd")
});

it("should return even", () => {
    expect(isOddOrEven("Hi")).to.be.equal("even")
});


});