class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {

    // The method takes 1 argument: vegetables (array of strings).
    // every element is in format : "{type} {quantity} {price}"
    let collectionTypeVegetables = [];
    for (let element of vegetables) {
      let [type, quantity, price] = element.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let currentProduct = this.availableProducts.find((x) => x.type == type);
        if (currentProduct == undefined) {
        this.availableProducts.push({ type, quantity, price });
        collectionTypeVegetables.push(type);
        } else {
        currentProduct.quantity += quantity;
         if( price > currentProduct.price ){
            currentProduct.price = price;
         }
        }
  }
  return `Successfully added ${collectionTypeVegetables.join(", ")}`;
}

  buyingVegetables (selectedProducts){
    // The method takes 1 argument: selectedProducts (array of strings).
    // Every selected element is in format :  "{type} {quantity}"
    let totalPrice = 0;
    for  (let element of selectedProducts ){
        let [selectedItem, selectedQuantity] = element.split(" ");
        selectedQuantity = Number(selectedQuantity);

        let currentProduct = this.availableProducts.find((x) => x.type == selectedItem);
        if ( currentProduct == undefined){
            throw new Error (`${selectedItem} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
        } 
        if(selectedQuantity > currentProduct.quantity){
            throw new Error(`The quantity ${selectedQuantity} for the vegetable ${selectedItem} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
        }
        let currentExpenses = currentProduct.price * selectedQuantity;
        currentProduct.quantity -= selectedQuantity;
        totalPrice += currentExpenses;
    }
      return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }


   rottingVegetable( type, quantity){
   // 2 arguments: type, quantity; 
       quantity = Number(quantity);
       let currentProduct  = this.availableProducts.find((veg) => veg.type == type );
       if (currentProduct == undefined){
          throw new Error (`${type} is not available in the store.`);
       }
       if ( quantity > currentProduct.quantity ){
           currentProduct.quantity = 0;
           return `The entire quantity of the ${type} has been removed.`
       } else {
          currentProduct.quantity -= quantity;
          return `Some quantity of the ${type} has been removed.`
       }
  }


    revision (){
        let resultArr = ["Available vegetables:"];
        this.availableProducts.sort((a,b)=> a.price - b.price);
        this.availableProducts.forEach( (veg) => resultArr.push(`${veg.type}-${veg.quantity}-$${veg.price}`) );
        resultArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return resultArr.join('\n');
    }

}
