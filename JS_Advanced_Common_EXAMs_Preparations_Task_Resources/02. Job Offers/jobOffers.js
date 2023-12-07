class JobOffers {

    constructor (employer,position ){
      this.employer = employer;
      this.position = position;
      this.jobCandidates = [];
    }

    jobApplication(candidates){
        // The method takes one argument: candidates (array of strings);
        // Every element into this array - "{name}-{education}-{yearsExperience}";
        // Example: ["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"…]
        let collectionOfNames = new Set();
        for (let el of candidates){
            let [name, education, yearsExperience] = el.split("-");
            yearsExperience = Number(yearsExperience);
            let candidateObj = this.jobCandidates.find((x)=> x.name == name );
            if ( candidateObj != undefined  ){
                if( candidateObj.yearsExperience < yearsExperience){
                    candidateObj.yearsExperience = yearsExperience;
                }
            }
            if( candidateObj == undefined ){
                this.jobCandidates.push({name, education, yearsExperience}); 
            }
            collectionOfNames.add(name);
        }
        return `You successfully added candidates: ${(Array.from(collectionOfNames)).join(", ")}.`
    }

    jobOffer(chosenPerson){
        // The method takes one argument: chosenPerson (string).
        // Тhe string about the selected player is in the format: "{name}-{minimalExperience}";
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let candidateObj =  this.jobCandidates.find((candidate) => candidate.name == name);
        
        if(candidateObj == undefined ){
            throw new Error(`${name} is not in the candidates list!`);
        }

        if(candidateObj != undefined){
            if( minimalExperience > candidateObj.yearsExperience ){
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                candidateObj.yearsExperience = "hired";
                return `Welcome aboard, our newest employee is ${name}.`
            }
        }
    }

    salaryBonus(name){
        //With this method, we make sure that the candidates have proper education (Bachelor degree or Master degree) for the position.
       // The method takes one argument:  o	name (string):
       let candidateObj = this.jobCandidates.find((candidate) => candidate.name == name);

       if(candidateObj == undefined ){
         throw new Error (`${name} is not in the candidates list!`);
       }

       if(candidateObj != undefined){
            if(candidateObj.education == "Bachelor" ){
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
            }
            if(candidateObj.education == "Master"){
               return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
            } 
            if( candidateObj.education != "Master" || candidateObj.education != "Bachelor"  ){
              return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;    
            }
       }
    }

    candidatesDatabase(){
        
        if(this.jobCandidates.length == 0){
          throw new Error (`Candidate Database is empty!`);
        } else {
           let result = ["Candidates list:"];
           this.jobCandidates.sort((a,b)=> a.name.localeCompare(b.name));
           this.jobCandidates.forEach((xCandidate) => result.push(((`${xCandidate.name}-${xCandidate.yearsExperience}`).trim())));
           return result.join('\n').trim();
        }
    }

    // TO DO ....
}

