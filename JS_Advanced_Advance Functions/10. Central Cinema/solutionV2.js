function solve () {

 let inputElements = Array.from(document.getElementById("container").children);

 let movieNameElement = inputElements[0];
 let hallElement = inputElements[1];
 let priceElement  = inputElements[2];
 let btnOnScreen = inputElements[3];
 
 let sectionMoviesElement = document.getElementById("movies").children[1];
 btnOnScreen.addEventListener("click", generateMovies);

 let archiveElementSectionUList = document.getElementById("archive").children[1];
 let clearButton = document.getElementById("archive").children[2];


     function  generateMovies(evnt){
        evnt.preventDefault();  
        let currentMovie = movieNameElement.value;
        let hall = hallElement.value;
        let priceMovie = Number(priceElement.value);  

        if(currentMovie.length!=0 && hall.length!=0 && priceMovie > 0) {
            // TO DO --- only if inputs are all filled and the ticket price value is a number???
                // create LiElement and span and strong element inside the li element
                 let liElement = document.createElement("li");
                 let spanElement = document.createElement("span");
                 let strongElement = document.createElement("strong");
                 spanElement.textContent = currentMovie;
                 strongElement.textContent = `Hall: ${hall}`;
                 liElement.appendChild(spanElement);
                 liElement.appendChild(strongElement);
                 // create div element inside LiElement and append it to liElement:
                 let divElement = document.createElement("div");
                 let strongElement2 = document.createElement("strong");
                 strongElement2.textContent = priceMovie.toFixed(2);
                 let tempPrice = Number(priceMovie.toFixed(2));// assign current price to tempPrice
                 divElement.appendChild(strongElement2);
                 let inputElement = document.createElement("input");
                 inputElement.type = "text";
                 inputElement.placeholder="Tickets Sold";
                 divElement.appendChild(inputElement);
                 let buttonArchiveElement = document.createElement("button");
                 buttonArchiveElement.textContent = "Archive";
                 divElement.appendChild(buttonArchiveElement);
                 liElement.appendChild(divElement);
                 // append all Li element to the parent element - UL
                 sectionMoviesElement.appendChild(liElement);
                // clear input fields
                movieNameElement.value="";
                hallElement.value="";
                priceElement.value ="";
        
                buttonArchiveElement.addEventListener("click", archiveFn);
               
                function archiveFn(event){
                       event.preventDefault();
                       let inputElementContent = Number(inputElement.value);
                       // When you click the [Archive] button and only if the input for tickets count is filled with a integer number
                       if( inputElementContent > 0 && Number.isInteger(inputElementContent)){
                           
                           // create li element and inside create span, strong,buttonDel 
                           let liElement2 = document.createElement("li");
                           let spanElement2 = document.createElement("span");
                           let strongElement3 = document.createElement("strong");
                           let buttonDelete = document.createElement("button");
                           spanElement2.textContent = spanElement.textContent;
                           let totalAmount = (inputElementContent * tempPrice).toFixed(2); 
                           strongElement3.textContent = `Total amount: ${totalAmount}`;
                           buttonDelete.textContent = "Delete";
                           // append elements to the LI item  and overal Archive UL list
                           liElement2.appendChild(spanElement2);
                           liElement2.appendChild(strongElement3);
                           liElement2.appendChild(buttonDelete);
                           archiveElementSectionUList.appendChild(liElement2);
                           event.target.parentElement.parentElement.remove();

                           // add event to the DeleteBtn and delete current list element
                           buttonDelete.addEventListener("click", onDeleteFn);
                           function onDeleteFn(event){
                           event.target.parentElement.remove();
                           }
                       }
                         
                }
                   
        }
  
     }

    clearButton.addEventListener("click", clearAllMovies);

    function clearAllMovies(event){
        event.preventDefault();
        Array.from(event.target.previousElementSibling.children).filter(x => x.remove());
     }
     
}