const { expect } = require('chai');
const { isSymmetric } = require('./checkSymmetry');

describe('Symmetry Checker', () => {
    it('works with symmetric number array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it('return false non-symmetric number array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it('return false non-array', () => {
        expect(isSymmetric(3)).to.be.false;
    })

    it('works with symmetric odd-length number array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })

    it('works with symmetric string array', () => {
        expect(isSymmetric(['a', 's', 's', 'a'])).to.be.true;
    })

    it('return false string params', () => {
        expect(isSymmetric('abba')).to.be.false;
    })

    it('return false for type mismatched elements', () => {
        expect(isSymmetric(['1', 2, 1])).to.be.false;
    })
});