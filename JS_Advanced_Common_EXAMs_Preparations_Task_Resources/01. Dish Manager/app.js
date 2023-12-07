window.addEventListener("load", solve);

function solve() {

  //TODO ....
  let firstNameElement = document.querySelector("input#first-name");
  let lastNameElement = document.querySelector("input#last-name");
  let ageElement = document.querySelector("input#age");
  let genderElement = document.querySelector("select#genderSelect");
  let dishDescriptionElement = document.querySelector("textarea#task");
  let buttonSubmit = document.querySelector("input#form-btn");
  let ulInProgress = document.querySelector("ul#in-progress");
  let ulFinishedCooking = document.querySelector("ul#finished");
  let clearButton = document.querySelector("button#clear-btn");
  buttonSubmit.addEventListener("click", goToInProgress);
  let counterElement = document.querySelector("span#progress-count");
  let counter = Number(counterElement.textContent);

  function goToInProgress (event){
  event.preventDefault();
 
  let firstname = firstNameElement.value; 
  let lastname = lastNameElement.value;
  let age = ageElement.value;
  let gender = genderElement.value;
  let taskDescription = dishDescriptionElement.value;
  if(firstname == ""|| lastname == "" || age == "" || gender == "" || taskDescription == ""){
   return;
  }
  // create a list element and append it to the ul In-progress:
  let liElement = document.createElement("li");
  liElement.classList.add("each-line");
  let articleElement = document.createElement("article");
  let h4Element = document.createElement("h4");
  h4Element.textContent = `${firstname} ${lastname}`;
  let pAgeGender = document.createElement("p");
  pAgeGender.textContent = `${gender}, ${age}`;
  let pDescription = document.createElement("p");
  pDescription.textContent = `Dish description: ${taskDescription}`;
  articleElement.appendChild(h4Element);
  articleElement.appendChild(pAgeGender);
  articleElement.appendChild(pDescription);
  liElement.appendChild(articleElement);
     // - create edit and complete btn and appedn them to liElement
  let editBtn = document.createElement('button');
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Edit";
  editBtn.addEventListener ("click", editInformation)  
  
  let completeBtn = document.createElement('button');
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "Mark as complete";
  completeBtn.addEventListener ("click", completeInformation)
  liElement.appendChild(editBtn);
  liElement.appendChild(completeBtn);
  ulInProgress.appendChild(liElement);

  // clear the input fields : 
   firstNameElement.value = ""; 
   lastNameElement.value = "";
   ageElement.value =  "";
   genderElement.value = "";
   dishDescriptionElement.value ="";

  //Also the counter with id "progress-count" should be increased by 1
  counter+=1;
  counterElement.textContent = counter;

  function editInformation (event){
    event.preventDefault();
    let clickedEditBtn = event.currentTarget;
    let list = clickedEditBtn.parentNode;
    list.remove();
    // return the info to input fields
    firstname = firstNameElement.value = firstname; 
    lastname = lastNameElement.value = lastname;
    ageElement.value = age;
    genderElement.value = gender;
    dishDescriptionElement.value = taskDescription;
    // decrease the counter with 1:
    counter -= 1;
    counterElement.textContent = counter;
  }

  function completeInformation (event){
    event.preventDefault();
    let clickedCompleteBtn = event.currentTarget;
    let listInfo = clickedCompleteBtn.parentNode;
    // The buttons [“Edit”] and [“Mark as complete”] should be removed from the li element.
    listInfo.removeChild(editBtn);
    listInfo.removeChild(completeBtn);
    // the record must be deleted from the ul with id "in-progress"
    listInfo.remove();
    ulFinishedCooking.appendChild(listInfo);
    //the counter with id "progress-count" should be decreased by 1.  
    counter -= 1;
    counterElement.textContent = counter;
  }

  // When you click the ["Clear"] button, 
  //the record for all posts must be deleted from the ul with the id "finished".
  clearButton.addEventListener("click", clearInfo);
  function clearInfo(event){
  event.preventDefault();
  Array.from(ulFinishedCooking.children).forEach((x) => x.remove());
  }
}

}
