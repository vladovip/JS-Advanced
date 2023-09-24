
let expect = require("chai").expect;
let assert = require("chai").assert;
let {StringBuilder} = require("./13.stringBuilderV1");

// console.log(StringBuilder);
// console.log(expect);
// 13.stringBuilderV1.test.js 

describe("StringBuilder", function() {
    
    describe(" we test the constructor",  function () {
        it("should intilialize empty array if undefined is given as parameter for string", function() {
           let stringBld = new StringBuilder (undefined);
           expect(stringBld.toString()).to.equal("");
        });

        it("should throw an error if passed argument is not a string", function() {
            expect(()=>new StringBuilder (5.1)).to.throw(TypeError);
            expect(()=>new StringBuilder (null)).to.throw(TypeError);  
         });

         it(" it should inititalize correct array, when passed argument is of type - string", function() {
            let stringBld1 = new StringBuilder("abcdafwfw");
            let stringBld2 = new StringBuilder("itWorks");
            expect(stringBld1.toString()).to.equal("abcdafwfw"); 
            expect(stringBld2.toString()).to.equal("itWorks"); 
         });
    });
    // Append Method
    describe("Append Method of the Class",  function () {
        it("should throw an error when passing a non-string argument", function() {
           let stringBld = new StringBuilder ();
           expect(()=> stringBld.append(true)).to.throw(TypeError, "Argument must be a string");
           let stringBld2 = new StringBuilder ("def");
           expect(()=> stringBld2.append(100)).to.throw(TypeError, "Argument must be a string");
        });

        it("should append string correctly to the initial string", function() {
            let input = "123";
            let input2 = "wow";
            let expected = "abc123";
            let expected2 = "abc123wow";
            let stringBld = new StringBuilder("abc");
            stringBld.append(input);
            expect(stringBld.toString()).to.equal(expected);
            stringBld.append(input2);
            expect(stringBld.toString()).to.equal(expected2);
         });

        it("should append only a string chars, when passed a string argument", function() {
            let input = "123";
            let input2 = "wow";
            let expected = "abc123";
            let expected2 = "abc123wow";
            let expected3 = "abc123ww"
            let stringBld = new StringBuilder("abc");
            stringBld.append(input);
            expect(stringBld.toString()).to.equal(expected);
            stringBld.append(input2);
            expect(stringBld.toString()).to.equal(expected2);
            stringBld.remove( 7, 1 );
            expect(stringBld.toString()).to.equal(expected3);
         });

    });
    // Prepend Method
    describe("Prepend method of the Class",  function () {
        it("should throw an error when passing a non-string argument", function() {
            let stringBld = new StringBuilder ();
            expect(()=> stringBld.prepend(true)).to.throw(TypeError, "Argument must be a string");
            let stringBld2 = new StringBuilder ("def");
            expect(()=> stringBld2.prepend(100)).to.throw(TypeError, "Argument must be a string");
         });
 
         it("should prepend string correctly to the initial string", function() {
             let input = "123";
             let input2 = "wow";
             let expected = "123abc";
             let expected2 = "wow123abc";
             let stringBld = new StringBuilder("abc");
             stringBld.prepend(input);
             expect(stringBld.toString()).to.equal(expected);
             stringBld.prepend(input2);
             expect(stringBld.toString()).to.equal(expected2);
          });

          it("should prepend chars at the correct index  to the initial passed string", function() {
            let input = "123";
            let input2 = "wow";
            let expected = "123abc";
            let expected2 = "wow123abc";
            let expected3 = "wow123bc";
            let stringBld = new StringBuilder("abc");
            stringBld.prepend(input);
            expect(stringBld.toString()).to.equal(expected);
            stringBld.prepend(input2);
            expect(stringBld.toString()).to.equal(expected2);
            stringBld.remove(6,1);
            expect(stringBld.toString()).to.equal(expected3);

         });
    });
    // insertAt(string, startIndex)
    describe("InsertAt method of the Class",  function () {
        it("should throw an error when passing a non-string argument", function() {
            let stringBld = new StringBuilder ();
            expect(()=> stringBld.insertAt(true, 0)).to.throw(TypeError, "Argument must be a string");
            let stringBld2 = new StringBuilder ("def");
            expect(()=> stringBld2.insertAt(100, 2)).to.throw(TypeError, "Argument must be a string");
         });
 
         it("should insert the given string at the correct index of the currentString", function() {
             let input = " fast";
             let input2 = " are";
             let expected = "cars fast";
             let expected2 = "cars are fast";
             let stringBld = new StringBuilder("cars");
             stringBld.insertAt(input, 4);
             expect(stringBld.toString()).to.equal(expected);
             stringBld.insertAt(input2, 4);
             expect(stringBld.toString()).to.equal(expected2);
          });

          it("should insert the given string at the correct index of the currentString", function() {
            let input = " fast";
            let input2 = " are";
            let expected = "cars fast";
            let expected2 = "cars are fast";
            let expected3 = "cars are fat";
            let stringBld = new StringBuilder("cars");
            stringBld.insertAt(input, 4);
            expect(stringBld.toString()).to.equal(expected);
            stringBld.insertAt(input2, 4);
            expect(stringBld.toString()).to.equal(expected2);
            stringBld.remove( 11, 1);
            expect(stringBld.toString()).to.equal(expected3);
         });

    });
        // Function remove(startIndex, length) - removes elements from the storage, starting at the given index (inclusive),
        describe("remove method of the Class",  function () {
             it("should  removes elements from the storage, starting at the given index (inclusive),", function() {
                let expected = "cars are fat";
                let expected2 = "cars fat";
                 let stringBld = new StringBuilder("cars are fast");
                 stringBld.remove(11, 1);
                 expect(stringBld.toString()).to.equal(expected);
                 stringBld.remove(4, 4);
                 expect(stringBld.toString()).to.equal(expected2);
              });  
        });
         
        // Test a Function toString() - returns a string with all elements joined by an empty string
         describe("test toString method of the Class",  function () {
            it("should returns a string with all elements joined by an empty string", function() {
                let expected = "";
                let expected2 = "cars are fast";
                let stringBld1 = new StringBuilder("");
                let stringBld2 = new StringBuilder("cars are fast");
                expect(stringBld1.toString()).to.equal(expected);
                expect(stringBld2.toString()).to.equal(expected2);
             });  
       });

});
