window.addEventListener("load", solve);

function solve() {
    // console.log("It works properly.");
    let inputObj = {
        title: document.getElementById('post-title'),
        category: document.getElementById('post-category'),
        content: document.getElementById("post-content"),
    }

    let listsObj = {
        reviewList: document.getElementById('review-list'),
        publishedList: document.getElementById('published-list'),
    }
    document.getElementById("publish-btn").addEventListener("click", publish);
    

    function publish(event) {
     event.preventDefault();
     // read the inputs:
     let titleValue = inputObj.title.value;
     let categoryValue =  inputObj.category.value;
     let contentValue = inputObj.content.value;
     
     //validate the input :
     if( titleValue == "" || categoryValue == "" || contentValue == "" ){
      return;
     }

     // create list item which will hold validated info:
     let liElement = document.createElement("li");
     liElement.className = "rpost";
     liElement.innerHTML = `<article>
     <h4>${titleValue}</h4>
     <p>${categoryValue}</p>
     <p>${contentValue}</p>    
     </article>
     <button class="action-btn edit">Edit</button>
     <button class="action-btn approve">Approve</button>`;
     
     // add needed fucntionality for EditBtn and Approve Btn:
     let editBtn = liElement.querySelector(".edit");
     let approveBtn = liElement.querySelector(".approve");
     editBtn.addEventListener("click", editPost);
     approveBtn.addEventListener("click", approvePost);

     // append to the first List:
     listsObj.reviewList.appendChild(liElement);

     // clear inputs fields:
     inputObj.title.value = "";
     inputObj.category.value = "";
     inputObj.content.value = "";

     function editPost() {
       // populate input fields with values;
       inputObj.title.value = titleValue;
       inputObj.category.value = categoryValue;
       inputObj.content.value = contentValue;
      // remove current liElement from post for Review:
      liElement.remove();
     }
 
     function approvePost (){
      //  transfer approve liElement from Review to Uploaded Posts List:
      listsObj.publishedList.appendChild(liElement);
      // remove the both action buttons:
      editBtn.remove();
      approveBtn.remove();
     }

    }

    document.getElementById("clear-btn").addEventListener("click", clearPost);
    function clearPost (){
      // delete created listElement from Uploaded Posts list:
      listsObj.publishedList.innerHTML = "";
    }
}
