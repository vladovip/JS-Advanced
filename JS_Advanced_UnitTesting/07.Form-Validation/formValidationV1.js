function validate (){

let companyBtn = document.getElementById("company");
companyBtn.addEventListener("change", checkedFn);

function checkedFn (){
    let fieldElement = document.getElementById("companyInfo");
    if( companyBtn.checked == false ){
        fieldElement.style.display = "none";
    }else {
        fieldElement.style.display = "block";
    }
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", onClickFn);

function onClickFn (event) {
event.preventDefault();

let invalidFields = [];

let userNameElement = document.getElementById("username");
let patternUsername = /^[A-Za-z0-9]{3,20}$/;
if (patternUsername.test(userNameElement.value) == false){
    invalidFields.push(userNameElement);
}

let emailElement = document.getElementById("email");
let emailPattern =  /(.*)@(.*){1,}\.(.*){1,}/;
if(emailPattern.test(emailElement.value) == false){
    invalidFields.push(emailElement);
}


let passwordElement = document.getElementById("password");
let confirmPasswordElement = document.getElementById("confirm-password");
let patternPassword = /^[\w]{5,15}$/;

if( patternPassword.test(passwordElement.value) == false){
  invalidFields.push(passwordElement);
}
if( patternPassword.test(confirmPasswordElement.value) == false || passwordElement.value !== confirmPasswordElement.value ){
  invalidFields.push(confirmPasswordElement);
}


if(companyBtn.checked){
    let companyNumberElem = document.getElementById("companyNumber");
    let regexCompanyNumber = /^[0-9]{4}$/;
    if(regexCompanyNumber.test(companyNumberElem.value) == false){
        invalidFields.push(companyNumberElem);
    }
}

invalidFields.forEach( (el) => el.style.borderColor = "red");
let divValidElement = document.getElementById("valid");
if(invalidFields.length > 0){
    divValidElement.style.display = "none";
} else {
    divValidElement.style.display = "block";
}

};

};