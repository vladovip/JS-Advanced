const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('Symmetry Checker', () => {
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })

    it('converts SoftUni Blue to #234465', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    })

    it('converts 15, 15, 15 to #234465', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    })

    it('return undefined for missing params', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
    })

    it('return undefined for out of lower bound', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    })

    it('return undefined for out of upper bound', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    })

    it('return undefined for float value', () => {
        expect(rgbToHexColor(2.5, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 2.5, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 2.5)).to.be.undefined;
    })

    it('return undefined for string value', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    })
});