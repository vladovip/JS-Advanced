describe("testNumbers", function () {
    describe("sumNumber", function () {
      it("valid inputs", function () {
        expect(testNumbers.sumNumbers(10, 10)).to.equal("20.00");
        expect(testNumbers.sumNumbers(-10, 10)).to.equal("0.00");
        expect(testNumbers.sumNumbers(10, -10)).to.equal("0.00");
        expect(testNumbers.sumNumbers(10.1, 10.1)).to.equal("20.20");
      });
  
      it("invalid inputs", function () {
        expect(testNumbers.sumNumbers("10", 10)).to.equal(undefined);
        expect(testNumbers.sumNumbers("10", "10")).to.equal(undefined);
        expect(testNumbers.sumNumbers(10, "10")).to.equal(undefined);
        expect(testNumbers.sumNumbers({}, 10)).to.equal(undefined);
        expect(testNumbers.sumNumbers(10, {})).to.equal(undefined);
        expect(testNumbers.sumNumbers([], 10)).to.equal(undefined);
        expect(testNumbers.sumNumbers(10, [])).to.equal(undefined);
        expect(testNumbers.sumNumbers()).to.equal(undefined);
      });
    });
  
    describe("numberChecker", function () {
      it("valid inputs", function () {
        expect(testNumbers.numberChecker(10)).to.equal("The number is even!");
        expect(testNumbers.numberChecker(0)).to.equal("The number is even!");
        expect(testNumbers.numberChecker("10")).to.equal("The number is even!");
        expect(testNumbers.numberChecker(-10)).to.equal("The number is even!");
        expect(testNumbers.numberChecker(11)).to.equal("The number is odd!");
        expect(testNumbers.numberChecker(-11)).to.equal("The number is odd!");
        expect(testNumbers.numberChecker("11")).to.equal("The number is odd!");
      });
      it("invalid inputs", function () {
        expect(() => testNumbers.numberChecker([]).to.throw("The input is not a number!"));
        expect(() => testNumbers.numberChecker(10.10).to.throw("The input is not a number!"));
        expect(() => testNumbers.numberChecker({}).to.throw("The input is not a number!"));
        expect(() => testNumbers.numberChecker("someNumber").to.throw("The input is not a number!"));
        expect(() => testNumbers.numberChecker(NaN).to.throw("The input is not a number!"));
      });
    });
  
    describe("averageSumArray", function () {
      it("averageSum", function () {
        expect(testNumbers.averageSumArray([10, 20, 30])).to.equal(20);
        expect(testNumbers.averageSumArray([10])).to.equal(10);
      });
    });
  });