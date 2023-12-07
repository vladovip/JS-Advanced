window.addEventListener('load', solve);


function solve() {
 
    let carModelElement = document.querySelector("input#car-model");
    let carYearElement = document.querySelector("input#car-year");
    let partNameElement = document.querySelector("input#part-name");
    let partNumberElement = document.querySelector("input#part-number");
    let conditionElement = document.querySelector("select#condition");
    let nextButtonElement = document.querySelector("button#next-btn");
    let infoSectionListElement = document.querySelector("section#part-info");
    let infoULListElement = document.querySelector("ul.info-list");
    let sectionConfrimOrderElement = document.querySelector("section#confirm-order");
    let ulConfirmList = document.querySelector("ul.confirm-list");
    let sectionCompleteOrderElement = document.querySelector("section#complete-order");
    nextButtonElement.addEventListener("click", addToPartInfo );
    let imgElementComplete = document.querySelector("img#complete-img");
    let pCompleteText = document.querySelector("p#complete-text");

    
    function addToPartInfo (event){
       event.preventDefault();
       // take the inputs:
       let carModel = carModelElement.value; 
       let year = carYearElement.value; 
       let part = partNameElement.value; 
       let currentPartNumber = partNumberElement.value;
       let currentCondition = conditionElement.value; 
       // input validation: \
       year = Number(year);
       if( carModel == "" || year < 1980 || year > 2023 || part == "" || currentPartNumber == "" || currentCondition== "" ){
       return;
       }
      // clear input fields:
      carModelElement.value = "";
      carYearElement.value =  "";
      partNameElement.value = "";
      partNumberElement.value = "";
      conditionElement.value= "";
      // the ["Next"] button should be disabled 
       nextButtonElement.disabled = true;

      // create List element  and adding it to the ".info-list" unordered list. 
      let liElementInfo = document.createElement("li");
      liElementInfo.classList.add("part-content");
      let articleElement = document.createElement("article");
      let pCar = document.createElement("p");
      pCar.textContent = `Car Model: ${carModel}`;
      let pYear = document.createElement("p");
      pYear.textContent = `Car Year: ${year}`;
      let pPartName = document.createElement("p");
      pPartName.textContent = `Part Name: ${part}`;
      let pPartNumber = document.createElement("p");
      pPartNumber.textContent = `Part Number: ${currentPartNumber}`;
      let pCondition = document.createElement("p");
      pCondition.textContent = `Condition: ${currentCondition}`;
      articleElement.appendChild(pCar);
      articleElement.appendChild(pYear);
      articleElement.appendChild(pPartName);
      articleElement.appendChild(pPartNumber);
      articleElement.appendChild(pCondition);
      liElementInfo.appendChild(articleElement);
      // create edit  and continue button and append to list element:
      let editBtn = document.createElement('button');
      editBtn.classList.add("edit-btn");
      editBtn.textContent= "Edit";
      editBtn.addEventListener("click", editPartInformation);
      liElementInfo.appendChild(editBtn);
      let continueBtn = document.createElement('button');
      continueBtn.classList.add("continue-btn");
      continueBtn.textContent = "Continue";
      continueBtn.addEventListener("click", continuePartInformation);
      liElementInfo.appendChild(continueBtn);
      
      // append li element info to UL list with class="info-list":
      infoULListElement.appendChild(liElementInfo);
     
      //Change the visibility property of the image element with the ID "complete-img" to "hidden".
      imgElementComplete.style.visibility = "hidden";
     //Change the text content of the paragraph element with the ID "complete-text" to an empty string. 
      pCompleteText.textContent = "";

      // edit Button functionality:
      function editPartInformation (event){
        event.preventDefault();
        let clickedEditBtn = event.currentTarget;
        // delete li element from Part info
        clickedEditBtn.parentElement.remove();
        // return the inputs in the fields of Search Part
        carModelElement.value = carModel;
        carYearElement.value =  year;
        partNameElement.value = part;
        partNumberElement.value = currentPartNumber;
        conditionElement.value = currentCondition;

        // next button is enabled again:
        nextButtonElement.disabled = false;

      }

       // continue Button functionality
      function continuePartInformation(event){
          event.preventDefault();
         // remove list from Part Info Section add it to the Confirm Order Section 
        let clickedContinueBtn = event.currentTarget;
        let currentPartList = clickedContinueBtn.parentElement;
        currentPartList.querySelector("button.continue-btn").remove();
        currentPartList.querySelector("button.edit-btn").remove();
        currentPartList.remove();
       

        // create confirm and cancel buttons and append them to ulConfirmList
        let confirmBtnElement = document.createElement("button");
        confirmBtnElement.classList.add("confirm-btn");
        confirmBtnElement.textContent= "Confirm";
        confirmBtnElement.addEventListener("click", confirmPartInfo);

        let cancelBtnElement = document.createElement("button");
        cancelBtnElement.classList.add("cancel-btn");
        cancelBtnElement.textContent= "Cancel";
        cancelBtnElement.addEventListener("click", cancelPartInfo);

        currentPartList.appendChild(confirmBtnElement);
        currentPartList.appendChild(cancelBtnElement);
        ulConfirmList.appendChild(currentPartList);
      }

      function confirmPartInfo (event){
          event.preventDefault();
          let clickedConfirmBtn = event.currentTarget;
          let listPartInfo = clickedConfirmBtn.parentElement;
          listPartInfo.remove();
          nextButtonElement.disabled = false;
          imgElementComplete.style.visibility = "visible";
          pCompleteText.textContent = "Part is Ordered!";
      }

      function cancelPartInfo (event){
        event.preventDefault();
        let cancelBtn = event.currentTarget;
        cancelBtn.parentElement.remove();
        nextButtonElement.disabled = false;
     }

    } 

}


    
    
