// // first option:

// function notify(message) {
//     const notification = document.getElementById('notification');
//     notification.addEventListener('click', () => notification.style.display = 'none');

//     notification.textContent = message;
//     notification.style.display = 'block';
// }


// second option:

function notify(message){

    let divElement = document.getElementById("notification");
    divElement.textContent = message;
    divElement.style.display = 'block';
    divElement.addEventListener("click", function (){
        divElement.style.display = 'none';
    });

}