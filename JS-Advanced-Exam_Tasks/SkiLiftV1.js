function solve() {
    // 1. select all DOM elements
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let peopleCount = document.getElementById('people-count');
    let fromDate = document.getElementById('from-date');
    let daysCount = document.getElementById('days-count');
   
    let ticketInfo = document.querySelector('.ticket-info-list');
    let confirmTicket = document.querySelector('.confirm-ticket');
    
 
    let nextStepsBtn = document.getElementById('next-btn');
    nextStepsBtn.addEventListener('click', nextStepsHandler);
 
    // 2. implement nextSteps logic
    function nextStepsHandler(e){
         e.preventDefault();
         debugger;
         let fName = firstName.value;
         let lName = lastName.value;
         let pCount = peopleCount.value;
         let fDate = fromDate.value;
         let dCount = daysCount.value;
 
         if(fName === "" || lName  === "" || pCount === "" || fDate === "" || dCount === ""){
             return;
          } 
 
          nextStepsBtn.disabled = true;
          let post = ticketPreview(fName, lName, pCount, fDate, dCount);
          ticketInfo.appendChild(post);
 
          firstName.value = "";
          lastName.value = "";
          peopleCount.value = "";
          fromDate.value = "";
          daysCount.value = "";
    }
 
    //2.1 helper function for nextSteps logic
    function ticketPreview(fName, lName, pCount, fDate, dCount){
         let liElement = document.createElement('li');
         liElement.classList.add('ticked');
 
         let article = document.createElement('article');
 
         let nameH3 = document.createElement('h3');
         nameH3.textContent = `Name: ${fName} ${lName}`;
 
         let fDateP = document.createElement('p');
         fDateP.textContent = `From date: ${fDate}`;
 
         let dCountP = document.createElement('p');
         dCountP.textContent = `For ${dCount} days`;
 
         let pCountP = document.createElement('p');
         pCountP.textContent = `For ${pCount} people`;
 
         liElement.appendChild(article);
         liElement.appendChild(nameH3);
         liElement.appendChild(fDateP);
         liElement.appendChild(dCountP);
         liElement.appendChild(pCountP);
         
         let editBtn = document.createElement('button');
         editBtn.textContent = 'Edit';
         editBtn.classList.add(`edit-btn`);
 
          //logic 3 
         editBtn.addEventListener('click', editHandler);
 
         let continueBtn = document.createElement('button');
         continueBtn.textContent = 'Continue';
         continueBtn.classList.add(`continue-btn`);
 
         //logic 4
         continueBtn.addEventListener('click', continueHandler);
 
         liElement.appendChild(editBtn);
         liElement.appendChild(continueBtn);
 
         return liElement;
 
    }
    // 3. implement Edit logic
    function editHandler(e){
         debugger;
         //1 remove html representation of the post (li element) from review
         let liElement = e.target.parentElement;
         liElement.remove();
 
         //2 add current post title, category and content to input fields 
         let fullNameH3 = liElement.querySelector('h3');
         let fullNameValue = Array.from(fullNameH3.textContent.substring(6).split(' '));
 
         let finalFirstName = fullNameValue[0];
         let finalLastName = fullNameValue[1];
 
         let paragraphs = liElement.querySelectorAll('p');
         let dateValue = paragraphs[0].textContent.substring(11);
         let daysValue = Array.from(paragraphs[1].textContent.substring(4).split(' '));
         let pplValue = Array.from(paragraphs[2].textContent.substring(4).split(' '));
 
         let finalDaysValue = daysValue[0];
         let finalPplValue = pplValue[0];
 
         firstName.value = finalFirstName;
         lastName.value = finalLastName;
         fromDate.value = dateValue;
         daysCount.value = finalDaysValue;
         peopleCount.value = finalPplValue;
         nextStepsBtn.disabled = false;
 
   }
 
    // 4. implement continue logic
    function continueHandler(e){
         debugger;
         let liElement = e.target.parentElement;
         liElement.remove();
 
         let fullNameH3 = liElement.querySelector('h3').textContent;
 
         let paragraphs = liElement.querySelectorAll('p');
         let dateValue = paragraphs[0].textContent;
         let daysValue = paragraphs[1].textContent;
         let pplValue = paragraphs[2].textContent;
 
 
         let li = document.createElement('li');
         li.classList.add('ticket-content');
 
         let article = document.createElement('article');
 
         let nameH3 = document.createElement('h3');
         nameH3.textContent = fullNameH3;
 
         let fDateP = document.createElement('p');
         fDateP.textContent = dateValue;
 
         let dCountP = document.createElement('p');
         dCountP.textContent = daysValue;
 
         let pCountP = document.createElement('p');
         pCountP.textContent = pplValue;
 
         li.appendChild(article);
         li.appendChild(nameH3);
         li.appendChild(fDateP);
         li.appendChild(dCountP);
         li.appendChild(pCountP);
 
         let confirmBtn = document.createElement('button');
         confirmBtn.textContent = 'Confirm';
         confirmBtn.classList.add(`confirm-btn`);
 
         confirmBtn.addEventListener('click', confirmHandler);
 
         let cancelBtn = document.createElement('button');
         cancelBtn.textContent = 'Cancel';
         cancelBtn.classList.add(`cancel-btn`);
 
         cancelBtn.addEventListener('click', cancelHandler);
 
         li.appendChild(confirmBtn);
         li.appendChild(cancelBtn);
 
         confirmTicket.appendChild(li);
         
   }
   // 5. implement confirm logic
   function confirmHandler(){
     
     let main = document.getElementById('main');
     main.remove();
 
     let body = document.getElementById('body');
     let nameH1 = document.createElement('h1');
     nameH1.id = 'thank-you';
     nameH1.textContent = `Thank you, have a nice day! `;
 
     let backBtn = document.createElement('button');
     backBtn.id = 'back-btn';
     backBtn.textContent = 'Back ';
     
     backBtn.addEventListener('click', backHandler);
 
     body.appendChild(nameH1);
     body.appendChild(backBtn);
 
     
     function backHandler(){
         debugger;
         location.reload();
     }
     
 
   }
   // 6. implement cancel logic
   function cancelHandler(e){
         nextStepsBtn.disabled = false;
         debugger;
         let liElement = e.target.parentElement;
         liElement.remove();
   }
 }