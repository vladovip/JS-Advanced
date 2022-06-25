function toggle() {
    let hiddenTextRef = document.getElementById('extra'); 
    let buttonRef = document.getElementsByClassName('button')[0];

    if (buttonRef.textContent == 'More') {
        buttonRef.textContent = 'Less';
        hiddenTextRef.style.display = 'block';
    } else  if (buttonRef.textContent == 'Less'  ) {
        buttonRef.textContent = 'More';
        hiddenTextRef.style.display = 'none';
    }
}

