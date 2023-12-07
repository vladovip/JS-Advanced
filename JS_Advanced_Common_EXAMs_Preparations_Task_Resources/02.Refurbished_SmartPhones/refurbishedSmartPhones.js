// TO BE REFINED as of now only 58/100...

class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    storage = Number.parseInt(storage);
    price = Number.parseFloat(price);
    if ( model == "" || storage < 0 || price < 0 || condition == "" || Number.isInteger(storage) == false ) {
      throw new Error (`Invalid smartphone!`);
    }
    this.availableSmartphones.push({model, storage, price, condition});
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
  }

  sellSmartphone (model, desiredStorage) {
    // This method should search for a smartphone with the given model in the availableSmartphones array,
    // and then sell it.
    desiredStorage = Number(desiredStorage);
    let searchedSmartphoneObj = this.availableSmartphones.find((x) => x.model == model);

    if(searchedSmartphoneObj == undefined){
       throw new Error (`${model} was not found!`);
    };

    if(searchedSmartphoneObj != undefined ){
      let difference =   searchedSmartphoneObj.storage - desiredStorage;
      let soldPrice;
      let indexSearchedSmartphoneObj = this.availableSmartphones.findIndex((x)=> x.model == model);

      if( searchedSmartphoneObj.storage >= desiredStorage ){
        soldPrice = searchedSmartphoneObj.price;
      } else {
        if (difference <= 128){
          soldPrice = 0.90 * searchedSmartphoneObj.price;
        }
         if (difference > 128){
          soldPrice = 0.80 * searchedSmartphoneObj.price;
        }
      }
          if(indexSearchedSmartphoneObj != -1){
            this.availableSmartphones.splice(indexSearchedSmartphoneObj,1);
          }
       
        let soldPhone = {model, storage:searchedSmartphoneObj.storage, soldPrice};
        this.soldSmartphones.push(soldPhone);
        this.revenue += soldPrice;
        return `${soldPhone.model} was sold for ${(soldPhone.soldPrice).toFixed(2)}$`
    }
  }

  upgradePhones () {

    if ( this.availableSmartphones.length == 0){
        throw new Error (`There are no available smartphones!`);
    } else {
        // let updatedSmartphonesArr = this.availableSmartphones.map((phone) => {
        //     phone.storage  =  phone.storage * 2;
        // });
        let updatedSmartphonesArr = [];
        for ( let phone of this.availableSmartphones){
          phone.storage =  phone.storage *2;
          updatedSmartphonesArr.push(phone);
        }
        this.availableSmartphones = updatedSmartphonesArr;
        let result = [`Upgraded Smartphones:`];
        updatedSmartphonesArr.forEach((x)=> result.push(`${x.model} / ${x.storage} GB / ${x.condition} condition / ${(x.price).toFixed(2)}$`));
        return result.join("\n");
    }
  }

  salesJournal (criteria){

    if (criteria != "storage" || criteria != "model"){
      throw new Error (`Invalid criteria!`);
    }
    if(criteria == "storage"){
       this.soldSmartphones.sort((a,b) =>  b.storage - a.storage );
       let result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:` ]
       this.soldSmartphones.forEach((x)=> result.push(`${x.model} / ${x.storage} GB / ${(x.soldPrice).toFixed(2)}$`));
       return result.join("\n");
    }
    if(criteria == "model"){
       this.soldSmartphones.sort(( a, b) => (a.model).localeCompare(b.model));
       let result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:` ]
       this.soldSmartphones.forEach((x)=> result.push(`${x.model} / ${x.storage} GB / ${(x.soldPrice).toFixed(2)}$`));
       return result.join("\n");
    }
  }

}


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
