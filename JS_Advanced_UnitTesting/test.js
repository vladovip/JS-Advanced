
//   "test": "echo \"Error: no test specified\" && exit 1" - configuration for package.json file 


// describe ("test Suite", () => {
    
//     it ("test1", () =>{
//        console.log("first test is done");
//     })
//     it ("test2", () =>{
//         throw new Error ("second test does not work");
//     })

// });

let {  multiply, sumNumbers } = require("./DemoCodingTasks_UnitTesting/demoModuleExports");
let {expect} = require("chai");


describe ("test math operations", () => {
    
    it ("works with positive integers", () =>{
         // first option: 
        // if (sumNumbers(3,5) != 8 ){
        //     throw new Error ("does not work with 3 and 5")
        // } else {
        //     console.log(` it works: ` + sumNumbers(3,5));
        // } 

        // second option below: 
        expect(sumNumbers(3,5)).to.equal(8, "not work with 3 and 5");
    });

    it ("it works with floating numbers ", () =>{
        // first option:
        // if(sumNumbers(3.1, 5.1) != 8.2 ){
        //     throw new Error ("it not works with floating numbers");
        // } else {
        //     console.log(`this is the proper result: `+sumNumbers(3.1, 5.1))
        // }

        // second option below: 
        expect(sumNumbers(3.1, 5.1)).to.equal(8.2, "not work with floating point numbers");
    });

});
