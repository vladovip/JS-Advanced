class footballTeam {
  constructor(clubname, country) {
    this.clubname = clubname;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let obj = {};
    let players = [];
    for (let i = 0; i < footballPlayers.length; i++) {
      let [name, age, playerValue] = footballPlayers[i].split("/");
      playerValue = Number(playerValue);
      if (!this.invitedPlayers.includes(this.invitedPlayers[name])) {
        this.invitedPlayers.push({ name, age, playerValue });
        if (!players.includes(name)) {
          players.push(name);
        }
      } else if (this.invitedPlayers[playerValue] < playerValue) {
        this.invitedPlayers[playerValue] = playerValue;
      }
    }

    return `You successfully invite ${players.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [nameOfPlayer, playerOffer] = selectedPlayer.split("/");
    playerOffer = Number(playerOffer);

    const currentPlayer = this.invitedPlayers.find(
      ({ name }) => name === nameOfPlayer
    );

    if (currentPlayer === undefined) {
      throw new Error(`${nameOfPlayer} is not invited to the selection list!`);
    }

    let value = currentPlayer.playerValue;

    if (playerOffer < value) {
      let diff = Number(value - playerOffer);
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${currentPlayer.name}, ${diff} million more are needed to sign the contract!`
      );
    } else {
      currentPlayer.playerValue = "Bought";
      return `Congratulations! You sign a contract with ${nameOfPlayer} for ${playerOffer} million dollars.`;
    }
  }
  ageLimit(name, age) {
    let nameOfPlayer = name;
    let ageOfPlayer = Number(age);

    const currentPlayer = this.invitedPlayers.find(
      ({ name }) => name === nameOfPlayer
    );

    if (currentPlayer === undefined) {
      throw new Error(`${nameOfPlayer} is not invited to the selection list!`);
    }

    if (currentPlayer.age < ageOfPlayer) {
      let diff = ageOfPlayer - currentPlayer.age;
      if (diff < 5) {
        return `${nameOfPlayer} will sign a contract for ${diff} years with ${this.clubname} in ${this.country}!`;
      } else if (diff) {
        return `${nameOfPlayer} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else if (currentPlayer.age >= ageOfPlayer) {
      return `${nameOfPlayer} is above age limit!`;
    }
  }
  transferWindowResult() {}
}
