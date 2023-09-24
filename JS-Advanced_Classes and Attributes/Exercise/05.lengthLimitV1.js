class Stringer {
  constructor(string, initialLength) {
    this.innerString = string;
    this.innerLength = initialLength;
    this.initialLength = initialLength;
  }

  increase(value) {
    this.innerLength += value;
  }

  decrease(value) {
    this.innerLength -= value;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    if (this.innerLength == 0) {
      return `...`;
    } else if (this.innerLength < this.initialLength - 1) {
      return this.innerString.slice(0, this.innerLength) + "...";

    } else {
      return this.innerString.slice(0, this.innerLength);
    }
    
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
