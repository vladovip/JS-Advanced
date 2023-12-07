function solution() {
    let submitButton = document.getElementById('submitBTN');
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');
    let block = document.getElementById('block');
    let preview = document.getElementById('infoPreview');
  
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  
    let form = Array.from(document.getElementById('form').querySelectorAll('input'));
    let labelForm = Array.from(document.getElementById('form').querySelectorAll('label'));
  
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
  
      let fullName = form[0].value;
      let email = form[1].value;
      if (fullName !== '' && email !== '') {
        for (let i = 0; i < form.length-1 ; i++) {
  
          let liElement = document.createElement('li');
          liElement.textContent = `${labelForm[i].textContent} ${form[i].value}`
          preview.appendChild(liElement)
          form[i].value = ''
        }
      }
  
      e.currentTarget.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
  
    })
  
  }