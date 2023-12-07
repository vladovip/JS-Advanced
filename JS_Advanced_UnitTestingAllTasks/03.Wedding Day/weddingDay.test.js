let { weddingDay } = require("./weddingDay.js");
let { expect } = require("chai");

describe("wedding Day General  test ", () => {

  // function - 	PickVenue (capacity, pricePerGuest, location)
  describe("PickVenue (capacity, pricePerGuest, location)", () => {
    //A function that accepts three parameters: number, number, and string
    it("test the valid inputs", () => {
      expect(() => weddingDay.pickVenue(1,2,"")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,2,[])).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,2,{})).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,2,null)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,2,undefined)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue("1",1,"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue({},1,"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue([],1,"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(null,1,"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(undefined,1,"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,"1","aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,{},"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,[],"aaa")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.pickVenue(1,null,"aaa")).to.throw(`Invalid Information!`);
    });

    it("If the value of the string location is different from Varna", () => {
      expect(() => weddingDay.pickVenue(1,1,"Dobrich")).to.throw(`The location of this venue is not in the correct area!`);
    });

    it("happy case If capacity >= 150 && pricePerGuest <= 120, location = Varna", () => {
      // If the capacity of the venue is greater or equal to 150, and pricePerGuest is less or equal to 120 return the string
      expect(weddingDay.pickVenue(151,119,"Varna")).to.equal(`This venue meets the requirements, with capacity of 151 guests and 119$ cover.`);
    });

    it("edge case If capacity = 150 && pricePerGuest = 120, location = Varna", () => {
      // If the capacity of the venue is greater or equal to 150, and pricePerGuest is less or equal to 120 return the string
      expect(weddingDay.pickVenue(150,120,"Varna")).to.equal(`This venue meets the requirements, with capacity of 150 guests and 120$ cover.`);
    });

    it("case If capacity < 150 && pricePerGuest > 120, location = Varna", () => {
      // If the capacity of the venue is greater or equal to 150, and pricePerGuest is less or equal to 120 return the string
      expect(weddingDay.pickVenue(140,130,"Varna")).to.equal(`This venue does not meet your requirements!`);
    });
  });


  // function - otherSpendings (weddingDecoration, photography, discount) - 
  describe("otherSpendings (weddingDecoration, photography, discount) ", () => {
    //A function that accepts three parameters: array, array, and boolean.
    it("test the valid inputs", () => {
      expect(() => weddingDay.otherSpendings([],[],"a")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],[],1)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],[],[])).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],[],{})).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],[],null)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings("a",[],true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings(1,[],true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings({},[],true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings(null,[],true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings(null,[],false)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],1,true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],"1",true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],{},true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],null,true)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.otherSpendings([],undefined,true)).to.throw(`Invalid Information!`);
    });
    // if thereis 15% discount:
    it("test the valid two options for photography, using  decoration flowers", () => {
      expect(weddingDay.otherSpendings(["flowers"],["pictures"], true)).to.equal(`You spend 1020$ for wedding decoration and photography with 15% discount!`);
    });
    it("test the valid two options for photography, using  decoration flowers", () => {
      expect(weddingDay.otherSpendings(["flowers"],["video"], true)).to.equal(`You spend 1530$ for wedding decoration and photography with 15% discount!`);
    });

    it("test the valid two options for photography, using  decoration Fabric drapes and curtains", () => {
      expect(weddingDay.otherSpendings(["Fabric drapes and curtains"],["pictures"], true)).to.equal(`You spend 935$ for wedding decoration and photography with 15% discount!`);
    });

    it("test the valid two options for photography, using  decoration Fabric drapes and curtains", () => {
      expect(weddingDay.otherSpendings(["Fabric drapes and curtains"],["video"], true)).to.equal(`You spend 1445$ for wedding decoration and photography with 15% discount!`);
    });

    // if there is NOT 15% discount:
    it("test the valid two options for photography, using  decoration flowers", () => {
      expect(weddingDay.otherSpendings(["flowers"],["pictures"], false)).to.equal(`You spend 1200$ for wedding decoration and photography!`);
    });
    it("test the valid two options for photography, using  decoration flowers", () => {
      expect(weddingDay.otherSpendings(["flowers"],["video"], false)).to.equal(`You spend 1800$ for wedding decoration and photography!`);
    });

    it("test the valid two options for photography, using  decoration Fabric drapes and curtains", () => {
      expect(weddingDay.otherSpendings(["Fabric drapes and curtains"],["pictures"], false)).to.equal(`You spend 1100$ for wedding decoration and photography!`);
    });

    it("test the valid two options for photography, using  decoration Fabric drapes and curtains", () => {
      expect(weddingDay.otherSpendings(["Fabric drapes and curtains"],["video"], false)).to.equal(`You spend 1700$ for wedding decoration and photography!`);
    });
  });


     // function -	tableDistribution (guests, tables) 
  describe("tableDistribution (guests, tables) ", () => {
    //- A function that accepts two parameters: number, number -> You need to calculate how many guests on table you will have
    it("test the valid inputs - if the guests and tables are not a numbers, or are a negative numbers", () => {
      expect(() => weddingDay.tableDistribution(1,"a")).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(1,{})).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(1, -1)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(1, [])).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(1, null)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(1, undefined)).to.throw(`Invalid Information!`);
      expect(() => weddingDay.tableDistribution(-1, -1)).to.throw(`Invalid Information!`);
    });

    it("If the peopleOnTable are < 6 ,  return the following message", () => {
      expect(weddingDay.tableDistribution(30, 10)).to.equal(`There is only 3 people on every table, you can join some tables.`);
    });

    it("If the peopleOnTable are > 6 ,  return the following message", () => {
      expect(weddingDay.tableDistribution(70, 10)).to.equal(`You have 10 tables with 7 guests on table.`);
    });

    it(" edge case - If the peopleOnTable are == 6 ,  return the following message", () => {
      expect(weddingDay.tableDistribution(60, 10)).to.equal(`You have 10 tables with 6 guests on table.`);
    });

  });

});
