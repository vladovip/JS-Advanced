
let expect = require('chai').expect;
let assert = require('chai').assert;
let {PaymentPackage} = require('./12.paymentPackageV2');

//----- Class PaymentPackage - Unit Testing: 
describe ("Test for paymentPackage", () =>{

    describe ("test for name", () =>{
    it ("constructor", () =>{
        let instance = new PaymentPackage('Name', 200);
        assert.equal(instance._name,"Name", "200");
        assert.equal(instance._value, 200, "5");
        assert.equal(instance._VAT, 20, "5");
        assert.equal(instance._active, true, "5");
    });
    it("throw an error if Name is number", () => {
      expect(() => new PaymentPackage(12, 21)).to.throw("Name must be a non-empty string");
    });
    
    it ("throw an error if Name is array", () => {
        expect(() => new PaymentPackage(["1","2"], 21)).to.throw("Name must be a non-empty string");
    });

    it ("throw an error if Name is empty string", () => {
        expect(() => new PaymentPackage("", 21)).to.throw("Name must be a non-empty string");
    });

    it ("this is valid name and should not throw error", () => {
        expect(() => new PaymentPackage("vladimir", 21)).not.to.throw("Name must be a non-empty string");
    });
    });

    describe ("test for value", () =>{
        it ("setting value to Zero", () =>{
            let instance = new PaymentPackage('Name', 200);
            assert.doesNotThrow(() => {
                instance.value=0;
            });
        });
        it("throw an error if value is string", () => {
            expect(() => new PaymentPackage("12", "abcsder")).to.throw("Value must be a non-negative number");
        });
        it("throw an error if value is array", () => {
            expect(() => new PaymentPackage("12", ["1","a"])).to.throw("Value must be a non-negative number");
        });
        it("throw an error if value is a negative number", () => {
            expect(() => new PaymentPackage("12", -50)).to.throw("Value must be a non-negative number");
        });
        it("the value should be valid number", () => {
            expect(() => new PaymentPackage("12", 10)).not.to.throw("Value must be a non-negative number");
        });
    });

    describe ("test for VAT", () =>{
        it("throw an error if VAT is string", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.VAT = "stringABC")).to.throw("VAT must be a non-negative number");
        });
        it("throw an error if VAT is an Array Collection", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.VAT = ["a", "c", "d"])).to.throw("VAT must be a non-negative number");
        });
        it("throw an error if VAT is a negative number", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.VAT = -15)).to.throw("VAT must be a non-negative number");
        });
        it("If the VAT is the valid Number, not throw an error", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.VAT = 15)).to.not.throw("VAT must be a non-negative number");
        });
    });

    describe ("test for status active", () =>{
        it("throw an error if Active status is a string", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = "stringABC")).to.throw("Active status must be a boolean");
        });
        it("throw an error if Active status is a number", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = 255)).to.throw("Active status must be a boolean");
        });
        it("throw an error if Active status is a collection Array", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = ["1", "a", "b"])).to.throw("Active status must be a boolean");
        });
        it("throw an error if Active status is a negative number", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = -10)).to.throw("Active status must be a boolean");
        });

        it(" If Active status is a true Boolean, it should not throw an error", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = true)).not.to.throw("Active status must be a boolean");
        });
        it(" If Active status is a false Boolean, it should not throw an error", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            expect(() => (instanceVAT.active = false)).not.to.throw("Active status must be a boolean");
        });
    });

    describe ("test for toString method", () =>{

        it("if input is correct it should return string, each on a new line", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            let output = [
                `Package: 12`,
                `- Value (excl. VAT): 455`,
                `- Value (VAT 20%): 546`
            ];
            expect(instanceVAT.toString()).to.equal(output.join('\n'));
        });

        it("if input is correct and VAT is set to 30 to return a string", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            instanceVAT.VAT = 30;
            let output = [
                `Package: 12`,
                `- Value (excl. VAT): 455`,
                `- Value (VAT 30%): 591.5`
            ];
            expect(instanceVAT.toString()).to.equal(output.join('\n'));
        });

        it("if input is correct and status Active is set to false, thus overall it return a string", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            instanceVAT.active = false;
            let output = [
                `Package: 12 (inactive)`,
                `- Value (excl. VAT): 455`,
                `- Value (VAT 20%): 546`
            ];
            expect(instanceVAT.toString()).to.equal(output.join('\n'));
        });

        it("if input is correct and status Active is set to false, and VAT is equal to 30, thus return a string", () => {
            let instanceVAT = new PaymentPackage("12", 455 );
            instanceVAT.active = false;
            instanceVAT.VAT = 30;
            let output = [
                `Package: 12 (inactive)`,
                `- Value (excl. VAT): 455`,
                `- Value (VAT 30%): 591.5`,
            ];
            expect(instanceVAT.toString()).to.equal(output.join('\n'));
        });
    });
  
  });

  

// OUTPUT:
// Error: Value must be a non-negative number
// Package: HR Services
// - Value (excl. VAT): 1500
// - Value (VAT 20%): 1800
// Package: Consultation
// - Value (excl. VAT): 800
// - Value (VAT 20%): 960
// Package: Partnership Fee
// - Value (excl. VAT): 7000
// - Value (VAT 20%): 8400
// Error: Active status must be a boolean
