// 100 points / 100  in judge 

class WineSelection {
  // TO DO
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }
  reserveABottle (wineName, wineType, price){
    // The wineName and wineType are of type string and price is type number. 
    price = Number (price);
    if (this.wines.length  >= this.space ){
       throw new Error(`Not enough space in the cellar.`);
    }
    if(this.wines.length  < this.space){
        this.wines.push({wineName, wineType, price, paid:false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
  }

  payWineBottle( wineName, price ) {
    // The wineName is type string and price is type number.
    price = Number( price );
    let currentBottle = this.wines.find((w) => w.wineName == wineName);
    if(currentBottle == undefined){
    throw new Error (`${wineName} is not in the cellar.`);
    }
    if(currentBottle != undefined){
      if(currentBottle.paid == true ){
       throw new Error (`${currentBottle.wineName} has already been paid.`);
      } else {
        currentBottle.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
      }
    }
  }

  openBottle(wineName) {
    let currentBottle = this.wines.find((w) => w.wineName == wineName);
    if(currentBottle == undefined){
     throw new Error (`The wine, you're looking for, is not found.`);
    }
    if(currentBottle != undefined ){
      if(currentBottle.paid == false){
        throw new Error (`${currentBottle.wineName} need to be paid before open the bottle.`)
      }
      let indexBottleWine = this.wines.indexOf(currentBottle);
      if(indexBottleWine != -1){
        this.wines.splice(indexBottleWine, 1);
        return `You drank a bottle of ${currentBottle.wineName}.`
      }
    }
  }

  cellarRevision(wineType) {
    // To check if a parameter is provided to a function, use the strict inequality 
    // (!==) operator to compare the parameter to undefined . 
    // If the comparison returns true , then the parameter was provided to the function.
  
    if(wineType === undefined){
      let result = [];
      let emptySlots = this.space - this.wines.length;
      result.push(`You have space for ${emptySlots} bottles more.`);
      result.push(`You paid ${this.bill}$ for the wine.`);
      (this.wines.sort((a,b)=> (a.wineName).localeCompare(b.wineName)))
      .forEach((x)=> result.push(`${x.wineName} > ${x.wineType} - ${x.paid == true ? "Has Paid":"Not Paid"}.`));
      return result.join("\n");
    }
    if(wineType !== undefined){
      let currentBottle = this.wines.find((w) => w.wineType == wineType);
      if(currentBottle != undefined){
       return `${currentBottle.wineName} > ${currentBottle.wineType} - ${currentBottle.paid == true ?`Has Paid`:`Not Paid`}.`
      }
      if(currentBottle == undefined){
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    }
  }
}

