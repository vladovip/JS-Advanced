 // 100 points out of 100 in judge;
 
class OnlineShop {
	//TODO Implement this class
    constructor(warehouseSpace ) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired){
    // The product is of type string, while the spaceRequired and quantity are of type number. 
    quantity = Number(quantity);
    spaceRequired = Number(spaceRequired);

     if ( spaceRequired > this.warehouseSpace){
       throw new Error (`Not enough space in the warehouse.`);
     } else {
        this.products.push({product, quantity});
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
     }
    }

    quantityCheck(product, minimalQuantity){

        minimalQuantity = Number(minimalQuantity);
        let currentProduct = this.products.find((x) => x.product == product);
        if(currentProduct == undefined){
         throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0){
        throw new Error(`The quantity cannot be zero or negative.`);
        }
        if(currentProduct != undefined){
            if( minimalQuantity <= currentProduct.quantity){
             return `You have enough from product ${product}.`
            } else {
                let difference =  minimalQuantity - currentProduct.quantity;
                currentProduct.quantity = minimalQuantity;
                return `You added ${difference} more from the ${product} products.`
            }
        }
    }

    sellProduct(product) {

        let currentProduct = this.products.find((x) => x.product == product);
        if ( currentProduct == undefined){
            throw new Error (`There is no ${product} in the warehouse.`);
        } else {
            currentProduct.quantity -= 1;
            this.sales.push({product, quantity: 1});
            return `The ${product} has been successfully sold.`
        }
    }

    revision() {

        if( this.sales.length == 0 ) {
        throw new Error (`There are no sales today!`);
        } else {
          let totalSales = this.sales.length;
          let result = [];
          result.push(`You sold ${totalSales} products today!`);
          result.push(`Products in the warehouse:`);
          this.products.forEach((x) => result.push(`${x.product}-${x.quantity} more left`)  )
          return result.join("\n");
        }

    }

}
