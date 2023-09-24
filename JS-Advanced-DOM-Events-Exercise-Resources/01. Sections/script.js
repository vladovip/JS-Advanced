function create(words) {
   // console.log('TODO:...');

   let contentRef  = document.getElementById("content");

   for (let word of words) {
      let divElement = document.createElement("div");
      let para = document.createElement("p");
      para.textContent = word;
      para.style.display = "none";
      divElement.appendChild(para);
      contentRef.appendChild(divElement);
     
      divElement.addEventListener("click", show);
      function show(event) {
      event.currentTarget.firstElementChild.style.display = "block";
      } 
   }
}