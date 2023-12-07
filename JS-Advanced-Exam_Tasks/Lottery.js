describe('Testing lottery object', function() {
    describe('Testing buyLotteryTicket method', function() {
        it('Testing input with invalid parameters and boolean true', function () {
            expect(() => { lottery.buyLotteryTicket("test", 1, true)}).to.throw("Invalid input!");
            expect(() => { lottery.buyLotteryTicket(15, 'test', true)}).to.throw("Invalid input!");
            expect(() => { lottery.buyLotteryTicket(15, 1, 'test')}).to.throw("Invalid input!");
            expect(() => { lottery.buyLotteryTicket(0, 1, true)}).to.throw("Invalid input!");
            expect(() => { lottery.buyLotteryTicket(15, 0, true)}).to.throw("Invalid input!");
        });
        it('Testing input with invalid parameters and boolean false', function () {
            expect(() => { lottery.buyLotteryTicket(15, 1, false)}).to.throw("Unable to buy lottery ticket!");
        });
        it('Testing with valid parameters', function() {
            expect(lottery.buyLotteryTicket(15, 1, true)).to.equal(`You bought 1 tickets for 15$.`);
            expect(lottery.buyLotteryTicket(15, 3, true)).to.equal(`You bought 3 tickets for 45$.`);
        })
    });

    describe('Testing checkTicket method', function() {
        it('Testing input with invalid parameters', function () {
            expect(() => { lottery.checkTicket("test", [1,2,3,4,5,6])}).to.throw("Invalid input!");
            expect(() => { lottery.checkTicket([1,2,3,4,5,6], 'test')}).to.throw("Invalid input!");
        });
        it('Testing with valid parameters and 3 winning numbers', function() {
            expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,7,8,9])).to.equal(`Congratulations you win, check your reward!`);
        });
        it('Testing with valid parameters and 6 winning numbers', function() {
            expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6])).to.equal(`You win the JACKPOT!!!`);
        });
    });

    describe('Testing secondChance method', function() {
        it('Testing input with invalid parameters', function () {
            expect(() => { lottery.secondChance("test", [1,2,3,4,5,6])}).to.throw("Invalid input!");
            expect(() => { lottery.secondChance(3, 'test')}).to.throw("Invalid input!");
        });
        it('Testing with valid parameters and winning second chance', function() {
            expect(lottery.secondChance(201, [200,201,202,203,204,205])).to.equal(`You win our second chance prize!`);
        });
        it('Testing with valid parameters and not winning second chance', function() {
            expect(lottery.secondChance(199, [200,201,202,203,204,205])).to.equal(`Sorry, your ticket didn't win!`);
        });
    });
});