window.addEventListener("load", solve);

function solve() {
 // TODO... have fun :)

 let gemNameElement = document.querySelector("input#gem-name");
 let colorElement = document.querySelector("input#color");
 let caratElement = document.querySelector("input#carats");
 let priceElement = document.querySelector("input#price");
 let typeElement = document.querySelector("select#type");
 let addGemBtn = document.querySelector("input#add-btn");
 let ulPreviewElement = document.querySelector("ul#preview-list");
 let ulCollectionElement = document.querySelector("ul#collection");
 addGemBtn.addEventListener("click", addGemFn);

 function addGemFn (event) {
    event.preventDefault();

    let gem = gemNameElement.value; 
    let color = colorElement.value;
    let carat = caratElement.value;
    let price = priceElement.value;
    let type = typeElement.value;
     
    if( gem==""|| color==""|| carat==""|| price==""|| type==""){
        return;
    };

    // clear inputs:
    gemNameElement.value = "";
    colorElement.value  = "";
    caratElement.value  = "";
    priceElement.value  = "";
    typeElement.value   = "";

    // addGemBtn must to be disabled:
    addGemBtn.disabled = true;

    // create liElement and append to ulPreviewElement:
    let liElement = document.createElement("li");
    liElement.classList.add("gem-info");
    let articleElement = document.createElement("article");
    let h4Element = document.createElement("h4");
    h4Element.textContent = gem;
    let pColor = document.createElement("p");
    pColor.textContent = `Color: ${color}`;
    let pCarat = document.createElement("p");
    pCarat.textContent = `Carats: ${carat}`;
    let pPrice = document.createElement("p");
    pPrice.textContent = `Price: ${price}$`;
    let pType = document.createElement("p");
    pType.textContent = `Type: ${type}`;
    articleElement.appendChild(h4Element);
    articleElement.appendChild(pColor);
    articleElement.appendChild(pCarat);
    articleElement.appendChild(pPrice);
    articleElement.appendChild(pType);
    liElement.appendChild(articleElement);
    // save Button
    let saveBtn = document.createElement('button');
    saveBtn.classList.add("save-btn");
    saveBtn.textContent ="Save to Collection";
    saveBtn.addEventListener("click",saveGemInfo);
    liElement.appendChild(saveBtn);
    // edit button
    let editBtn = document.createElement('button');
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Information";
    editBtn.addEventListener("click", editGemInfo);
    liElement.appendChild(editBtn);
    // cancel button :
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", cancelGemInfo);
    liElement.appendChild(cancelBtn);
    
    // append all liElement to ulPreviewElement 
    ulPreviewElement.appendChild(liElement);

    function  editGemInfo ( event){
        event.preventDefault();
        let clickedEditBtn = event.currentTarget;
        gemNameElement.value = gem;
        colorElement.value  = color;
        caratElement.value  = carat;
        priceElement.value  = price;
        typeElement.value   = type;
        addGemBtn.disabled = false;
        clickedEditBtn.parentNode.remove();
    }

    function saveGemInfo ( event){
      event.preventDefault();
      let clickedSaveBtn = event.currentTarget;
      // •	The list item from preview section must be removed 
      clickedSaveBtn.parentNode.remove();
      // the ["Add Gem"] button is enabled again 
      addGemBtn.disabled = false;
      // new list item should be added to the unordered list with id: "collection", 
      let liCollectionElement = document.createElement('li');
      let pCollectionElement = document.createElement("p");
      pCollectionElement.classList.add("collection-item");
      pCollectionElement.textContent = `${gem} - ${pColor.textContent}/ ${pCarat.textContent}/ ${pPrice.textContent}/ ${pType.textContent}`;
      liCollectionElement.appendChild(pCollectionElement);
      ulCollectionElement.appendChild(liCollectionElement);

    }

    function  cancelGemInfo (event){
        event.preventDefault();
        let clickedCancelBtn = event.currentTarget;
        // the list item must be removed from the "preview-list"
        clickedCancelBtn.parentNode.remove();
        // the ["Add Gem"] button is enabled again.
        addGemBtn.disabled = false;
    }
 }
}
