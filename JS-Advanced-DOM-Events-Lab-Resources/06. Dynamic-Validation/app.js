function validate() {
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    let inputElement = document.getElementById('email');
    // let currentContent = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if( pattern.test(event.target.value) === true ){
            event.target.removeAttribute('class');
            return;
        } else {
            event.target.classList.add("error");
        }
    }
    
}