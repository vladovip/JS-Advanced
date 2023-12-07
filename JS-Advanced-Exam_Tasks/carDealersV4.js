window.addEventListener("load", solve);

function solve() {
 
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let productionYear = document.getElementById('year');
  let select = document.getElementById('fuel');
  let valuE = select.options[select.selectedIndex];
 
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let btnPublish = document.getElementById('publish');
  let tBody = document.getElementById('table-body');
  btnPublish.addEventListener('click', publish);
 
  function publish(e) {
 
    e.preventDefault();
    if (makeInput.value !== '' || modelInput.value !== '' || productionYear.value !== '' || valuE.value !== '' || valuE.value !== '' || originalCost.value !== '' || sellingPrice.value !== '') {
      if (Number(originalCost.value) < Number(sellingPrice.value)) {
        let trElement = document.createElement('tr');
        trElement.classList.add("row");
 
        let tdElementMake = document.createElement('td');
        tdElementMake.textContent = makeInput.value;
 
        let tdElementModel = document.createElement('td');
        tdElementModel.textContent = modelInput.value;
 
        let tdElementYear = document.createElement('td');
        tdElementYear.textContent = productionYear.value;
 
        let tdElementFuel = document.createElement('td');
        tdElementFuel.textContent = valuE.value;
 
        let tdElementOricinal = document.createElement('td');
        tdElementOricinal.textContent = originalCost.value;
 
        let tdElementSelling = document.createElement('td');
        tdElementSelling.textContent = sellingPrice.value;
 
 
        tBody.appendChild(trElement);
        trElement.appendChild(tdElementMake);
        trElement.appendChild(tdElementModel);
        trElement.appendChild(tdElementYear);
        trElement.appendChild(tdElementFuel);
        trElement.appendChild(tdElementOricinal);
        trElement.appendChild(tdElementSelling);
      }
 
    }
 
  }
 
 
 
}
 