class InventoryManager {
     constructor (capacity){
       this.capacity = capacity;
       this.items = [];
       this.outOfStock  = [];
     }

     addItem(itemName, quantity) {
      // This method should allow adding items to the inventory. 
      // It accepts two parameters: itemName (string) and quantity (number).
        quantity = Number(quantity);
        if (quantity <= 0 ){
          throw new Error("Quantity must be greater than zero.");
        }
        if(this.items.length == this.capacity){
            throw new Error (`The inventory is already full.`);
        }
        let currentItemObj = this.items.find((x) => x.itemName == itemName);
        if ( currentItemObj != undefined){
            currentItemObj.quantity += quantity;
            return `Added ${quantity} ${itemName}(s) to the inventory.`
        } 
        if(currentItemObj == undefined){
           this.items.push({itemName, quantity});
           return `Added ${quantity} ${itemName}(s) to the inventory.`
        }
     }

     sellItem(itemName, quantity){
        // This method should allow selling items from the inventory;
        // It accepts two parameters: itemName (string) and quantity (number).
         quantity = Number(quantity);
         if(quantity <= 0 ){
            throw new Error(`Quantity must be greater than zero.`);
         }
         let currentItemObj = this.items.find((x) => x.itemName == itemName);
         if( currentItemObj == undefined){
            throw new Error (`The item ${itemName} is not available in the inventory.`);
         }
         if (currentItemObj != undefined){
            if ( quantity > currentItemObj.quantity ){
                throw new Error (`Not enough ${itemName}(s) in stock.`)
            }
            if ( quantity <= currentItemObj.quantity){
                currentItemObj.quantity -= quantity;
                if(currentItemObj.quantity == 0){
                    let indexOfCurrentItem = this.items.indexOf(currentItemObj);
                    this.items.splice(indexOfCurrentItem,1);
                    this.outOfStock.push(itemName);
                }
                return `Sold ${quantity} ${itemName}(s) from the inventory.`
            }
         }  
     }

     restockItem(itemName, quantity){
        //  This method should allow restocking items in the inventory 
        //  It accepts two parameters: itemName (string) and quantity (number).
         quantity = Number(quantity);
        if (quantity <= 0){
            throw new Error (`Quantity must be greater than zero.`);
         }
         let currentItemObj = this.items.find((x)=> x.itemName === itemName);

         if(currentItemObj != undefined){
            currentItemObj.quantity += quantity;
         } else {
            this.items.push({itemName, quantity});
         }
         if( this.outOfStock.includes(itemName) == true){
            let indexOfItemName = this.outOfStock.indexOf(itemName);
            this.outOfStock.splice(indexOfItemName, 1);
         }
         return `Restocked ${quantity} ${itemName}(s) in the inventory.`
             
     }

     getInventorySummary(){
       // •	This method should return a summary of the current inventory.
       // •	The summary should be a string with the following format:
       if ( this.outOfStock.length  == 0){
        let resultArr = ["Current Inventory:"];
        this.items.forEach((x)=> resultArr.push(`${x.itemName}: ${x.quantity}`));
        return resultArr.join("\n");
        
       } else if (this.outOfStock.length > 0){
        let resultArr = ["Current Inventory:"];
        this.items.forEach((x)=> resultArr.push(`${x.itemName}: ${x.quantity}`));
        let outOfStockStr = `Out of Stock: ${this.outOfStock.join(", ")}`;
        resultArr.push(outOfStockStr);
        return resultArr.join("\n");
       }
     }

 }
    