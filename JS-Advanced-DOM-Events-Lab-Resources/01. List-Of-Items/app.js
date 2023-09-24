function addItem() {
    let inputField = document.getElementById("newItemText");
    let currentContent = inputField.value;
    let liElement = document.createElement("li");
    liElement.textContent = currentContent;
    let ulListRef = document.getElementById("items");
    ulListRef.appendChild(liElement);
    inputField.value = " ";

}