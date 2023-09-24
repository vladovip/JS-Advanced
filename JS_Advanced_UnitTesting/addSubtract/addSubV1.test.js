// •	Return a module (object), containing the functions add(), subtract() and get() as properties
// •	Keep an internal sum that can’t be modified from the outside
// •	The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
// •	The function get() returns the value of the internal sum

let { createCalculator } = require("./addSubV1");
let {expect} = require("chai");


describe (" Calculator functionality", () => {

it ("it should return an object library", () => {
    expect(typeof createCalculator()).to.equal("object");
});

it ("it should have add function as a property of the object", () => {
    expect(createCalculator()).to.have.property("add");

});

it ("it should have subtract function as a property of the object", () => {
    expect(createCalculator()).to.have.property("subtract");
});

it ("it should have get function as a property of the object", () => {
    expect(createCalculator()).to.have.property("get");
});


it ("Add should be a function", () => {
    expect( typeof createCalculator().add).to.equal("function");
});

it ("Subtract should be a function", () => {
    expect( typeof createCalculator().subtract).to.equal("function");
});

it ("get should be a function", () => {
    expect( typeof createCalculator().get).to.equal("function");
});

it('Add should parse string number', () => {
    let calc = createCalculator();
    calc.add('1');
    expect(calc.get()).to.equal(1);
});

it('Subtract should parse string number', () => {
    let calc = createCalculator();
    calc.subtract('1');
    expect(calc.get()).to.equal(-1);
});

it('Add basic test with number type', () => {
    let calc = createCalculator();
    calc.add(1);
    expect(calc.get()).to.equal(1);
});

it('Subtract basic test with number type', () => {
    let calc = createCalculator();
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
});

it('Params that cant be parsed should in add function return NaN', () => {
    let calc = createCalculator();
    calc.add('string');
    expect(calc.get()).to.be.NaN;
});

it('Params that cant be parsed should return NaN', () => {
    let calc = createCalculator();
    calc.subtract('string');
    expect(calc.get()).to.be.NaN;
});

it('function get() returns the value of the internal sum', () => {
    let calc = createCalculator();
    calc.add(1);
    expect( typeof calc.get()).to.equal("number");
    expect(calc.get()).to.equal(1);

});


});