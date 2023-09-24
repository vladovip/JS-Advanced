const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('It should return module(object)', () => {
    it('Should return object', () => {
        expect(typeof createCalculator()).to.equal('object');
    });

    it('Should contain add property', () => {
        expect(createCalculator()).to.have.property('add');
    });

    it('Should contain subtract property', () => {
        expect(createCalculator()).to.have.property('subtract');
    });

    it('Should contain get property', () => {
        expect(createCalculator()).to.have.property('get');
    });

    it('Add should be a function', () => {
        expect(typeof createCalculator().add).to.equal('function');
    });

    it('Subtract should be a function', () => {
        expect(typeof createCalculator().subtract).to.equal('function');
    });

    it('Get should be a function', () => {
        expect(typeof createCalculator().get).to.equal('function');
    });

    it('Add should parse string number', () => {
        let calc = createCalculator();
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });

    it('Subtract should parse string number', () => {
        let calc = createCalculator();
        calc.subtract('1');
        expect(calc.get()).to.equal(-1);
    });
    
    it('Add general test', () => {
        let calc = createCalculator();
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });

    it('Subtract general test', () => {
        let calc = createCalculator();
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });

    it('Params that cant be parsed should return NaN', () => {
        let calc = createCalculator();
        calc.add('string');
        expect(calc.get()).to.be.NaN;
    });

    it('Should return the value', () => {
        let calc = createCalculator();
        calc.add(1);
        expect(typeof calc.get()).to.equal('number');
        expect(calc.get()).to.equal(1);
    });

    it('Params that cant be parsed should return NaN', () => {
        let calc = createCalculator();
        calc.add('string');
        expect(calc.get()).to.be.NaN;
    })
});