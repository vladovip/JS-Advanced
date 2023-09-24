function solve (){

 let inputObj = {
    taskName: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
 } 

 let addButton = document.getElementById("add");
 addButton.addEventListener("click", addTask);
 let [addTaskSection, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll("section")).map(e => e.children[1])
 

 function addTask (event){
   event.preventDefault();

   // create article , h3, p1, p2
   let articleElement = document.createElement("article");
   let h3Element = document.createElement("h3");
   h3Element.textContent = inputObj.taskName.value;
   articleElement.appendChild(h3Element);
   let p1 = document.createElement("p");
   p1.textContent = `Description: `+ inputObj.description.value;
   articleElement.appendChild(p1);
   let p2 = document.createElement("p");
   p2.textContent = `Due Date: ` + inputObj.date.value;
   articleElement.appendChild(p2);
   // create divElement
   let divElement = document.createElement("div");
   divElement.className = "flex";
   articleElement.appendChild(divElement);
   //create btns and append them to divElement
   let startButton = document.createElement("button");
   startButton.textContent ="Start";
   startButton.className = "green";
   divElement.appendChild(startButton);
   let deleteBtn = document.createElement("button");
   deleteBtn.textContent="Delete";
   deleteBtn.className = "red";
   divElement.appendChild(deleteBtn);
   let finishBtn = document.createElement("button");
   finishBtn.textContent="Finish";
   finishBtn.className = "orange";
   // btn3.style.display = "none";
   // divElement.appendChild(btn3);
   // append articleElement to the 2nd section - Open Section/Open Tasks
   openSection.appendChild(articleElement);
   // to clear the content of the first section, when data has been transferred to OpenSection
   Object.values(inputObj).forEach( i => i.value = ' ');
  
   deleteBtn.addEventListener("click", deleteFn);
   function deleteFn(){
    articleElement.remove();
   }
   
   startButton.addEventListener("click", startFn);
   function startFn (){
      startButton.remove();
      divElement.appendChild(finishBtn);
      progressSection.appendChild(articleElement);
   }

    finishBtn.addEventListener("click", complete);
    function complete () {
   //  deleteBtn.remove();
   //  finishBtn.remove();
    divElement.remove(); // The buttons with their parent div-element should be removed.
    finishSection.appendChild(articleElement);
   }
    

 }

    
}