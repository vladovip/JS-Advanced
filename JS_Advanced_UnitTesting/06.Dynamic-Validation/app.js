// first option: 

// function validate() {
//     document.getElementById('email').addEventListener('change', validation);
//     function validation(event) {
//         const email = event.target;
//         const emailReg = new RegExp(/[a-z]+\@[a-z]+\.[a-z]+/gm);

//         if (emailReg.test(email.value)) {
//             email.classList.remove('error');
//         }
//         else {
//             email.classList = 'error';
//         }
//     }
// }

// second option: 
function validate (){

    let inputElement = document.getElementById("email");
    inputElement.addEventListener("change", emailValidation);

    function emailValidation(event) {
     let emailField = event.target;
     let patternMail = /[a-z]+@[a-z]+\.[a-z]+/gm; 
     if( patternMail.test(emailField.value) == true){
        emailField.classList.remove("error");
     } else if( patternMail.test(emailField.value) == false) {
        emailField.classList.add("error");
     }
    }

}
