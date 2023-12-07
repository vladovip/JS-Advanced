window.addEventListener("load", solve);

function solve() {

  let firstNameElement= document.querySelector("input#first-name");
  let lastNameElement= document.querySelector("input#last-name");
  let ageElement = document.querySelector("input#age");
  let storyTitleElement = document.querySelector("input#story-title");
  let genreSelectElement = document.querySelector("select#genre");
  let storyElement = document.querySelector("textarea#story");
  let pubslishButton = document.querySelector("input#form-btn");
  let ulPreviewList = document.querySelector("ul#preview-list");
  pubslishButton.addEventListener("click", goToPreviewFn );

  function goToPreviewFn (event){
    event.preventDefault();

    let firstname = firstNameElement.value; 
    let lastname = lastNameElement.value;
    let age = ageElement.value;
    let title = storyTitleElement.value;
    let genre = genreSelectElement.value;
    let story = storyElement.value;

    if( firstname == "" || lastname == "" || age == ""|| title == "" || genre == "" || story == "" ){
      return;
    }
    // clear the inputs fields:
    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    storyTitleElement.value = "";
    genreSelectElement.value = "";
    storyElement.value = "";
   // disabling publish button 
   pubslishButton.disabled = true;

   // creating list element with Save, Edit, Delete btns to be added to Ul preview list.
   let listElement = document.createElement("li");
   listElement.classList.add("story-info");
   let articleElement = document.createElement("article");
   let h4Element = document.createElement("h4");
   h4Element.textContent = `Name: ${firstname} ${lastname}`;
   let pAge = document.createElement("p");
   pAge.textContent = `Age: ${age}`;
   let pTitle = document.createElement("p");
   pTitle.textContent = `Title: ${title}`;
   let pGenre = document.createElement("p");
   pGenre.textContent = `Genre: ${genre}`;
   let pStory = document.createElement("p");
   pStory.textContent = `${story}`;
   articleElement.appendChild(h4Element);
   articleElement.appendChild(pAge);
   articleElement.appendChild(pTitle);
   articleElement.appendChild(pGenre);
   articleElement.appendChild(pStory);
   listElement.appendChild(articleElement);

   let saveBtn = document.createElement("button");
   saveBtn.classList.add("save-btn");
   saveBtn.textContent  = "Save Story";
   saveBtn.disabled = false;
   saveBtn.addEventListener("click", savingStoryFn);

   let editBtn = document.createElement("button");
   editBtn.classList.add("edit-btn");
   editBtn.textContent  = "Edit Story";
   editBtn.disabled = false;
   editBtn.addEventListener("click", editingStoryFn);

   let deleteBtn = document.createElement("button");
   deleteBtn.classList.add("delete-btn");
   deleteBtn.textContent  = "Delete Story";
   deleteBtn.disabled = false; 
   deleteBtn.addEventListener("click", deletingStoryFn);
  
   listElement.appendChild(saveBtn);
   listElement.appendChild(editBtn);
   listElement.appendChild(deleteBtn);
   ulPreviewList.appendChild(listElement);
  
    function savingStoryFn (event){
    event.preventDefault();
    let mainDiv = document.querySelector("div#main");
    Array.from(mainDiv.children).forEach((child) => child.remove());
    let h1Element = document.createElement("h1");
    h1Element.textContent = `Your scary story is saved!`
    mainDiv.appendChild(h1Element);
    
    }

    function editingStoryFn (event){
      event.preventDefault();
      let clickedEditBtn = event.currentTarget;
      let currentList = clickedEditBtn.parentNode;
      firstNameElement.value = firstname;
      lastNameElement.value = lastname;
      ageElement.value = age;
      storyTitleElement.value = title;
      genreSelectElement.value = genre;
      storyElement.value = story;
      saveBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;
      pubslishButton.disabled = false;
      currentList.remove();
    }

    function deletingStoryFn (event){
      event.preventDefault();
      let clickedDeleteBtn = event.currentTarget;
      let currentList = clickedDeleteBtn.parentNode;
      currentList.remove();
      pubslishButton.disabled = false;
    }

  }
  
}
