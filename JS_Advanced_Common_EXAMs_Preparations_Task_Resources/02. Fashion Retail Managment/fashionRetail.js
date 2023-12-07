class FashionRetailInventory {

    // •	storehouse  (string);
    // •	location  (string);
    // •	productStock   (empty array);
    
    constructor (storehouse, location ) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price){
        quantity = Number(quantity);
        price = Number(price);

        let searchedProduct =  this.productStock.find((x) => x.productName == productName && x.size == size );
        if(searchedProduct != undefined ){
            searchedProduct.quantity += quantity;
                return `You added ${quantity} more pieces of product ${searchedProduct.productName} size ${searchedProduct.size}`;
        } else {
          this.productStock.push({productName, size, quantity, price});
          return `The product ${productName}, size ${size} was successfully added to the inventory`
        }

    }

    sendProduct (productName, size) {
        // This method allows the sending of a product from the store's inventory. 
        let searchedProduct = this.productStock.find((x)=> x.productName == productName && x.size == size);

        if(searchedProduct == undefined){
          throw new Error( `The product ${productName}, size ${size} is not in the inventory`);
        } else {
            let indexProductRemoved = this.productStock.findIndex((x)=> x.productName == productName && x.size == size);
            if(indexProductRemoved != -1){
             this.productStock.splice(indexProductRemoved, 1);
             return `The product ${productName}, size ${size} was successfully removed from the inventory`
        }
      }
    }
        
          

    findProductsBySize(size){

        let searchedProduct = this.productStock.find((x)=> x.size == size);

        if(searchedProduct == undefined){
            return `There are no products available in that size`
        } else {
        let collectionProducts = {};
        let resultArr = [];
        for ( let el of  this.productStock){
            if ( el.size == size){
                collectionProducts[el.productName] = el.quantity;
            }  
        } 
        for ( let [p, q] of Object.entries(collectionProducts)){
            resultArr.push(`${p}-${q} pieces`);
        }
        return resultArr.join(", ");
        }
    }

    listProducts () {

        if( this.productStock.length == 0){
         return `${this.storehouse} storehouse is empty`
        } else {
            let result = [];
            result.push(`${this.storehouse} storehouse in ${this.location} available products:`);
           let sorted =   this.productStock.sort((a, b) => (a.productName).localeCompare(b.productName));
            sorted.forEach((x) => result.push(`${x.productName}/Size:${x.size}/Quantity:${x.quantity}/Price:${x.price}$`));
            return result.join("\n");
        }

    }
}
