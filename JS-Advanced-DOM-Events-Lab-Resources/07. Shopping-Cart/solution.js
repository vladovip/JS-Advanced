function solve() {
    // TO BE REFINED: 
   let textArea = document.querySelector('body > div > textarea');
   let uniqueCollection = [];
   let totalMoneySpend = 0;
   let buttonRefCollection = document.getElementsByClassName("add-product");
   let arrayOfButtons = Array.from(buttonRefCollection);
   
   for (let index = 0; index < arrayOfButtons.length; index++) {
    arrayOfButtons[index].addEventListener("click", function addButtonIsClicked(event){
       let nameOfProduct = event.currentTarget.parentElement.previousElementSibling.firstElementChild.textContent;
       let priceOfProduct = Number(event.currentTarget.parentElement.nextElementSibling.textContent);
       if ( uniqueCollection.includes(nameOfProduct) === false ) {
        uniqueCollection.push(nameOfProduct);
       }
       let currentProductAdded = `Added ${nameOfProduct} for ${priceOfProduct.toFixed(2)} to the cart.\n`;
       totalMoneySpend += Number(priceOfProduct);
       textArea.value += currentProductAdded;
    });
   }
    let checkOutButtonRef  = document.querySelector('body > div > button');
    checkOutButtonRef.addEventListener("click" ,  function summary(){
    let finalResut = `You bought ${uniqueCollection.join(', ')} for ${totalMoneySpend.toFixed(2)}.`;
    textArea.value += finalResut;
    disableAllButtons();
   });

   function disableAllButtons (){
       let allButtonsCollections = Array.from(document.querySelectorAll('button'));
       allButtonsCollections.forEach(el => el.disabled = true);
   }

}


     //    let nameOfProduct = document.querySelector(`body > div > div:nth-child(${index + 2}) > div.product-details > div`).textContent; 
    //    let priceOfProduct = document.querySelector(`body > div > div:nth-child(${index + 2}) > div.product-line-price`).textContent; 