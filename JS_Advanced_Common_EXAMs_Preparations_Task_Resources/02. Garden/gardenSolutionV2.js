 //  full 100 points reached: 
 
class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    // The plantName is of type string, while the spaceRequired is of type number.
    if (typeof plantName != "string") {
      throw new Error("Plant name must be a string.");
    }
    if (typeof spaceRequired != "number") {
      throw new Error("Required space  must be a number.");
    }

    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }
    let newPlant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };
    this.plants.push(newPlant);
    this.spaceAvailable -= spaceRequired;
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    // The quantity is of type number.
    if (typeof quantity != "number") {
      throw new Error("Quantity must be a number.");
    }
    let searchedPlant = this.plants.find((el) => el.plantName == plantName);

    if (searchedPlant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (searchedPlant.ripe == true) {
      throw new Error(`The ${searchedPlant.plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    searchedPlant.ripe = true;
    searchedPlant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else if (quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {

    let searchedPlant = this.plants.find((el) => el.plantName == plantName);
    if (searchedPlant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);

    } else if (searchedPlant.ripe == false) {
        throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);

    } else {
        let indexOfSearchedPlant = this.plants.findIndex((el) => el.plantName == plantName);
        if(indexOfSearchedPlant != -1) {
                this.plants.splice(indexOfSearchedPlant, 1);
                let harvestedPlant = {
                    plantName,
                    quantity: searchedPlant.quantity,
                  };
                  this.storage.push(harvestedPlant);
                  this.spaceAvailable += searchedPlant.spaceRequired;
                  return `The ${harvestedPlant.plantName} has been successfully harvested.`
        }
    }

  }

  generateReport() {
     let thirdLineOutput = ""; 

     if ( this.storage.length == 0 ){
        thirdLineOutput += `Plants in storage: The storage is empty.`;
     } else {
        let listofPlants = [];
        for (let el of this.storage) {
           let plantInfo = `${el.plantName} ` + `(${el.quantity})`;
           listofPlants.push(plantInfo);
        }
        thirdLineOutput += `Plants in storage: ${listofPlants.join(", ")}`;
     }

    return [
       `The garden has ${this.spaceAvailable } free space left.`,
       `Plants in the garden: ${((this.plants.map((el) => el.plantName)).sort((a, b) => a.localeCompare(b))).join(', ')}`,
       thirdLineOutput,
    ].join("\n"); 
  }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
