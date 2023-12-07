

let {petAdoptionAgency} = require("../03.Pet-Adoption-Agency/petAdoptionAgency");
let { expect } = require("chai");

describe("Pet Adoption Agency", () => {

  describe("isPetAvailable( pet, availableCount, vaccinated)", () => {
    // A function that accepts three parameters: string  type of pet;  number - available pets ; boolean  whether the pets are vaccinated or not
    it("If the availableCount is less than or equal to 0", () => {
      expect(petAdoptionAgency.isPetAvailable("a", 0, false)).to.equal(`Sorry, there are no a(s) available for adoption at the agency.`);
      expect(petAdoptionAgency.isPetAvailable("a", -1, false)).to.equal(`Sorry, there are no a(s) available for adoption at the agency.`);
    });

    it("If the availableCount is > 0, If vaccinated is true", () => {
        expect(petAdoptionAgency.isPetAvailable("a", 2, true)).to.equal(`Great! We have 2 vaccinated a(s) available for adoption at the agency.`);
        expect(petAdoptionAgency.isPetAvailable("b", 3, true)).to.equal(`Great! We have 3 vaccinated b(s) available for adoption at the agency.`);
    });
      it("If the availableCount is > 0, If vaccinated is false", () => {
        expect(petAdoptionAgency.isPetAvailable("a", 2, false)).to.equal(`Great! We have 2 a(s) available for adoption, but they need vaccination.`);
        expect(petAdoptionAgency.isPetAvailable("b", 3, false)).to.equal(`Great! We have 3 b(s) available for adoption, but they need vaccination.`);
    });
    it("test invalid inputs for isPetAvailable", () => {
        expect(()=>petAdoptionAgency.isPetAvailable(1, 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable({}, 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable([], 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable(true, 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable(undefined, 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable(null, 2, false)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", [], true)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", {}, true)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", null, true)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", undefined, true)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", 2, [])).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", 2, {})).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", 2, null)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable("a", 2, undefined)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable([], [], [])).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable({}, {}, {})).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.isPetAvailable(true, true, {})).to.throw(`Invalid input`);
        
    });

    });

    
  describe("getRecommendedPets(petList, desiredTraits) ", () => {
    //A function that accepts two parameters: an array of objects properties "name" and "traits"  AND string representing the desired traits 
   // {}, "a"
    it("happy case ", () => {
      expect(petAdoptionAgency.getRecommendedPets([{name : "a", traits: "b"},{name : "b", traits: "b"}], "b")).to.equal(`Recommended pets with the desired traits (b): a, b`);
      expect(petAdoptionAgency.getRecommendedPets([{name : "d", traits: "c"},{name : "e", traits: "c"}], "c")).to.equal(`Recommended pets with the desired traits (c): d, e`);
    });

    it("If no matching pets are found, it returns", () => {
        expect(petAdoptionAgency.getRecommendedPets([{name : "a", traits: "b"},{name : "b", traits: "b"}], "f")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: f.`);
        expect(petAdoptionAgency.getRecommendedPets([{name : "d", traits: "c"},{name : "e", traits: "c"}], "z")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: z.`);
      });
      
    it("test invalid inputs for getRecommendedPets", () => {
        expect(()=>petAdoptionAgency.getRecommendedPets(1, "a")).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets({}, "a")).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets("a", "a")).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets(null, "a")).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets(undefined, "a")).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets([], [])).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets({},{})).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets([], 1)).to.throw(`Invalid input`); 
        expect(()=>petAdoptionAgency.getRecommendedPets([], {})).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.getRecommendedPets([], null)).to.throw(`Invalid input`);  
        expect(()=>petAdoptionAgency.getRecommendedPets([], undefined)).to.throw(`Invalid input`);    
        expect(()=>petAdoptionAgency.getRecommendedPets(true, undefined)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.getRecommendedPets(true, true)).to.throw(`Invalid input`);
        expect(()=>petAdoptionAgency.getRecommendedPets(undefined, true)).to.throw(`Invalid input`);
    });

    });

    describe("•	adoptPet(pet, adopterName) ", () => {
        // A function that accepts two parameters,both strings.
     
        it("happy case  returns a success message ", () => {
          expect(petAdoptionAgency.adoptPet( "a", "b")).to.equal(`Congratulations, b! You have adopted a from the agency. Enjoy your time with your new furry friend!`);
          expect(petAdoptionAgency.adoptPet("c", "d")).to.equal(`Congratulations, d! You have adopted c from the agency. Enjoy your time with your new furry friend!`);
        });

        it("test invalid inputs for adoptPet", () => {
            expect(()=>petAdoptionAgency.adoptPet(1,"a")).to.throw(`Invalid input`);  
            expect(()=>petAdoptionAgency.adoptPet({},"a")).to.throw(`Invalid input`); 
            expect(()=>petAdoptionAgency.adoptPet([],"a")).to.throw(`Invalid input`);
            expect(()=>petAdoptionAgency.adoptPet(null,"a")).to.throw(`Invalid input`); 
            expect(()=>petAdoptionAgency.adoptPet(undefined,"a")).to.throw(`Invalid input`); 
            expect(()=>petAdoptionAgency.adoptPet(true,"a")).to.throw(`Invalid input`);  
            expect(()=>petAdoptionAgency.adoptPet("a", 1)).to.throw(`Invalid input`);  
            expect(()=>petAdoptionAgency.adoptPet("a", {})).to.throw(`Invalid input`);
            expect(()=>petAdoptionAgency.adoptPet("a", [])).to.throw(`Invalid input`);  
            expect(()=>petAdoptionAgency.adoptPet("a", true)).to.throw(`Invalid input`);
            expect(()=>petAdoptionAgency.adoptPet("a", null)).to.throw(`Invalid input`);    
            expect(()=>petAdoptionAgency.adoptPet("a", undefined)).to.throw(`Invalid input`);  
            expect(()=>petAdoptionAgency.adoptPet([], [])).to.throw(`Invalid input`); 
            expect(()=>petAdoptionAgency.adoptPet({}, {})).to.throw(`Invalid input`); 
            expect(()=>petAdoptionAgency.adoptPet(true, true)).to.throw(`Invalid input`);      
          
        });
        
        });

});
