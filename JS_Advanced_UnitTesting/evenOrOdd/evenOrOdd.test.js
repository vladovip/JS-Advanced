const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe('Is Odd Or Even', () => {
    it('Should return undefined if the passed param is a number', () => {
        expect(isOddOrEven(2)).to.be.undefined;
    });

    it('Should return undefined if the passed param is an array ', () => {
        expect(isOddOrEven([1, 2])).to.be.undefined;
    });

    it('Should return undefined if the passed param is an object', () => {
        expect(isOddOrEven({ 1: 'yes' })).to.be.undefined;
    });

    it('Should return odd if the passed param is with odd length', () => {
        expect(isOddOrEven('lol')).to.equal('odd');
    });

    it('Should return odd if the passed even is with odd length', () => {
        expect(isOddOrEven('word')).to.equal('even');
    });
});