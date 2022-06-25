function solve() {
  
  
    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerHTML = 'Hexadecimal';

    let selectedElementsToSwitch = document.getElementById('selectMenuTo');
    selectedElementsToSwitch.appendChild(optionBinary);
    selectedElementsToSwitch.appendChild(optionHexadecimal);
    
    let converted = 0;
    // let decimaInputNumber = Number(document.getElementById('input').value);
    document.getElementsByTagName('button')[0].addEventListener("click", convertFunction);
   
    function convertFunction(){
        let decimaInputNumber = Number(document.getElementById('input').value);
        let convertTo = selectedElementsToSwitch.value;
        if( convertTo == 'binary' ){
            converted = decimaInputNumber.toString(2);
            resultElement = document.getElementById('result');
            resultElement.value = converted;
        } else if (convertTo == 'hexadecimal' ){
            converted = decimaInputNumber.toString(16).toUpperCase();
            resultElement = document.getElementById('result');
            resultElement.value = converted;
        }
    }
     
}