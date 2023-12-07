let {companyAdministration}  = require("./companyAdministration");
let { expect } = require("chai");




describe ("test company administration", function (){
    it ("position different from Programmer", function(){
        expect (() =>companyAdministration.hiringEmployee("Peter","Doctor", 5)).to.throw(`We are not looking for workers for this position.`);
        expect (() =>companyAdministration.hiringEmployee("Peter","QA tester", 6)).to.throw(`We are not looking for workers for this position.`);
        expect (() =>companyAdministration.hiringEmployee("Peter","Project Manager", 8)).to.throw(`We are not looking for workers for this position.`);
    });
    
    it ("Position Programmer, yearsExperience >= 3 ,   happy path ", function(){
      expect(companyAdministration.hiringEmployee("Peter", "Programmer", 6)).to.equal(`Peter was successfully hired for the position Programmer.`);
      expect(companyAdministration.hiringEmployee("John", "Programmer", 15)).to.equal(`John was successfully hired for the position Programmer.`);
      expect(companyAdministration.hiringEmployee("Vladimir", "Programmer", 11)).to.equal(`Vladimir was successfully hired for the position Programmer.`);
      expect(companyAdministration.hiringEmployee("Stoyan", "Programmer", 3)).to.equal(`Stoyan was successfully hired for the position Programmer.`);
  });
  
  it ("Position Programmer, yearsExperience < 3  , name is not approve for the position ", function(){
    expect(companyAdministration.hiringEmployee("Peter", "Programmer", 2)).to.equal(`Peter is not approved for this position.`);
    expect(companyAdministration.hiringEmployee("John", "Programmer", 1)).to.equal(`John is not approved for this position.`);
  });
  
  
   it (" test if hours are not a number", () =>{
         expect(() => companyAdministration.calculateSalary("5")).to.throw(`Invalid hours`);
         expect(() => companyAdministration.calculateSalary({})).to.throw(`Invalid hours`);
         expect(() => companyAdministration.calculateSalary(-10)).to.throw(`Invalid hours`);
         expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);
         expect(() => companyAdministration.calculateSalary(null)).to.throw(`Invalid hours`);
         expect(() => companyAdministration.calculateSalary(undefined)).to.throw(`Invalid hours`);
        });
  
  
        it ("test when hours are valid, but less than 160 - happy path", () =>{
          expect(companyAdministration.calculateSalary(130)).to.equal(1950);
        });
        it ("test when hours are valid, but are more than 160 - happy path + bonus", () =>{
          expect(companyAdministration.calculateSalary(200)).to.equal(4000);
        });
        
        it ("test when hours are valid, and exactly 160 working hours  - edge case", () =>{
          expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
  
        it ("test when we receive invalid parameters different from array of strings and number", () =>{
          expect(()=>companyAdministration.firedEmployee({}, 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(null, 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee("", 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(undefined, 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(1, 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan"], [])).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan"], null)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan"], "5")).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan"], {})).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan"], 4)).to.throw(`Invalid input`);
          expect(()=>companyAdministration.firedEmployee(["Ivan","Stefan","Peter"], -1)).to.throw(`Invalid input`);
        });
  
        it ("test when we receive a valid parameters array of strings and number - happy path", () =>{
          expect(companyAdministration.firedEmployee(["Ivan","Vladimir", "Stefan","Peter"], 2)).to.equal(`Ivan, Vladimir, Peter`);
        });
   });
   