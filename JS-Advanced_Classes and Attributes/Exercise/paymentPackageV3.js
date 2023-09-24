describe("PaymentPackage", function() {
    let pp = null; 
  
    beforeEach(function() {
      pp = new PaymentPackage('Test', 100);
    });
  
    describe("Test instantiation", function() {
      it("should work with valid parameters", function() {
        expect(() => new PaymentPackage('Test', 100)).to.not.throw();
      });
      it("should throw with missing name", function() {
        expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
      });
      it("should throw with missing value", function() {
        expect(() => new PaymentPackage('Test')).to.throw('Value must be a non-negative number');
      });
      it("should throw with invalid name", function() {
        expect(() => new PaymentPackage(100, 100)).to.throw('Name must be a non-empty string');
      });
      it("should throw with invalid value", function() {
        expect(() => new PaymentPackage('Test', '100')).to.throw('Value must be a non-negative number');
      });
      it("should throw with negative value", function() {
        expect(() => new PaymentPackage('Test', -100)).to.throw('Value must be a non-negative number');
      });
    });
  
    describe("Test name accessor", function() {
      it("should return correct value", function() {
        expect(pp.name).to.equal('Test');
      });
      it("should throw with invalid value", function() {
        expect(() => pp.name = 100).to.throw('Name must be a non-empty string');
      });
    });
  
    describe("Test value accessor", function() {
      it("should return correct value", function() {
        expect(pp.value).to.equal(100);
      });
      it("should throw with invalid value", function() {
        expect(() => pp.value = '100').to.throw('Value must be a non-negative number');
      });
      it("should throw with negative value", function() {
        expect(() => pp.value = -100).to.throw('Value must be a non-negative number');
      });
    });
  
    describe("Test VAT accessor", function() {
      it("should return correct value", function() {
        expect(pp.VAT).to.equal(20);
      });
      it("should throw with invalid value", function() {
        expect(() => pp.VAT = '100').to.throw('VAT must be a non-negative number');
      });
      it("should throw with negative value", function() {
        expect(() => pp.VAT = -20).to.throw('VAT must be a non-negative number');
      });
    });
  
    describe("Test active accessor", function() {
      it("should return correct value", function() {
        expect(pp.active).to.be.true;
      });
      it("should throw with invalid value", function() {
        expect(() => pp.active = 'true').to.throw('Active status must be a boolean');
      });
    });
  
    describe("Test toString method", function() {
      it("should return correct value when active", function() {
        const output = 'Package: Test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
        expect(pp.toString()).to.equal(output);
      });
      it("should return correct value when inactive", function() {
        pp.active = false;
        const output = 'Package: Test (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
        expect(pp.toString()).to.equal(output);
      });
    });
  });
  