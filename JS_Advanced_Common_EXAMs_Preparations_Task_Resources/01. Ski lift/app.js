window.addEventListener('load', solve);

// 100 / 100 points in judge SoftUni :

function solve() {

 let firstNameElement = document.querySelector("form input#first-name");
 let lastNameElement = document.querySelector("form input#last-name");
 let numberPeopleElement = document.querySelector("form input#people-count");
 let dateElement = document.querySelector("form input#from-date");
 let daysElement = document.querySelector("form input#days-count");
 let nextStepButtonElement = document.querySelector("form button#next-btn");
 let ulTicketPreview = document.querySelector("ul.ticket-info-list");
 let ulConfrimTicket = document.querySelector("ul.confirm-ticket");
 nextStepButtonElement.addEventListener("click", buyTicketFn);

 function buyTicketFn (event){
    event.preventDefault();
    let firstName = firstNameElement.value; 
    let lastName = lastNameElement.value;
    let people = numberPeopleElement.value;
    let date = dateElement.value;
    let days = daysElement.value;
    days = Number(days);
    people = Number(people);

    if(firstName == "" || lastName == "" || people== "" || date== "" || days ==""){
      return;
    }
    // clear the inpputs
    firstNameElement.value = ""; 
    lastNameElement.value = "";
    numberPeopleElement.value = "";
    dateElement.value = "";
    daysElement.value = "";
    // disabling next button 
    nextStepButtonElement.disabled = true;

    // create a list Information and append to ul.ticket-info-list:
    let liElement = document.createElement("li");
    liElement.classList.add("ticket");
    let articleElement = document.createElement("article");
    let h3Element = document.createElement("h3");
    h3Element.textContent = `Name: ${firstName} ${lastName}`;
    let pDate = document.createElement("p");
    pDate.textContent = `From date: ${date}`;
    let pDays = document.createElement("p");
    pDays.textContent = `For ${days} days`;
    let pPeople = document.createElement("p");
    pPeople.textContent = `For ${people} people`;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(pDate);
    articleElement.appendChild(pDays);
    articleElement.appendChild(pPeople);
    liElement.appendChild(articleElement);
    //create 2 buttons and append them to the list:
    let editButton = document.createElement('button');
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editInfoTicketFn);
    let continueButton = document.createElement('button');
    continueButton.classList.add("continue-btn");
    continueButton.textContent = "Continue";
    continueButton.addEventListener("click", proceedToConfirmFn);
    liElement.appendChild(editButton);
    liElement.appendChild(continueButton);
    // append created Li element to the ul Preview list:
    ulTicketPreview.appendChild(liElement);

     // inner functions 
    function editInfoTicketFn (event) {
    event.preventDefault();
    let clickedEditBtn = event.currentTarget;
    // all of the information is loaded in the input fields from step 1 
    firstNameElement.value = firstName; 
    lastNameElement.value = lastName;
    numberPeopleElement.value = people;
    dateElement.value = date;
    daysElement.value  = days;
    // the ["Next step"] button is enabled again.
    nextStepButtonElement.disabled = false;
    clickedEditBtn.parentNode.remove();
   }
 }


 function proceedToConfirmFn (event) {
    event.preventDefault();
    let continueBtnClicked = event.currentTarget;
    let currentLiElement = continueBtnClicked.parentNode;
    let confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm-btn");
    confirmButton.textContent = `Confirm`;
    confirmButton.addEventListener("click", confirmTicketBookingFn);
    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-btn");
    cancelButton.textContent = `Cancel`;
    cancelButton.addEventListener("click", cancelticketBookingFn);

    // delete edit and continue buttons 
    currentLiElement.querySelector("button.edit-btn").remove();
    currentLiElement.querySelector("button.continue-btn").remove();

   // remove list element from Ul preview list: 
    currentLiElement.remove();

    // append the confirmBtn and and cancelButton to the ticketList:
    currentLiElement.appendChild(confirmButton);
    currentLiElement.appendChild(cancelButton);
   // append the adjusted list element to ul confirm list 
    ulConfrimTicket.appendChild(currentLiElement);
  }
  

  function confirmTicketBookingFn(event){
   event.preventDefault();
   
    // the <div> element with id="main" must be removed
   let mainDiv = document.querySelector("div#main");
   mainDiv.remove();
   // add <h1> and  <button> with id="back-btn"  to the body
   let h1Element = document.createElement("h1");
   h1Element.id = "thank-you";
   h1Element.textContent = `Thank you, have a nice day!`
   let backBtn = document.createElement("button");
   backBtn.id = "back-btn";
   backBtn.textContent = "Back";
   backBtn.addEventListener("click", reloadPageFn);
   document.querySelector("body#body").appendChild(h1Element);
   document.querySelector("body#body").appendChild(backBtn);
  }

  function cancelticketBookingFn(event){
   event.preventDefault();
   let clickedCancelBtn = event.currentTarget;
   // the list item must be removed, from the "confirm-ticket", 
   clickedCancelBtn.parentNode.remove();
   // the ["Next step"] button is enabled again.
   nextStepButtonElement.disabled = false;

  }

  function reloadPageFn(event){
   event.preventDefault();
   window.location.reload();
  }
   
   
}


    
    
