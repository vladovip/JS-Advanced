
  // 100 points out of 100 in judge...
class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  // The goals property is an object, representing a key-value pair of a peak’s name and its altitude.

     addGoal(peak, altitude) {
     altitude = Number(altitude);
     if(this.goals.hasOwnProperty(peak) == true){
     return `${peak} has already been added to your goals`
     } else {
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
     }
    }

    hike (peak, time, difficultyLevel){
        time = Number(time);
        if(this.goals.hasOwnProperty(peak) == false){
        throw new Error(`${peak} is not in your current goals`) 
        } else if (this.goals.hasOwnProperty(peak) == true) {
            if (this.resources <= 0){
                throw new Error (`You don't have enough resources to start the hike`)
               } else {
                let difference = (this.resources - time*10);
                if(difference < 0){
                 return `You don't have enough resources to complete the hike`
                } else if ( difference >= 0) {
                 this.resources = difference;
                 this.listOfHikes.push({peak, time, difficultyLevel });
                 return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
                } 
               }
        }
    }

    rest (time){
        time = Number(time);
        this.resources += (time*10);
        if(this.resources >=100){
          this.resources = 100;
          return `Your resources are fully recharged. Time for hiking!`  
        } else {
          return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }

    showRecord (criteria){
    // This method returns information based on the criteria. The three possible types of criteria are: "hard", "easy", "all".   
       if(this.listOfHikes.length <= 0){
        return `${this.username} has not done any hiking yet`
       } else {
        
        // return results based on a given criteria: 
        if (criteria == "hard"){
            //find the best hike - the hike with the shortest time. 
           this.listOfHikes.sort((a,b)=> a.time - b.time);
           let hiker = this.listOfHikes.find((h)=> h.difficultyLevel == criteria );
           if(hiker != undefined){
           return `${this.username}'s best ${criteria} hike is ${hiker.peak} peak, for ${hiker.time} hours`
           } else {
            return `${this.username} has not done any ${criteria} hiking yet`
           }
        }
        if (criteria == "easy"){
            //find the best hike - the hike with the shortest time. 
            this.listOfHikes.sort((a,b)=> a.time - b.time);
            let hiker = this.listOfHikes.find((h)=> h.difficultyLevel == criteria );
            if(hiker != undefined){
            return `${this.username}'s best ${criteria} hike is ${hiker.peak} peak, for ${hiker.time} hours`
            } else {
             return `${this.username} has not done any ${criteria} hiking yet`
            }
         }
         if(criteria == "all"){
          let result = [];
          result.push(`All hiking records:`);
          this.listOfHikes.forEach((h) => result.push(`${this.username} hiked ${h.peak} for ${h.time} hours`));
          return result.join("\n");
         }

       }

    }

}
