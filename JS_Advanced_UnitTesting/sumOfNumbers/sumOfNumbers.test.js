const { expect } = require('chai');
const { sum } = require('./sumOfNumber');

describe('Sum checker', () => {
    it('Testing sum with 1, 2, 3', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    })

    it('Testing sum with \'1\', 2, 3', () => {
        expect(sum('1', 2, 3)).to.equal(1);
    })

    it('Testing sum with 1, 2, 3 as strings', () => {
        expect(sum(['1', '2', '3'])).to.equal(6);
    })

    it('Testing negative numbers sum 1 + -1', () => {
        () => expect(sum([1, -1])).to.be.equal(0);
    });

    it('Testing sum of zeroes 0 + 0', () => {
        expect(sum([0, 0])).to.be.equal(0);
    });
    it('Testing sum of empty array', () => {
        expect(sum([])).to.be.equal(0);
    });
});