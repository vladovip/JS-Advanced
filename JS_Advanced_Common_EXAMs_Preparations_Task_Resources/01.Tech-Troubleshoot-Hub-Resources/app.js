window.addEventListener('load', solution);

function solution() {
  //TODO...
 let employeeElement = document.querySelector('form #employee');
 let categoryElement = document.querySelector('form #category');
 let urgencyElement = document.querySelector("form #urgency");
 let assignTeamElement = document.querySelector('form #team');
 let descriptionElement = document.querySelector('form #description');
 let addBtnElement = document.querySelector("form #add-btn");
 addBtnElement.addEventListener("click", addCurrentTroubleshoot);
 let ulPreviewElement = document.querySelector("#preview ul.preview-list");
 let ulPendingListElement = document.querySelector("#pending ul.pending-list");
 let ulResolvedListElement = document.querySelector("#resolved ul.resolved-list");
 

  function addCurrentTroubleshoot (event){
    event.preventDefault();
    let employee = employeeElement.value ;
    let category = categoryElement.value ;
    let urgency = urgencyElement.value ;
    let team = assignTeamElement.value;
    let description = descriptionElement.value;
   
    if( employee == "" || category == "" || urgency == "" || team == "" || description==""){
      return;
    }
    // clear value of the input
    employeeElement.value = "";
    categoryElement.value = "";
    urgencyElement.value  = "";
    assignTeamElement.value = "";
    descriptionElement.value = "";
    // add button change to disabled 
    addBtnElement.disabled = true;

    // create li element , article element, p element and chain them.
    let liProblemElement = document.createElement("li");
    liProblemElement.classList.add("problem-content");
    let articleElement = document.createElement("article");

    let  pEmployeeElement = document.createElement("p");
    pEmployeeElement.textContent = `From: ${employee}`;
    let pCategoryElement = document.createElement("p");
    pCategoryElement.textContent = `Category: ${category}`;
    let pUrgencyElement = document.createElement("p");
    pUrgencyElement.textContent = `Urgency: ${urgency}`;
    let pTeamElement = document.createElement("p");
    pTeamElement.textContent = `Assigned to: ${team}`;
    let pDescriptionElement = document.createElement("p");
    pDescriptionElement.textContent = `Description: ${description}`;
    // append all p elements to article element 
    articleElement.appendChild(pEmployeeElement);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pUrgencyElement);
    articleElement.appendChild(pTeamElement);
    articleElement.appendChild(pDescriptionElement);
    // append article element to li element 
    liProblemElement.appendChild(articleElement);
  // create editBn and continueBtn and append to li element
    let editBtnElement = document.createElement('button');
    editBtnElement.classList.add("edit-btn");
    editBtnElement.textContent = "Edit";
    liProblemElement.appendChild(editBtnElement);

    let continueBtnElement = document.createElement('button');
    continueBtnElement.classList.add("continue-btn");
    continueBtnElement.textContent = "Continue";
    liProblemElement.appendChild(continueBtnElement);
    // appedn all li element to the ul element
    ulPreviewElement.appendChild(liProblemElement);

    // create functions to each button elements:
    editBtnElement.addEventListener("click", editInfo);
    continueBtnElement.addEventListener("click", continueToPending);
    
    function editInfo (event){
      event.preventDefault();
      addBtnElement.disabled = false;
      let currenProblemLiElement = event.currentTarget.parentElement;
      employeeElement.value = employee;
      categoryElement.value = category;
      urgencyElement.value = urgency;
      assignTeamElement.value = team;
      descriptionElement.value = description ;
      currenProblemLiElement.remove();
    }

    function  continueToPending (event){
      event.preventDefault();
     let liContentElement = event.currentTarget.parentElement;
     liContentElement.querySelector("button.edit-btn").remove();
     liContentElement.querySelector("button.continue-btn").remove();
     ulPendingListElement.appendChild(liContentElement);
     let resolvedButtonElement = document.createElement("button");
     resolvedButtonElement.textContent="Resolved";
     resolvedButtonElement.classList.add("resolve-btn");
     liContentElement.appendChild(resolvedButtonElement);
     resolvedButtonElement.addEventListener("click", resolveFn);
    }


    function resolveFn(event){
      event.preventDefault();
      let liContentElement = event.currentTarget.parentElement;
      liContentElement.querySelector("button.resolve-btn").remove();
      let clearButtonElement = document.createElement("button");
      clearButtonElement.textContent="Clear";
      clearButtonElement.classList.add("clear-btn");
      liContentElement.appendChild(clearButtonElement);
      ulResolvedListElement.appendChild(liContentElement);
      clearButtonElement.addEventListener("click", clearFn);
    }

    function clearFn(event) {
      event.preventDefault();
      event.currentTarget.parentElement.remove();
    }

  }

}


    
    
