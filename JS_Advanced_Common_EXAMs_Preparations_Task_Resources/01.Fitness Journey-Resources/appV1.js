// Fitness Journey  - 100 / 100 points in judge 
window.addEventListener('load', solve);

function solve() {
    let nameField = document.getElementById('name');
    let emailField = document.getElementById('email');
    let contactNumField = document.getElementById('contact-number');
    let prefClassField = document.getElementById('class-type');
    let classTimeField = document.getElementById('class-time');
    let nextBtn = document.getElementById('next-btn');
    let previewBlock = document.querySelector('#preview-section .class-info');
    let confirmClassBlock = document.querySelector('#confirm-section .confirm-class');
    let main = document.getElementById('main');
    let body = document.getElementById('body');
 
    nextBtn.addEventListener('click', nextHandler);
    previewBlock.addEventListener('click', previewHandler);
    confirmClassBlock.addEventListener('click', confirmClassHandler);
 
    function nextHandler(e) {
        e.preventDefault();
 
        let nameVal = nameField.value;
        let emailVal = emailField.value;
        let contactNumVal = contactNumField.value;
        let prefClassVal = prefClassField.value;
        let classTimeVal = classTimeField.value;
 
        if (nameVal === '' || emailVal === '' || contactNumVal === '' || prefClassVal === '' || classTimeVal === '') { return; }
        
        let li = document.createElement('li');
        let edit = document.createElement('button');
        let cont = document.createElement('button');
 
        li.classList.add('info-item');
        edit.classList.add('edit-btn');
        cont.classList.add('continue-btn');
 
        edit.innerHTML = 'Edit';
        cont.innerHTML = 'Continue';
        
        li.appendChild(createPreview(nameVal, emailVal, contactNumVal, prefClassVal, classTimeVal));
        li.appendChild(edit);
        li.appendChild(cont);
        previewBlock.appendChild(li);
 
        nameField.value = '';
        emailField.value = '';
        contactNumField.value = '';
        prefClassField.value = '';
        classTimeField.value = '';
        nextBtn.setAttribute('disabled', 'disabled');
    }
 
    function continueHandler(e) {
        let li = e.target.parentElement;
        li.remove();
 
        let paragraphs = li.querySelectorAll('p');
        
        let confirmLi = document.createElement('li');
        let nameVal = paragraphs[0].textContent;
        let emailVal = paragraphs[1].textContent;
        let contactNumVal = paragraphs[2].textContent;
        let prefClassVal = paragraphs[3].textContent;
        let classTimeVal = paragraphs[4].textContent;
 
        let confirm = document.createElement('button');
        let cancel = document.createElement('button');
 
        confirmLi.classList.add('info-item');
        confirm.classList.add('confirm-btn');
        cancel.classList.add('cancel-btn');
 
        confirm.innerHTML = 'Confirm';
        cancel.innerHTML = 'Cancel';
 
        confirmLi.appendChild(createPreview(nameVal, emailVal, contactNumVal, prefClassVal, classTimeVal));
        confirmLi.appendChild(cancel);
        confirmLi.appendChild(confirm);
        confirmClassBlock.appendChild(confirmLi);
    }
 
    function editHandler(e) {
        let li = e.target.parentElement;
        li.remove();
 
        let paragraphs = li.querySelectorAll('p');
        
        let nameVal = paragraphs[0].textContent;
        let emailVal = paragraphs[1].textContent;
        let contactNumVal = paragraphs[2].textContent;
        let prefClassVal = paragraphs[3].textContent;
        let classTimeVal = paragraphs[4].textContent;
 
        nameField.value = nameVal;
        emailField.value = emailVal;
        contactNumField.value = contactNumVal;
        prefClassField.value = prefClassVal;
        classTimeField.value = classTimeVal;
        nextBtn.removeAttribute('disabled');
    }
 
    function confirmHandler(e) {
        let li = e.target.parentElement;
        li.remove();
        main.remove();
        nextBtn.removeAttribute('disabled');
 
        let h1 = document.createElement('h1');
        let button = document.createElement('button');
        h1.setAttribute('id', 'thank-you');
        button.setAttribute('id', 'done-btn');
        h1.innerText = 'Thank you for scheduling your appointment, we look forward to seeing you!';
        button.innerText = 'Done';
 
        body.appendChild(h1);
        body.appendChild(button);
 
        button.addEventListener('click', doneHandler);
    }
 
    function doneHandler() {
        location.reload();
    }
 
    function cancelHandler(e) {
        let li = e.target.parentElement;
        li.remove();
        nextBtn.removeAttribute('disabled');
    }
 
    function previewHandler(e) {
        if (e.target.innerText === 'Edit') {
            editHandler(e);
        }
 
        if (e.target.innerText === 'Continue') {
            continueHandler(e);
        }
    }
 
    function confirmClassHandler(e) {
        if (e.target.innerText === 'Cancel') {
            cancelHandler(e);
        }
 
        if (e.target.innerText === 'Confirm') {
            confirmHandler(e);
        }
    }
 
    function createPreview(name, email, contact, prefClass, classTime) {
        let article = document.createElement('article');
        let pName = document.createElement('p');
        let pEmail = document.createElement('p');
        let pContact = document.createElement('p');
        let pPrefClass = document.createElement('p');
        let pClassTime = document.createElement('p');
 
        article.classList.add('personal-info');
 
        pName.innerHTML = name;
        pEmail.innerHTML = email;
        pContact.innerHTML = contact;
        pPrefClass.innerHTML = prefClass;
        pClassTime.innerHTML = classTime;
 
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pContact);
        article.appendChild(pPrefClass);
        article.appendChild(pClassTime);
 
        return article;
    }
}