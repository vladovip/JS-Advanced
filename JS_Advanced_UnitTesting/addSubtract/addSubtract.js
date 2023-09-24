function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

const calculator = createCalculator();

console.log(calculator.add(2));
console.log(calculator.add(5));
console.log(calculator.subtract(3));
console.log(calculator.get());


module.exports = { createCalculator };