function deleteByEmail() {
    let inputFieldValue = document.querySelector("input[name ='email']").value;
     let rows = Array.from(document.querySelectorAll(`tbody tr`));
     let isfound = false;
     for ( let row of rows ) {
       if (row.children[1].textContent === inputFieldValue) {
          let parent = row.parentElement;
          parent.removeChild(row);
          isfound = true;
       }       
     }

     if( isfound === true ) {
      document.getElementById("result").textContent = "Deleted."
     }else {
        document.getElementById("result").textContent = "Not found."
     }

}