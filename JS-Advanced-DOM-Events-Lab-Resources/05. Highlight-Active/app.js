function focused() {
    
     let inputCollection = Array.from(document.querySelectorAll("input"));
     inputCollection.forEach( el => {
        el.addEventListener("focus", onFocus );
        el.addEventListener("blur", onBlur );

     });

     function onFocus(event) {
        event.target.parentElement.classList.add("focused");
     }

     function onBlur(event) {
        event.target.parentElement.classList.remove("focused");
     }
}