function create(words) {
  // console.log('TODO:...');
  let content = document.getElementById("content");

  for (let word of words) {
    let divElement = document.createElement("div");
    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = word;
    paragraphElement.style.display = "none";
    divElement.appendChild(paragraphElement);
    divElement.addEventListener("click", unhide);
    content.appendChild(divElement);
  }
  
  function unhide(evnt) {
    evnt.target.children[0].style.display = "";
  }
}
