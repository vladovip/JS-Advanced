window.addEventListener("load", solve);

function solve() {

    let firstNameElement = document.querySelector("input#first-name");
    let lastNameElement = document.querySelector("input#last-name");
    let checkInElement = document.querySelector("input#date-in");
    let checkOutElement = document.querySelector("input#date-out");
    let numberGuests = document.querySelector("input#people-count");
    let nextBtnElement = document.querySelector("button#next-btn");
    let ulInfoListReservation = document.querySelector("ul.info-list");
    let ulListConfirmationReservation = document.querySelector("ul.confirm-list");
    let h1Element = document.querySelector("h1#verification");

    nextBtnElement.addEventListener("click", makeReservationFn);

    function makeReservationFn (event){
        event.preventDefault();

        let firstname = firstNameElement.value; 
        let lastname = lastNameElement.value;
        let dateIN = checkInElement.value;
        let dateOUT = checkOutElement.value;
        let guests =  numberGuests.value;
        let date1 = new Date(dateIN).getTime();
        let date2 = new Date(dateOUT).getTime();
        if(firstname == "" || lastname == "" || dateIN== "" || dateOUT==""|| guests==""){
        return;
        }
        // clear the input fields:
        firstNameElement.value = "";
        lastNameElement.value = "";
        checkInElement.value = "";
        checkOutElement.value = "";
        numberGuests.value = "";
        // disabe the nextbutton:
        nextBtnElement.disabled = true;
        // creating ListElement and append to Reservation Info:
       let liElement = document.createElement("li");
       liElement.classList.add("reservation-content");
       let articleElement = document.createElement("article");
       let h3Element = document.createElement("h3");
       h3Element.textContent = `Name: ${firstname} ${lastname}`;
       let pInDate = document.createElement("p");
       pInDate.textContent = `From date: ${dateIN}`;
       let pOutDate = document.createElement("p");
       pOutDate.textContent = `To date: ${dateOUT}`;
       let pGuests = document.createElement("p");
       pGuests.textContent = `For ${guests} people`
       articleElement.appendChild(h3Element);
       articleElement.appendChild(pInDate);
       articleElement.appendChild(pOutDate);
       articleElement.appendChild(pGuests);
       liElement.appendChild(articleElement);
       // create edit and contune button and append to Li:
       let editButton = document.createElement(`button`);
       editButton.classList.add('edit-btn');
       editButton.textContent = 'Edit';
       editButton.addEventListener('click', editHotelReservations);
       editButton.disabled = false;
       let continueButton = document.createElement(`button`);
       continueButton.classList.add('continue-btn');
       continueButton.textContent = 'Continue';
       continueButton.addEventListener('click', continueWithReservations);
       continueButton.disabled = false;
    
       liElement.appendChild(editButton);
       liElement.appendChild(continueButton);
       ulInfoListReservation.appendChild(liElement);



       function editHotelReservations (event){
       event.preventDefault();
       let clickedEditBtn = event.currentTarget;
       // information is loaded back into input fields:
        firstNameElement.value = firstname;
        lastNameElement.value = lastname;
        checkInElement.value =  dateIN;
        checkOutElement.value = dateOUT;
        numberGuests.value = guests;
        // the ["Next"] button is enabled again 
        nextBtnElement.disabled = false;
        // The list items must be removed from the "info-list" 
        let currentList = clickedEditBtn.parentNode;
        currentList.remove();
       }

       function continueWithReservations (event){
        event.preventDefault();
        let clickedContinueBtn = event.currentTarget;
        let currentList  = clickedContinueBtn.parentNode;
        // remove edit and continue buttons:
        currentList.querySelector("button.edit-btn").remove();
        currentList.querySelector("button.continue-btn").remove();
        // create confirm and cancel buttons:
        let confirmButton = document.createElement(`button`);
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', confirmReservation);
        let cancelButton = document.createElement(`button`);
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancelReservations);
        currentList.appendChild(confirmButton);
        currentList.appendChild(cancelButton);
        currentList.remove();
        ulListConfirmationReservation.appendChild(currentList);
       }

       function confirmReservation (event){
         event.preventDefault();
         let clickedConfirmationButton = event.currentTarget;
         let currentList = clickedConfirmationButton.parentNode;
         currentList.remove();
         nextBtnElement.disabled = false;
         h1Element.classList.add("reservation-confirmed");
         h1Element.textContent = `Confirmed.`;
       }

       function cancelReservations (event){
        event.preventDefault();
        let cancelButtonClicked = event.currentTarget;
        let currentList = cancelButtonClicked.parentNode;
        currentList.remove();
        nextBtnElement.disabled = false;
        h1Element.classList.add("reservation-cancelled");
        h1Element.textContent = "Cancelled.";
      }

    }

}
