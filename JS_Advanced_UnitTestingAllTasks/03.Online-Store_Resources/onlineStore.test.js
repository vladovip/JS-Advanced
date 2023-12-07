let {onlineStore}  = require("./onlineStore");
let { expect } = require("chai");


describe ("Test the online store",  () =>{
    // isProductAvailable(product, stockQuantity)
    it ("test if the produt is availbale, if  stockQuantity <= 0", () => {
        expect(onlineStore.isProductAvailable("watermellon", -1 )).to.equal(`Sorry, watermellon is currently out of stock.`);
    });
    it ("test if the produt is availbale, if  stockQuantity > 0", () => {
        expect(onlineStore.isProductAvailable("watermellon", 5 )).to.equal(`Great! watermellon is available for purchase.`);
    });
    // the product parameter should be an string, and the stockQuantity  should be a number
    it ("test if the  product and stockQuantity are valid parameters", () => {
        expect(()=> onlineStore.isProductAvailable( 5, 5 )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable({}, 5 )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( [], 5 )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( null, 5 )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( "a", {} )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( "a", [] )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( "a", undefined )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.isProductAvailable( "a", "b" )).to.throw(`Invalid input.`);
    });

// test canAffordProduct(productPrice, accountBalance)
// A function that accepts two parameters: a number representing the product price and a number representing the account balance

    it ("test when customers can not afford the product => result is less than 0", () => {
        expect(onlineStore.canAffordProduct( 3 , 1 )).to.equal(`You don't have sufficient funds to buy this product.`);
    });

    it ("test when customers can afford the product => result is greater than 0", () => {
        expect(onlineStore.canAffordProduct( 1 , 5 )).to.equal(`Product purchased. Your remaining balance is $4.`);
    });
    it ("test when customers can afford the product => result is equal  0", () => {
        expect(onlineStore.canAffordProduct( 1 , 1 )).to.equal(`Product purchased. Your remaining balance is $0.`);
    });

    // validate the input; if productPrice and accountBalance are not numbers
    it ("test when the inputs are not valid parameters", () => {
        expect(()=> onlineStore.canAffordProduct( "s" , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( {} , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( [] , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( null , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( undefined , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( 1 , "s" )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( 1 , [] )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( 1 , {} )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( 1 , null )).to.throw(`Invalid input.`);
        expect(()=> onlineStore.canAffordProduct( 1 , "" )).to.throw(`Invalid input.`);
    });

    //  test for •	getRecommendedProducts(productList, category) 
    //  that accepts two parameters: an array of objects representing products and a string representing a category.
    
    it ("test happy case when product matches specific categories", () => {
        expect(onlineStore.getRecommendedProducts([{name:"chair", category:"furniture"}, {name:"table", category:"furniture"} ], 
        "furniture")).to.equal(`Recommended products in the furniture category: chair, table`);
    });
      //  o	If there are no recommended products in the specified category
    it (" test if there are no recommended products in the specified category", () => {
        expect(onlineStore.getRecommendedProducts([{name:"chair", category:"kitchen"}, {name:"table", category:"kitchen"} ], 
        "furniture")).to.equal(`Sorry, we currently have no recommended products in the furniture category.`);
    });

    // test for invalid parameters 
    it ("test case of invalid parameters", () => {
        expect(() =>onlineStore.getRecommendedProducts([], 1)).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts([], [])).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts([], {})).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts([], null)).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts([], undefined)).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts({}, [])).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts("a", [])).to.throw(`Invalid input.`);
        expect(() =>onlineStore.getRecommendedProducts(1, [])).to.throw(`Invalid input.`);
    });


});

