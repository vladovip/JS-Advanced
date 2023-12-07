class RefurbishedSmartphones {
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
}

addSmartphone(model, storage, price, condition){
    if(model !== '' 
    && Number.isInteger(storage) 
    && storage >= 0
    && price >= 0
    && condition !== ''){
        this.availableSmartphones.push({
            model,
            storage,
            price,
            condition
        })
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    } else {
        throw new Error("Invalid smartphone!")
    }

}

sellSmartphone(model, desiredStorage){
    if(!this.availableSmartphones.find(el => el.model === model)){
        throw new Error(`${model} was not found!`)
    } else {
        let found = this.availableSmartphones.find(el => el.model === model)
        if(found.storage >= desiredStorage){
            
        } else if(desiredStorage - found.storage <= 128){
            found.price = found.price * 0.9;
            
        } else {
            found.price = found.price * 0.8;
        }
        this.revenue += found.price;
        let index = this.availableSmartphones.indexOf(found);
        this.availableSmartphones.splice(index, 1);
       this.soldSmartphones.push({
        model,
        storage: found.storage,
        soldPrice: found.price
       })
       
       
        return `${model} was sold for ${found.price.toFixed(2)}$`
    }
}

upgradePhones(){
    if(this.availableSmartphones.length === 0){
        throw new Error (`There are no available smartphones!`)
    } else {
        let result = 'Upgraded Smartphones:';
        for(let el of this.availableSmartphones){
            el.storage = el.storage * 2;
            result += `\n${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$`
        }
        return result
        
    } 
    
}

salesJournal(criteria) {
    
    if(criteria !== "storage" && criteria !== 'model'){
        throw new Error(`Invalid criteria!`)
    } else if(criteria === 'storage'){
        this.soldSmartphones.sort((a,b) => b.storage - a.storage);
        
    } else if(criteria === 'model'){
        this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model))
        
    }
    let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:`
    for(let el of this.soldSmartphones){
        result+= `\n${el.model} / ${el.storage} GB / ${el.soldPrice.toFixed(2)}$`
    }
    return result;
}
}