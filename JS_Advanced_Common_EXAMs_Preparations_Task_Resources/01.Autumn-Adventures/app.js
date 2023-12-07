window.addEventListener('load', solve);

function solve() {

    let timeElement = document.querySelector("input#time");
    let dateElement = document.querySelector("input#date");
    let placeElement = document.querySelector("input#place");
    let eventNameElement = document.querySelector("input#event-name");
    let contactsElement = document.querySelector("input#email");
    let addButtonInfo = document.querySelector("input#add-btn");

    let ulUpcomingElement = document.querySelector("ul#upcoming-list");
    let ulLastCheckListElement = document.querySelector("ul#check-list");
    let ulFinishedElement = document.querySelector("ul#finished-list");
    let buttonCLear = document.querySelector("button#clear");
    

    addButtonInfo.addEventListener("click", addEventAutumn);

    function addEventAutumn (event){
    event.preventDefault();
     
    let time = timeElement.value; 
    let date = dateElement.value;
    let place = placeElement.value;
    let eventName = eventNameElement.value;
    let email = contactsElement.value;
    
    if( time =="" || date =="" || place =="" || eventName == "" || email == "" ){
    return;
    }
    // clear the inputs fields:
    timeElement.value = ""; 
    dateElement.value = "";
    placeElement.value = "";
    eventNameElement.value = "";
    contactsElement.value = "";
    // add button is disabled :
    addButtonInfo.disabled = true;
    // creating li and buttons and append them to Ul Check List 
     let liELement = document.createElement("li");
     liELement.classList.add("event-content");
     let articleElement = document.createElement("article");
     let pTimeDate = document.createElement("p");
     pTimeDate.textContent = `Begins: ${date} at: ${time}`;
     let pPlace = document.createElement("p");
     pPlace.textContent = `In: ${place}`;
     let pEvent = document.createElement("p");
     pEvent.textContent = `Event: ${eventName}`;
     let pContacts = document.createElement("p");
     pContacts.textContent = `Contact: ${email}`;
     // append p to article
     articleElement.appendChild(pTimeDate);
     articleElement.appendChild(pPlace);
     articleElement.appendChild(pEvent);
     articleElement.appendChild(pContacts);
     // append article to liElement
     liELement.appendChild(articleElement);

     //create edit and contine btns 
     let editButton = document.createElement("button");
     editButton.classList.add("edit-btn");
     editButton.textContent = "Edit";
     editButton.addEventListener("click", editInformation);

     let continueButton = document.createElement("button");
     continueButton.classList.add("continue-btn");
     continueButton.textContent = "Continue";
     continueButton.addEventListener("click", continueWithInformation);
     liELement.appendChild(editButton);
     liELement.appendChild(continueButton);

     // append li to  ulLastCheckListElement
     ulLastCheckListElement.appendChild(liELement);



     function editInformation (event) {
     event.preventDefault();
     let clickedEditBtn = event.currentTarget;
     let listInfo = clickedEditBtn.parentNode;
     // the information is loaded in to the input fields 
     timeElement.value = time; 
     dateElement.value = date;
     placeElement.value = place;
     eventNameElement.value = eventName;
     contactsElement.value = email;
     // remove buttons : 
     listInfo.querySelector("button.edit-btn").remove();
     listInfo.querySelector("button.continue-btn").remove();
     listInfo.remove();
     // ["Add Event"] button is enabled again.
     addButtonInfo.disabled = false;
     }


     function continueWithInformation (event) {
     event.preventDefault();
     let clickedContinueBtn = event.currentTarget;
     let listInfoElement = clickedContinueBtn.parentNode;
     // remove edit and continue buttons
     listInfoElement.querySelector("button.edit-btn").remove();
     listInfoElement.querySelector("button.continue-btn").remove();
     listInfoElement.remove();
     // The "Move to Finished" buttons must be added 
    let MoveToFinishButton = document.createElement("button");
    MoveToFinishButton.classList.add("finished-btn");
    MoveToFinishButton.textContent = `Move to Finished`;
    MoveToFinishButton.addEventListener("click", moveToFinishFn);
    listInfoElement.appendChild(MoveToFinishButton);
    ulUpcomingElement.appendChild(listInfoElement);
    //the ["Add Event"] button is enabled again.
    addButtonInfo.disabled = false;
     
    }


    function moveToFinishFn (event){
    event.preventDefault();
    let clickedBtnMoveToFinish = event.currentTarget;
    let listInfo = clickedBtnMoveToFinish.parentNode;
    // The "Move to Finished” button must be removed. 
    listInfo.querySelector("button.finished-btn").remove();
    listInfo.remove();
    ulFinishedElement.appendChild(listInfo);
    }
    

    buttonCLear.addEventListener("click", clearInfoAdventure);
    function clearInfoAdventure (event) {
        event.preventDefault();
        Array.from(ulFinishedElement.children).forEach((x) => x.remove());
    }
 
    }



}


    
    
