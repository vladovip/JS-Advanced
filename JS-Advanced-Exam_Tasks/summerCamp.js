class SummerCamp {
    constructor(organizer, location) {
      this.organizer = organizer;
      this.location = location;
      this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
      this.listOfParticipants = [];
    }
  
    registerParticipant(name, condition, money) {
      let conditionTypes = Object.keys(this.priceForTheCamp).findIndex((p) => p == condition);
  
      if (conditionTypes == -1) {
        throw new Error("Unsuccessful registration at the camp.");
      }
      let alreadyParticipating = this.listOfParticipants.findIndex((p) => p == name);
  
      if (alreadyParticipating !== -1) {
        return `The ${name} is already registered at the camp.`
      }
  
      if (this.priceForTheCamp[condition] > Number(money)) {
        return `The money is not enough to pay the stay at the camp.`;
      }
  
      let participant = {
        name,
        condition,
        power: 100,
        wins: 0,
      };
  
      this.listOfParticipants.push(participant);
  
      return `The ${name} was successfully registered.`;
    }
  
    unregisterParticipant(name) {
      const participantIndex = this.listOfParticipants.findIndex((p) => p.name == name);
  
      if (participantIndex == -1) {
        throw new Error(`The ${name} is not registered in the camp.`);
      }
  
      this.listOfParticipants.splice(participantIndex, 1);
      return `The ${name} removed successfully.`;
    }
  
    timeToPlay(typeOfGame, participant1, participant2) {
      if (typeOfGame == "Battleship") {
        const participantIndex1 = this.listOfParticipants.findIndex((p) => p.name == participant1);
  
        if (participantIndex1 == -1) {
          throw new Error(`Invalid entered name/s.`);
        }
  
        this.listOfParticipants[participantIndex1].power += 20;
  
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
      }
  
      if (typeOfGame === "WaterBalloonFights") {
        const participantIndex1 = this.listOfParticipants.findIndex((p) => p.name == participant1);
        const participantIndex2 = this.listOfParticipants.findIndex((p) => p.name == participant2);
  
        if (participantIndex1 == -1 || participantIndex2 == -1) {
          throw new Error(`Invalid entered name/s.`);
        }
        if (this.listOfParticipants[participantIndex1].condition !== this.listOfParticipants[participantIndex2].condition) {
          throw new Error(`Choose players with equal condition.`);
        } else {
          if (this.listOfParticipants[participantIndex1].power > this.listOfParticipants[participantIndex2].power) {
            this.listOfParticipants[participantIndex1].wins += 1;
            return `The ${this.listOfParticipants[participantIndex1].name} is winner in the game ${typeOfGame}.`;
          } else if (this.listOfParticipants[participantIndex1].power < this.listOfParticipants[participantIndex2].power) {
            this.listOfParticipants[participantIndex2].wins += 1;
            return `The ${this.listOfParticipants[participantIndex2].name} is winner in the game ${typeOfGame}.`;
          } else {
            return `There is no winner.`;
          }
        }
      }
    }
  
    toString() {
      let location = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
      if (this.listOfParticipants.length !== 0) {
        location += "\n";
      }
      let participants = "";
      let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
  
      for (const participant of sorted) {
        participants += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
      }
  
      return location + participants.slice(0, -1);
    }
  }