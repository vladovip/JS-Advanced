// expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.deep.equal("You win the JACKPOT!!!");
            // expect([1, 2, 3, 4]).to.have.all.members([2, 4, 3, 1]);
            // expect([1, 2, 3, 4]).to.have.all.members([2, 4, 3, 1]);
            // expect([1, 2, 3, 4]).to.have.same.members([2, 4, 3, 1]);
            // expect(result).to.have.same.deep.members(expected);
            // expect(listFromPage).to.eventually.include.all.members(predefinedArray)
            // expect(predefinedArray).to.eventually.include.all.members(listFromPage)


            // Example of to.equal VS to.deep.equal :
            // const a = {"a": "a"};
            // const b = {"a": "a"};
            // expect(a).to.equal(b); // false, as a refers to a different object than b
            // expect(a).to.deep.equal(b); // true, as the value of every property of a and b equals

            
            // When throw an error : 
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



              // when happy case :
        it("checkTicket Fn pure happy case - it test for Jackpot If all 6 are winning numbers",  () => {
         // Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.
         expect(lottery.checkTicket([1,2,3,4,5,6,],[1,2,3,4,5,6,])).to.equal("You win the JACKPOT!!!");
         expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.equal("You win the JACKPOT!!!"); 
         expect(lottery.checkTicket([10,20,30,40,50,60],[20,40,30,10,60,50])).to.equal("You win the JACKPOT!!!");
               
        });

         it("checkTicket Fn, If there is from 3 to 5 winning numbers in the ticket",  () => {
         // Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.
         expect(lottery.checkTicket([1,2,3,7,8,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
         expect(lottery.checkTicket([1,2,3,4,8,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
          expect(lottery.checkTicket([1,2,3,4,5,9],[1,2,3,4,5,6,])).to.deep.equal("Congratulations you win, check your reward!"); 
        });
            
      