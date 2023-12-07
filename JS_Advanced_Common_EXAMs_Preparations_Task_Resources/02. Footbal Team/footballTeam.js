
// score 100 points out of 100;
class FootballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let nameCollection = [];
    for (let element of footballPlayers) {
      // "{name}/{age}/{playerValue}"
      // Example: ["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"…]
      let [name, age, playerValue] = element.split("/");
      age = Number(age);
      playerValue = Number(playerValue);
      let currentPlayer = this.invitedPlayers.find((x) => x.name == name);
      if (currentPlayer != undefined) {
        if (playerValue > currentPlayer.playerValue) {
          currentPlayer.playerValue = playerValue;
        }
      } else {
        this.invitedPlayers.push({name, age, playerValue});
      }
      if(nameCollection.includes(name) == false) {
        nameCollection.push(name);
      }
    }
    return `You successfully invite ${nameCollection.join(", ")}.` 
  }

  signContract(selectedPlayer){
    // With this method, manager can sign contracts with player from the invited list
    // The method takes one argument: selectedPlayer (string).
    // "{name}/{playerOffer}"
    let [name, playerOffer] = selectedPlayer.split("/");
    playerOffer = Number(playerOffer);
    let searchedPlayer = this.invitedPlayers.find((x) => x.name == name);
    if (searchedPlayer == undefined){
     throw new Error (`${name} is not invited to the selection list!`)
    } 
    if(searchedPlayer != undefined){
        if( playerOffer < searchedPlayer.playerValue ){
        throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${searchedPlayer.playerValue-playerOffer} million more are needed to sign the contract!`)
        } {
            searchedPlayer.playerValue = "Bought";
            return `Congratulations! You sign a contract with ${searchedPlayer.name} for ${playerOffer} million dollars.`
        }

    }
  }

  ageLimit(name, age){
    //With this method, we make sure that the players are young enough to sign a five-year contract with the team
    // , a reduced-time contract, or no contract at all. 
    age = Number(age);
    let searchedPlayer = this.invitedPlayers.find((x) => x.name == name);
    if( searchedPlayer == undefined){
      throw new Error (`${name} is not invited to the selection list!`)
    }
    if( searchedPlayer != undefined) {
        if(searchedPlayer.age < age){
          let differenceAge = age - searchedPlayer.age;
          if( differenceAge < 5){
          return `${name} will sign a contract for ${differenceAge} years with ${this.clubName} in ${this.country}!`
          }
          if (differenceAge > 5){
           return  `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!` 
          }
        }
        if(searchedPlayer.age >= age){
        return `${name} is above age limit!`
        }
    }
  }

  transferWindowResult(){
    let result = [];
    result.push(`Players list:`);
    this.invitedPlayers.sort((a,b) =>  a.name.localeCompare(b.name))
    .forEach((x) => result.push(`Player ${x.name}-${x.playerValue}`));
    return result.join('\n');
  }

}
