let {mathEnforcer} = require("./mathEnforcer");
let {expect} = require("chai");

describe("test an object named mathEnforcer", function () {

    describe("addFive", function () {
        it("parameter is NOT a number, return undefined", ()=> {
        expect(mathEnforcer.addFive("1")).to.be.undefined;
        });
        it("parameter is NOT a number, return undefined", ()=> {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it("parameter is NOT a number, return undefined", ()=> {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it("parameter is a +number, add 5 to it and return correct result", ()=> {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it("parameter is a -number, add 5 to it and return correct result", ()=> {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });
        it("parameter is a floating point number, add 5 to it and return correct result", ()=> {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        });

    });


    describe("subtractTen", function () {
        it ("parameter is NOT a number, return undefined", ()=> {
         expect(mathEnforcer.subtractTen("1")).to.be.undefined;
        });
        it ("parameter is NOT a number, return undefined", ()=> {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it ("parameter is NOT a number, return undefined", ()=> {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it("parameter is a +number, subtract 10 from it", ()=> {
           expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
        });
        it("parameter is a -number, subtract 10 from it", ()=> {
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
         });
        it("parameter is a floating point number, subtract 10 from it", ()=> {
            expect(mathEnforcer.subtractTen(11.5)).to.be.closeTo(1.5, 0.01);
         });
    });


    describe("sum", function () {
    //sum(num1, num2) - A function that accepts two parameters:
     it("should return undefined if num1 is string", ()=>{
        expect(mathEnforcer.sum("1", 3)).to.be.undefined;
     });
     it("should return undefined if num1 is array", ()=>{
        expect(mathEnforcer.sum([], 3)).to.be.undefined;
     });
     it("should return undefined if num1 is object", ()=>{
        expect(mathEnforcer.sum({}, 3)).to.be.undefined;
     });
     it("should return undefined if num1 is alpha string", ()=>{
        expect(mathEnforcer.sum("a", 3)).to.be.undefined;
     });
     it("should return undefined if num2 is string", ()=>{
        expect(mathEnforcer.sum(1,"1")).to.be.undefined;
     });
     it("should return undefined if num2 is a alpha string", ()=>{
        expect(mathEnforcer.sum(1,"a")).to.be.undefined;
     });
     it("should return undefined if num2 is  array", ()=>{
        expect(mathEnforcer.sum(1, [])).to.be.undefined;
     });
     it("should return undefined if num2 is object", ()=>{
        expect(mathEnforcer.sum(1, {})).to.be.undefined;
     });
     it("should return correct result if num1 and num2 are integers numbers", ()=>{
        expect(mathEnforcer.sum(1,1)).to.equal(2);
     });
     it("should return correct result if num1 and num2 are floating point numbers", ()=>{
        expect(mathEnforcer.sum(1.1, 1.4)).to.be.closeTo(2.5, 0.01);
     });
     it("should return correct result if num1 is a float number and num2 is integer", ()=>{
        expect(mathEnforcer.sum(1.1, 2 )).to.be.closeTo(3.1, 0.01);
     });
     it("should return correct result if num1 is integer and num2 is floating number", ()=>{
        expect(mathEnforcer.sum( 1 , 1.1 )).to.be.closeTo(2.1, 0.01);
     });

    });

});
