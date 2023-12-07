window.addEventListener('load', solve);

function solve() {

    let genreElement = document.querySelector("input#genre");
    let nameSongElement = document.querySelector("input#name");
    let authorElement = document.querySelector("input#author");
    let dateElement = document.querySelector("input#date");
    let addButton = document.querySelector("button#add-btn");
    let divCollectionSongs = document.querySelector("div.all-hits-container");
    let divSavedSongs = document.querySelector("div.saved-container");
    let divLikes = document.querySelector("div.likes");
    addButton.addEventListener("click", addInfoSong);

    function addInfoSong (event){
        event.preventDefault();

     let genre  =  genreElement.value; 
     let song = nameSongElement.value;
     let author = authorElement.value;
     let date = dateElement.value;

     if(genre == "" || song == "" || author == "" || date == ""){
     return;
     }

     // clear the inputs fieds : 
     genreElement.value = ""; 
     nameSongElement.value = "";
     authorElement.value = "";
     dateElement.value = "";

     // creating internal div element 
     let divElement = document.createElement("div");
     divElement.classList.add("hits-info");
     let img = document.createElement("img");
     img.src ="./static/img/img.png";
     let h2Genre = document.createElement("h2");
     h2Genre.textContent = `Genre: ${genre}`;
     let h2Song = document.createElement("h2");
     h2Song.textContent = `Name: ${song}`;
     let h2Author = document.createElement("h2");
     h2Author.textContent = `Author: ${author}`;
     let h3Date = document.createElement("h3");
     h3Date.textContent = `Date: ${date}`;
     divElement.appendChild(img);
     divElement.appendChild(h2Genre);
     divElement.appendChild(h2Song);
     divElement.appendChild(h2Author);
     divElement.appendChild(h3Date);

     // create buttons and add them to div element:
     let saveButton = document.createElement("button");
     saveButton.classList.add("save-btn");
     saveButton.textContent =`Save song`;
     saveButton.addEventListener("click", SaveSongFn);
     let likeButton = document.createElement("button");
     likeButton.classList.add("like-btn");
     likeButton.textContent =`Like song`;
     likeButton.addEventListener("click", LikeSongFn);
     let deleteButton = document.createElement("button");
     deleteButton.classList.add("delete-btn");
     deleteButton.textContent =`Delete`;
     deleteButton.addEventListener("click", DeleteSongFn);
     divElement.appendChild(saveButton);
     divElement.appendChild(likeButton);
     divElement.appendChild(deleteButton);

    // append all prepared div Element to the collection Songs
    divCollectionSongs.appendChild(divElement);




        function SaveSongFn (event){
        event.preventDefault();
        let clickedSavedBtn = event.currentTarget;
        let divSongInfoElement = clickedSavedBtn.parentNode;
        divSongInfoElement.querySelector(`button.save-btn`).remove();
        divSongInfoElement.querySelector(`button.like-btn`).remove();
        divSongInfoElement.remove();
        divSavedSongs.appendChild(divSongInfoElement);

        }

        function LikeSongFn (event){
        event.preventDefault();
        let clickedLikeBtn = event.currentTarget;
        let pLikes = divLikes.querySelector("p");
        let currentValue = Number(pLikes.textContent.split(": ")[1]);
        currentValue +=1;
        pLikes.textContent = `Total Likes: ${currentValue}`;
        clickedLikeBtn.disabled = true;
        
       }

       function DeleteSongFn (event){
        event.preventDefault();
        let clickedDeleteBtn = event.currentTarget;
        let divSongInfoElement = clickedDeleteBtn.parentNode;
        divSongInfoElement.remove();
       } 

    }
      
}