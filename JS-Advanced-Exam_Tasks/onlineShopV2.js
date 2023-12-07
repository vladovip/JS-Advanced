class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }
        this.warehouseSpace -= spaceRequired;
 
        this.products.push({ product, quantity });
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
    quantityCheck(product, minimalQuantity) {
        let currProduct = this.products.find((x) => x.product === product);
        if (!currProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity < 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (minimalQuantity <= currProduct.quantity) {
            return `You have enough from product ${product}.`;
        } 
            let difference = minimalQuantity - currProduct.quantity;
            currProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        
    }
    sellProduct(product) {
        let currProduct = this.products.find((x) => x.product === product);
        if (!currProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        currProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }
    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        } else {
            let firstLine = `You sold ${this.sales.length} products today!\n`;
            let secondLine= `Products in warehouse:\n`;
            let result = this.products.map(
                (x) => `${x.product}-${x.quantity} more left\n`
            );
 
            return firstLine + secondLine + result.join('');
        }
    }
}