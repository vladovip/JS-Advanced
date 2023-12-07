let { lottery } = require("./Lottery");
let { expect } = require("chai");


describe("Lottery Tickets",  () => {
    
    describe("buyLotteryTicket (ticketPrice,ticketCount,buy)", () => {
        // A function that accepts three parameters: number, number, and boolean.
        it("it test for valid parameters",  () => {
          expect(() => lottery.buyLotteryTicket(1,1,"a")).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(1,1,null)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(1,1,[])).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(1,1,{})).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(1,1,1)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket("a",1,true)).to.throw("Invalid input!");
          expect(() => lottery.buyLotteryTicket("a",1,true)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket([],1,true)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket({},1,true)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(true,1,true)).to.throw("Invalid input!"); 
          expect(() => lottery.buyLotteryTicket(1,"a",true)).to.throw("Invalid input!");  
          expect(() => lottery.buyLotteryTicket(1,[],true)).to.throw("Invalid input!");
          expect(() => lottery.buyLotteryTicket(1,{},true)).to.throw("Invalid input!");
          expect(() => lottery.buyLotteryTicket(1,true,true)).to.throw("Invalid input!");
          expect(() => lottery.buyLotteryTicket(1,false,true)).to.throw("Invalid input!");
        });

        it("If the value of the boolean buy is false, throw an error",  () => {
          expect(() => lottery.buyLotteryTicket(1,1,false)).to.throw("Unable to buy lottery ticket!"); 
        });

        it("happy case-ticketPrice is greater than 0, and ticketCount is greater or equal to 1",() => {
          expect(lottery.buyLotteryTicket(2,5,true)).to.equal("You bought 5 tickets for 10$."); 
        });

        it("edge case-ticketPrice is greater than 0, and ticketCount is greater or equal to 1",() => {
          expect(lottery.buyLotteryTicket(1,1,true)).to.equal("You bought 1 tickets for 1$."); 
        });
      });


      describe("checkTicket(ticketNumbers, luckyNumbers)", () => {
        //- A function that accepts two parameters: array and array.
        it("checkTicket Fn, it test validation of input parameters",  () => {
          expect(() => lottery.checkTicket([],1)).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket([],"a")).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket([],true)).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket([],{})).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket(1,[])).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket("1",[])).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket({},[])).to.throw("Invalid input!"); 
          expect(() => lottery.checkTicket(null,[])).to.throw("Invalid input!"); 
        });

        it("checkTicket Fn, If there is from 3 to 5 winning numbers in the ticket",  () => {
        // Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.
          expect(lottery.checkTicket([1,2,3,7,8,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
          expect(lottery.checkTicket([1,2,3,4,8,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
          expect(lottery.checkTicket([1,2,3,4,5,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
        });

        it("checkTicket Fn pure happy case - it test for Jackpot If all 6 are winning numbers",  () => {
          // Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.
            expect(lottery.checkTicket([1,2,3,4,5,6,],[1,2,3,4,5,6,])).to.equal("You win the JACKPOT!!!");
            expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.equal("You win the JACKPOT!!!"); 
            expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.equal("You win the JACKPOT!!!");
            // expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.deep.equal("You win the JACKPOT!!!");
            // expect([1, 2, 3, 4]).to.have.all.members([2, 4, 3, 1]);
            // expect([1, 2, 3, 4]).to.have.all.members([2, 4, 3, 1]);
            // expect([1, 2, 3, 4]).to.have.same.members([2, 4, 3, 1]);
            // expect(result).to.have.same.deep.members(expected);
            // expect(listFromPage).to.eventually.include.all.members(predefinedArray)
            // expect(predefinedArray).to.eventually.include.all.members(listFromPage)
            // Example of to.equal VS to.deep.equal
            // const a = {"a": "a"};
            // const b = {"a": "a"};
            // expect(a).to.equal(b); // false, as a refers to a different object than b
            // expect(a).to.deep.equal(b); // true, as the value of every property of a and b equals
          });
      });


      describe("secondChance(ticketID, secondChanceWinningIDs) ", () => {
        //-A function that accepts two parameters: number and array.
        it("secondChance Fn, it test validation of input parameters",  () => {
          expect(() => lottery.secondChance(1,"1")).to.throw("Invalid input!");
          expect(() => lottery.secondChance(1,{})).to.throw("Invalid input!"); 
          expect(() => lottery.secondChance(1,null)).to.throw("Invalid input!"); 
          expect(() => lottery.secondChance(1,true)).to.throw("Invalid input!"); 
          expect(() => lottery.secondChance(1,undefined)).to.throw("Invalid input!"); 
          expect(() => lottery.secondChance("1",[])).to.throw("Invalid input!"); 
          expect(() => lottery.secondChance(null,[])).to.throw("Invalid input!");  
          expect(() => lottery.secondChance({},[])).to.throw("Invalid input!");    
          expect(() => lottery.secondChance(true,[])).to.throw("Invalid input!");  
        });

        it("secondChance Fn, happy case when  there is a match,ticketID is included in secondChanceWinningIDs", () => {
          expect(lottery.secondChance(111,[111,222,333])).to.equal("You win our second chance prize!");
        });

        it("secondChance Fn, happy case when  there is a match,ticketID is included in secondChanceWinningIDs", () => {
          expect(lottery.secondChance(1,[5,3,1,2,4,6,22])).to.equal("You win our second chance prize!");
        });

        it("secondChance Fn, unhappy case when ticketID is  not included in secondChanceWinningIDs", () => {
          expect(lottery.secondChance(1,[2,3,4,5,6])).to.equal("Sorry, your ticket didn't win!");
        });

      });

    });



