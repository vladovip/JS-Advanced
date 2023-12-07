function solve() {
    let recipientInputElement = document.getElementById("recipientName");
    let titleInputElement = document.getElementById("title");
    let messageInputElement = document.getElementById("message");
   
    let addButtonElement = document.getElementById("add");
   
    addButtonElement.addEventListener("click", (e) => {
      e.preventDefault();
   
      let recipient = recipientInputElement.value;
      let title = titleInputElement.value;
      let message = messageInputElement.value;
   
      if (!title || !message) {
        return;
      }
      if (!/[a-z]+@[a-z]+\.[a-z]+/.test(recipient)) {
        recipientInputElement.value = "";
        return;
      }
      let ulElement = document.querySelector("#list");
   
      let liElement = document.createElement("li");
      let titleH4Element = document.createElement("h4");
      titleH4Element.textContent = `Title: ${title}`;
      let recipientH4Element = document.createElement("h4");
      recipientH4Element.textContent = `Recipient Name: ${recipient}`;
      let messageSpanElement = document.createElement("span");
      messageSpanElement.textContent = message;
      let divListElement = document.createElement("div");
      divListElement.setAttribute("id", "list-action");
   
      let sentButtonElement = document.createElement("button");
      sentButtonElement.setAttribute("id", "send");
      sentButtonElement.setAttribute("type", "submit");
      sentButtonElement.textContent = "Send";
   
      let deleteButtonElement = document.createElement("button");
      deleteButtonElement.setAttribute("id", "delete");
      deleteButtonElement.setAttribute("type", "submit");
      deleteButtonElement.textContent = "Delete";
   
      divListElement.appendChild(sentButtonElement);
      divListElement.appendChild(deleteButtonElement);
   
      ulElement.appendChild(liElement);
      liElement.appendChild(titleH4Element);
      liElement.appendChild(recipientH4Element);
      liElement.appendChild(messageSpanElement);
      liElement.appendChild(divListElement);
     
      recipientInputElement.value='';
     title = titleInputElement.value='';
    message = messageInputElement.value='';
   
      sentButtonElement.addEventListener("click", (e) => {
        let ulSentElement = document.querySelector(".sent-list");
        let liSentElement = document.createElement("li");
        ulSentElement.appendChild(liSentElement);
        let spanToElement = document.createElement("span");
        spanToElement.textContent = `To: ${recipient}`;
        let spanTitleElement = document.createElement("span");
        spanTitleElement.textContent =  `Title: ${title}`;;
        let divLiSentElement = document.createElement("div");
        divLiSentElement.classList.add("btn");
        liSentElement.appendChild(spanToElement);
        liSentElement.appendChild(spanTitleElement);
        liSentElement.appendChild(divLiSentElement);
   
        let deleteSentButtonElement = document.createElement("button");
        deleteSentButtonElement.setAttribute("type", "submit");
        deleteSentButtonElement.classList.add("delete");
        deleteSentButtonElement.textContent = "Delete";
        divLiSentElement.appendChild(deleteSentButtonElement);
        
        deleteSentButtonElement.addEventListener('click',(e)=>{
          let ulDeleteElement = document.querySelector(".delete-list");
          let liDeleteElement = document.createElement("li");
          ulDeleteElement.appendChild(liDeleteElement);
      
          let spanDelToElement = document.createElement("span");
          spanDelToElement.textContent = `To: ${recipient}`;
          let spanDelTitleElement = document.createElement("span");
          spanDelTitleElement.textContent = `Title: ${title}`;
          liDeleteElement.appendChild(spanDelToElement);
          liDeleteElement.appendChild(spanDelTitleElement);
          liSentElement.remove();
        });
        liElement.remove();
      });
      deleteButtonElement.addEventListener("click", (e) => {
          let ulDeleteElement = document.querySelector(".delete-list");
          let liDeleteElement = document.createElement("li");
          ulDeleteElement.appendChild(liDeleteElement);
   
          let spanDelToElement = document.createElement("span");
          spanDelToElement.textContent = `To: ${recipient}`;
          let spanDelTitleElement = document.createElement("span");
          spanDelTitleElement.textContent =  `Title: ${title}`;
          liDeleteElement.appendChild(spanDelToElement);
          liDeleteElement.appendChild(spanDelTitleElement);
          liElement.remove();
        });
        
    })  
   
    
    let resetButtonElement = document.getElementById("reset");
    resetButtonElement.addEventListener("click", (e) => {
      e.preventDefault();
      recipientInputElement.value='';
      title = titleInputElement.value='';
     message = messageInputElement.value='';
    });
  }
  solve();
   