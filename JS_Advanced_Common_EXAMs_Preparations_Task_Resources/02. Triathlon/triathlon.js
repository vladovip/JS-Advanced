
// 100 points out of 100 in judge.... 

class Triathlon {
  //TODO: Implement this class…

  constructor (competitionName ){
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = []; 
  }
 // participants property is an object, representing a key-value pair of a participant name and its gender

 addParticipant (participantName, participantGender){
    if (this.participants.hasOwnProperty(participantName) == true){
        return `${participantName} has already been added to the list`
    } else {
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }
 }

 completeness (participantName, condition){
    // •	participantName – a string, condition – a number (0 – 100)
    condition = Number(condition);
    if(this.participants.hasOwnProperty(participantName) == false){
        throw new Error (`${participantName} is not in the current participants list`)
    }
    if(this.participants.hasOwnProperty(participantName) == true){
        if(condition < 30){
            throw new Error (`${participantName} is not well prepared and cannot finish any discipline`)
        }
        let numberDisciplines = Math.trunc(condition / 30);
        if(  numberDisciplines == 1 || numberDisciplines == 2 ){
            return `${participantName} could only complete ${numberDisciplines} of the disciplines`
        } else {
            let participantGender = this.participants[participantName];
            this.listOfFinalists.push({participantName, participantGender });
            delete this.participants[participantName];
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }
 }

 rewarding (participantName){
    // Accept 1 argument: participantName – a string
   let currentPerson = this.listOfFinalists.find((x) => x.participantName == participantName);
   if (currentPerson == undefined){
    return `${participantName} is not in the current finalists list`
   } else {
    return `${participantName} was rewarded with a trophy for his performance`
   }
 }

 showRecord (criteria){
    // Accept 1 argument: •	criteria – a string:
    // The three possible types of criteria are: "male", "female" or "all".
   if ( this.listOfFinalists.length == 0){
    return `There are no finalists in this competition`
   } else {
     if ( criteria == "male" ){
        let competitor = this.listOfFinalists.find((x) => x.participantGender == "male");
        if(competitor == undefined){
            return `There are no ${criteria}'s that finished the competition`
        } else {
            return `${competitor.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
     }
     if ( criteria == "female" ){
        let competitor = this.listOfFinalists.find((x) => x.participantGender == "female");
        if(competitor == undefined){
            return `There are no ${criteria}'s that finished the competition`
        } else {
            return `${competitor.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
     } 
     if(criteria == "all" ){
        let result = [];
        result.push(`List of all ${this.competitionName} finalists:`);
        this.listOfFinalists.sort((a,b) => a.participantName.localeCompare(b.participantName))
        .forEach((x)=> result.push(`${x.participantName}`));
        return result.join('\n');
     }
   }

 }

}
