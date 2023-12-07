describe("Unit Test", () => {
    it('test for wrong position', () => {
      expect(function () {
        companyAdministration.hiringEmployee("Nasko", "Hello", 12);
      }).to.throw(`We are not looking for workers for this position.`);
    });
    it("happy path", () => {
      expect(
        companyAdministration.hiringEmployee("Nasko", "Programmer", 3)
      ).to.equal(`Nasko was successfully hired for the position Programmer.`);
    });
    it("happy path", () => {
      expect(
        companyAdministration.hiringEmployee("Nasko", "Programmer", 4)
      ).to.equal(`Nasko was successfully hired for the position Programmer.`);
    });
    it("test for low years of experience", () => {
      expect(
        companyAdministration.hiringEmployee("Nasko", "Programmer", 2)
      ).to.equal(`Nasko is not approved for this position.`);
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.calculateSalary("12");
      }).to.throw("Invalid hours");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.calculateSalary("[as]");
      }).to.throw("Invalid hours");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.calculateSalary(-1);
      }).to.throw("Invalid hours");
    });
    it("happy path", () => {
      expect(companyAdministration.calculateSalary(1)).to.equal(15);
    });
    it("happy path for overhours", () => {
      expect(companyAdministration.calculateSalary(161)).to.equal(3415);
    });
    it("happy path", () => {
      expect(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)
      ).to.equal("Petar, George");
    });
  
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee({}, 1);
      }).to.throw("Invalid input");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 123);
      }).to.throw("Invalid input");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "as");
      }).to.throw("Invalid input");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1.6);
      }).to.throw("Invalid input");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee("asd", []);
      }).to.throw("Invalid input");
    });
    it("test for invalid input", () => {
      expect(function () {
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1);
      }).to.throw("Invalid input");
    });
  });