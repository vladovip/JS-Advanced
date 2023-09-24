 let {isSymmetric} = require("./checkSymmetryV1");
 let {expect} = require("chai");

// •	Take an array as an argument
// •	Return false for any input that isn’t of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false


 describe("Symmetry Checks", () => {

     it ("works with symetric numbers", () => {
        expect(isSymmetric([1,3,3,1])).to.be.true;
     });

     it ("return false for non-symetric array", () => {
      expect(isSymmetric([1,3,5])).to.be.false;
      });

      it ("return false - input is not the correct type", () => {
         expect(isSymmetric(3)).to.be.false;
      });

      it ("works with symetric odd-length array", () => {
         expect(isSymmetric([1,2,3,2,1])).to.be.true;
      });
   
      it ("works with symetric string array", () => {
         expect(isSymmetric(["a","b","b", "a"])).to.be.true;
      });
   
      it ("return false for string parameter", () => {
         expect(isSymmetric("abba")).to.be.false;
      });

      it ("return false for type mismatched elements ", () => {
         expect(isSymmetric([5 , 2 ,"5"])).to.be.false;
      });
 });

