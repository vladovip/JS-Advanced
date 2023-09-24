function addItem() {
 
    let inputField = document.getElementById("newItemText");
    let currentContent = inputField.value;

    let liElement = document.createElement("li");
    liElement.textContent = currentContent;
    let deleteElement = document.createElement("a");
    deleteElement.textContent = "[Delete]";
    deleteElement.href = "#";
    liElement.appendChild(deleteElement);
    deleteElement.addEventListener("click", onDelete);

    let ulListRef = document.getElementById("items");
    ulListRef.appendChild(liElement);
    inputField.value = " ";

    function onDelete (event){
      event.target.parentElement.remove();
    }
}