window.addEventListener('load', solve);
// 100 / 100 points in judge 
function solve() {

    let nameElement = document.querySelector('form #name');
    let emailElement = document.querySelector('form #email');
    let contactNumberElement = document.querySelector('form #contact-number');
    let classTypeElement = document.querySelector("form #class-type");
    let classTimeElement = document.querySelector("form #class-time");
    let nextBtnElement = document.querySelector("form #next-btn");
    nextBtnElement.addEventListener("click", nextFn);

    let previewSectionElement = document.querySelector("#preview-section");
    let confrimSectionElement = document.querySelector("#confirm-section");
    let ulClassInfoElement = document.querySelector("ul.class-info");
    let ulClassConfrimElement = document.querySelector("ul.confirm-class");
    
    function nextFn(event) {
        event.preventDefault();

        let name = nameElement.value;
        let email = emailElement.value;
        let contactNumber = contactNumberElement.value;
        let currentClass = classTypeElement.value;
        let currentTime = classTimeElement.value;

     if( name == "" || email == "" || contactNumber == ""|| currentClass==""|| currentTime == ""){
        return;
     }

        // clear the input fields
        nameElement.value = "";
        emailElement.value = "";
        contactNumberElement.value = "";
        classTypeElement.value= "";
        classTimeElement.value = "";
        // Next btn is deactivated
        nextBtnElement.disabled = true;
     
        // creating li element with its children
        let liElement = document.createElement("li");
        liElement.classList.add("info-item");
        let articleElement = document.createElement("article");
        articleElement.classList.add("personal-info");
        let pName = document.createElement("p");
        pName.textContent = name;
        let pMail = document.createElement("p");
        pMail.textContent = email;
        let pNumber = document.createElement("p");
        pNumber.textContent = contactNumber;
        let pClass = document.createElement("p");
        pClass.textContent = currentClass;
        let pTime = document.createElement("p");
        pTime.textContent = currentTime;
        // append p to the article
        articleElement.appendChild(pName);
        articleElement.appendChild(pMail);
        articleElement.appendChild(pNumber);
        articleElement.appendChild(pClass);
        articleElement.appendChild(pTime);

        // append article to list 
        liElement.appendChild(articleElement);

        // creating edit and continue button and append to list
        let editButton = document.createElement('button');
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editFn);
        liElement.appendChild(editButton);
        let continueButton = document.createElement('button');
        continueButton.classList.add("continue-btn");
        continueButton.textContent = "Continue";
        continueButton.addEventListener("click", continueFn);
        liElement.appendChild(continueButton);
       
        // append liElement to the preview section -> ul class info
        ulClassInfoElement.appendChild(liElement);
        
        function editFn (event){
            event.preventDefault();
            let editClickedElement = event.currentTarget;
            editClickedElement.parentElement.remove();
            nextBtnElement.disabled = false;
            nameElement.value = name;
            emailElement.value = email;
            contactNumberElement.value = contactNumber;
            classTypeElement.value = currentClass;
            classTimeElement.value = currentTime;
        }

        function continueFn (event){
            event.preventDefault();
            let clickedContinueBtn = event.currentTarget;
            let currentLiElement = clickedContinueBtn.parentElement;
            currentLiElement.querySelector("button.edit-btn").remove();
            currentLiElement.querySelector("button.continue-btn").remove();
            currentLiElement.remove();
            ulClassConfrimElement.appendChild(currentLiElement);

            // create Btns  Confirm and Cancel and append to LiElement
            let cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.classList.add("cancel-btn");
            cancelButton.addEventListener("click", cancelFN);
            currentLiElement.appendChild(cancelButton);
            
            let confirmButton = document.createElement("button");
            confirmButton.textContent = "Confirm";
            confirmButton.classList.add("confirm-btn");
            confirmButton.addEventListener("click", confirmFN);
            currentLiElement.appendChild(confirmButton);

          
         }

         function confirmFN (event){
           event.preventDefault();
           let divElementMain = document.querySelector("body div#main");
           // the <div> element with id="main" must be removed
           divElementMain.remove();
           // add <h1> element with id="thank-you"  and append it to the body
           let h1Element = document.createElement("h1");
           h1Element.id = "thank-you";
           h1Element.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
           // add <button> with id="done-btn" and text "Done".
           let btnDone = document.createElement("button");
           btnDone.id = "done-btn";
           btnDone.textContent = "Done";
           btnDone.addEventListener("click", reloadPageFN);
           document.getElementById("body").appendChild(h1Element);
           document.getElementById("body").appendChild(btnDone);
         }

         function cancelFN (event){
            event.preventDefault();
            let clickedElement = event.currentTarget;
            let currentListElement = clickedElement.parentElement;
            currentListElement.remove();
            nextBtnElement.disabled = false;
        }

        function reloadPageFN (event){
            event.preventDefault();
            window.location.reload();
        }

    }
   
}
