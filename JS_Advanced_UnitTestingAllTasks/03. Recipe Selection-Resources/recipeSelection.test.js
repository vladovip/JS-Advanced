let {recipeSelection}  = require("./recipeSelection");
let { expect } = require("chai");


// describe (" test whether it works", () => {
//     it (" Recipe Selection happy case it works ", () => {
//              console.log(`recipeSelection`);
//     });

// });

describe ("all methods in the recipeSelection", () => {
    // isTypeSuitable(type, dietaryRestriction) both params should be strings 
    it ("test for the valid inputs, both params should be string ", () => {
        expect(()=> recipeSelection.isTypeSuitable(1,1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable("a",1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable("a",{})).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable("a",[])).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable(1,"a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable({},"a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isTypeSuitable([],"a")).to.throw(`Invalid input`);
    });
    // o	If the dietaryRestriction is "Vegetarian" and the type is "Meat", it returns the message:
    // isTypeSuitable(type, dietaryRestriction)
    it ("test for discrepancies between dietaryRestriction and type Meat", () => {
        expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal(`This recipe is not suitable for vegetarians`);
    });

    it ("test if the dietaryRestriction is Vegan and the type is either Meat or Dairy", () => {
        expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal(`This recipe is not suitable for vegans`);
        expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal(`This recipe is not suitable for vegans`);
    });

    it ("test for any other combination of type and dietaryRestriction", () => {
        expect(recipeSelection.isTypeSuitable("Dairy", "Vegetarian")).to.equal(`This recipe is suitable for your dietary restriction`);
        expect(recipeSelection.isTypeSuitable("Tomatoes", "Vegetarian")).to.equal(`This recipe is suitable for your dietary restriction`);
        expect(recipeSelection.isTypeSuitable("a", "Vegetarian")).to.equal(`This recipe is suitable for your dietary restriction`);
        expect(recipeSelection.isTypeSuitable("a", "Vegan")).to.equal(`This recipe is suitable for your dietary restriction`);
        expect(recipeSelection.isTypeSuitable("Meat", "a")).to.equal(`This recipe is suitable for your dietary restriction`);
        expect(recipeSelection.isTypeSuitable("Dairy", "a")).to.equal(`This recipe is suitable for your dietary restriction`);
    });


    //  isItAffordable (price, budget)
    // accepts two parameters: number and number.
    it ("test If the remaining budget is less than 0, it returns the message", () => {
        expect(recipeSelection.isItAffordable(2,1)).to.equal(`You don't have enough budget to afford this recipe`);
    });
    it ("test happy case when budget > 0, it returns the message", () => {
        expect(recipeSelection.isItAffordable(1,2)).to.equal(`Recipe ingredients bought. You have 1$ left`);
    });
    it ("test happy case when the rest of budget = 0, after purchase, it returns the message", () => {
        expect(recipeSelection.isItAffordable(1,1)).to.equal(`Recipe ingredients bought. You have 0$ left`);
    });
    it ("test if the price and budget are not a number, throw an error", () => {
        expect(()=> recipeSelection.isItAffordable(1,"a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable(1,[])).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable(1,{})).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable(1,null)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable(1,undefined)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable("a",1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable({},1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable([],1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.isItAffordable(null,1)).to.throw(`Invalid input`);
    });


    //getRecipesByCategory(recipes, category) This function filters an array of recipes based on a desired category and returns an array of recipe titles.
    //It takes in two parameters: recipes (array) representing the array of recipe objects and category (string)  
    it ("test happy case it filters the recipes array based on the category matches the desired category ", () => {
        expect(recipeSelection.getRecipesByCategory([{title: "kifteta", category:"european"},{title: "musaka", category:"european"},{title: "lahmadzun", category:"asian"}], 
        "european")).to.deep.equal(["kifteta", "musaka" ]);
    });

    it ("test when no recipes matches the category, and return empty [] ", () => {
        expect(recipeSelection.getRecipesByCategory([{title: "kifteta", category:"a"},{title: "musaka", category:"b"},{title: "lahmadzun", category:"c"}], 
        "d")).to.deep.equal([]);
    });

    it ("test for valid inputs, when submitted invalid parameters, throw an error ", () => {
        expect(()=> recipeSelection.getRecipesByCategory([],1)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory([],[])).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory([],{})).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory([],null)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory([], undefined)).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory("a", "a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory(1, "a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory({}, "a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory(null, "a")).to.throw(`Invalid input`);
        expect(()=> recipeSelection.getRecipesByCategory(undefined, "a")).to.throw(`Invalid input`);
    });

});



