
let { bookSelection } = require("./solution");
let { expect } = require("chai");

// "test": "echo \"Error: no test specified\" && exit 1"

describe ("Test", () => {
     describe("isGenreSuitable", () => {
        it ("correct genre and age -> happy case", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 15)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("Horror", 15)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("comic", 10)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable("comic", 18)).to.equal(`Those books are suitable`);
           
        });
        it ("not proper genre for the specific  age", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 9)).to.equal(`Books with Thriller genre are not suitable for kids at 9 age`);
            expect(bookSelection.isGenreSuitable("Horror", 9)).to.equal(`Books with Horror genre are not suitable for kids at 9 age`);
           
        });

        it ("not proper genre for the edge case age, when the kids are  exactly 12 years old", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
     });

     describe("isItAffordable", () => {
        it ("check the case when your budget is bigger than price of the book", () => {
            expect(bookSelection.isItAffordable(1,3)).to.equal(`Book bought. You have 2$ left`); 
        });
        it ("check the case when your budget is equal to the price of the book - edge case", () => {
            expect(bookSelection.isItAffordable(1,1)).to.equal(`Book bought. You have 0$ left`); 
        });
        it ("check the case when your budget is less than price of the book", () => {
            expect(bookSelection.isItAffordable(3,1)).to.equal(`You don't have enough money`); 
        });
        it ("check if the input is invalid. Both arguments have to be a number type", () => {
            expect( ()=> bookSelection.isItAffordable("3", 1)).to.throw("Invalid input");
            expect( ()=> bookSelection.isItAffordable( 3,"1" )).to.throw("Invalid input"); 
            expect( ()=> bookSelection.isItAffordable( "1","1" )).to.throw("Invalid input");
            expect( ()=> bookSelection.isItAffordable( [] ,"1" )).to.throw("Invalid input"); 
            expect( ()=> bookSelection.isItAffordable( 1 ,[] )).to.throw("Invalid input"); 
            expect( ()=> bookSelection.isItAffordable( 1 , {} )).to.throw("Invalid input"); 
            expect( ()=> bookSelection.isItAffordable( {} , [] )).to.throw("Invalid input");
            expect( ()=> bookSelection.isItAffordable( [] , {} )).to.throw("Invalid input");
        });
     });

     describe("suitableTitles", () => {
        it ("valid case, single match", () => {
            expect(bookSelection.suitableTitles([{title: "aa", genre: 'b'}], "b")).to.deep.equal(["aa"]);
        });
        it ("valid case, multiple match", () => {
            expect(bookSelection.suitableTitles([
                {title: "aa", genre: 'b'},
                {title: "bb", genre: 'b'},
                {title: "cc", genre: 'a'},
                {title: "dd", genre: 'b'},

            ], "b")).to.deep.equal(["aa", "bb", "dd"]);
        });

        it ("no matches have been found", () => {
            expect(bookSelection.suitableTitles([{title: "cc",  genre: "c"}], "d")).to.deep.equal([]);
        });
  
        it ("invalid inputs cases", () => {
            expect(()=> bookSelection.suitableTitles([], 1)).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles([], {})).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles([], [])).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles( 1, "a")).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles({}, "a")).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles({}, {})).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles("a", [])).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles("a", 1)).to.throw(`Invalid input`);
            expect(()=> bookSelection.suitableTitles("a", {})).to.throw(`Invalid input`);
        });
     });
});