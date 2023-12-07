window.addEventListener("load", solve);

function solve() {

  let carProducer = document.getElementById('make');
  let carModel = document.getElementById('model');
  let carYear = document.getElementById('year');
  let carOriginalCost = document.getElementById('original-cost');
  let carFuel = document.getElementById('fuel');
  let sellingPrice = document.getElementById('selling-price');
  let publishButton = document.getElementById('publish')
  publishButton.addEventListener('click', publishFun);

  let tBodyElement = document.getElementById('table-body');

  function createDomStructure(producer, model, year, typeEngine, originalPrice, cost) {

    let trElement = document.createElement('tr');
    trElement.classList.add('row');
    let tdCarManifacture = document.createElement('td');
    tdCarManifacture.textContent = producer
    trElement.appendChild(tdCarManifacture);
    let tdCarModel = document.createElement('td');
    tdCarModel.textContent = model
    trElement.appendChild(tdCarModel);
    let tdCarYear = document.createElement('td');
    tdCarYear.textContent = year
    trElement.appendChild(tdCarYear);
    let tdCarFuel = document.createElement('td');
    tdCarFuel.textContent = typeEngine
    trElement.appendChild(tdCarFuel);
    let tdCarOriginalPrice = document.createElement('td');
    tdCarOriginalPrice.textContent = originalPrice
    trElement.appendChild(tdCarOriginalPrice);
    let tdCarSellPrice = document.createElement('td');
    tdCarSellPrice.textContent = cost
    trElement.appendChild(tdCarSellPrice);
    let tdButton = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = "Edit"
    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = "Sell";
    tdButton.appendChild(editBtn);
    tdButton.appendChild(sellBtn);
    trElement.appendChild(tdButton);
    return trElement;
  };

  function publishFun(e) {
     e.preventDefault();
     
    let producerValue = carProducer.value;
    let modelValue = carModel.value;
    let yearValue = Number(carYear.value);
    let originalPriceValue = Number(carOriginalCost.value);
    let fuelValue = carFuel.value;
    let sellingPriceValue = Number(sellingPrice.value);
    debugger
    if (producerValue === "" || modelValue === "" || !yearValue || originalPriceValue > sellingPriceValue) {
      return
    };


    let post = createDomStructure(producerValue, modelValue, yearValue, fuelValue, originalPriceValue, sellingPriceValue)
    tBodyElement.appendChild(post);


  };
};