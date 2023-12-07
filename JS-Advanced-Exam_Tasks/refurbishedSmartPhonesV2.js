class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones= [];
        this.revenue = 0;
    }
 
    addSmartphone (model, storage, price, condition) {
        if (typeof model !== 'string' || model.length === 0) {
            throw new Error('Invalid smartphone!');
        }
        if (!Number.isInteger(storage)|| storage < 0) {
            throw new Error('Invalid smartphone!');
        }
        if (typeof price !== 'number' || price < 0) {
            throw new Error('Invalid smartphone!');
        }
        if (typeof condition !== 'string' || condition.length === 0) {
            throw new Error('Invalid smartphone!');
        }
 
        let modelToAdd = {model, storage, price, condition};
        this.availableSmartphones.push(modelToAdd);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }
 
    sellSmartphone(model, desiredStorage) {
        let modelIndex = this.availableSmartphones.findIndex(el => el.model == model);
        if (modelIndex == -1) {
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = this.availableSmartphones[modelIndex].price;
        let deviceStorage = this.availableSmartphones[modelIndex].storage;
        if (deviceStorage >= desiredStorage) {
            soldPrice *= 1;
        }else if (Math.abs(deviceStorage - desiredStorage) <= 128) {
            soldPrice *= 0.9;
        }else {
            soldPrice *= 0.8;
        }
 
        let soldDevice = {
            model,
            storage: deviceStorage,
            soldPrice
        }
        this.soldSmartphones.push(soldDevice);
        this.availableSmartphones.splice(modelIndex, 1);
        this.revenue += Number(soldPrice.toFixed(2));
 
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
 
    upgradePhones () {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }
 
        for (let smartphone of this.availableSmartphones) {
            smartphone.storage *= 2;
        }
 
        let res = ['Upgraded Smartphones:']
        this.availableSmartphones.forEach(el => res.push(`${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$`));
        return res.join('\n')
    }
 
    salesJournal (criteria) {
        if (criteria === 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }else if (criteria === 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }else {
            throw new Error('Invalid Criteria!');
        }
 
        let res = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`, `${this.soldSmartphones.length} smartphones sold:`]
        this.soldSmartphones.forEach(el => res.push(`${el.model} / ${el.storage} GB / ${el.soldPrice.toFixed(2)}$`));
        return res.join('\n');
    }
}