function solve() {
    const makeField = document.getElementById('make');
    const modelField = document.getElementById('model');
    const productionYearField = document.getElementById('year');
    const fuelTypeField = document.getElementById('fuel');
    const originalCostField = document.getElementById('original-cost');
    const sellingPriceField = document.getElementById('selling-price');
    const publishBtn = document.getElementById('publish');
    publishBtn.addEventListener('click', addToNextField);
  
  
    function addToNextField(e) {
      e.preventDefault();
      if (makeField.value === '' || modelField.value === '' || productionYearField.value === '' || fuelTypeField.value === '' || originalCostField.value === '' || sellingPriceField === '' || originalCostField.value > sellingPriceField.value) {
        return
      }
  
      const trEl = document.createElement('tr');
      trEl.className = 'row';
  
      const td1El = document.createElement('td');
      const make = makeField.value;
      td1El.textContent = make;
      trEl.appendChild(td1El);
  
      const td2El = document.createElement('td');
      const model = modelField.value;
      td2El.textContent = model;
      trEl.appendChild(td2El);
  
      const td3El = document.createElement('td');
      const prodYear = productionYearField.value;
      td3El.textContent = prodYear;
      trEl.appendChild(td3El);
  
      const td4El = document.createElement('td');
      const fuel = fuelTypeField.value;
      td4El.textContent = fuel;
      trEl.appendChild(td4El);
  
      const td5El = document.createElement('td');
      const costPrice = originalCostField.value;
      td5El.textContent = costPrice;
      trEl.appendChild(td5El);
  
      const td6El = document.createElement('td');
      const sellPrice = sellingPriceField.value;
      td6El.textContent = sellPrice;
      trEl.appendChild(td6El);
  
      const td7El = document.createElement('td');
      const editBtn = document.createElement('button');
      editBtn.addEventListener('click', edit);
      editBtn.className = 'action-btn edit';
      editBtn.textContent = 'Edit';
      td7El.appendChild(editBtn);
      const sellBtn = document.createElement('button');
      sellBtn.addEventListener('click', sell)
      sellBtn.className = 'action-btn sell';
      sellBtn.textContent = 'Sell';
      td7El.appendChild(sellBtn);
      trEl.appendChild(td7El);
  
  
      const tbody = document.getElementById('table-body');
      tbody.appendChild(trEl);
  
      makeField.value = '';
      modelField.value = '';
      productionYearField.value = '';
      fuelTypeField.value = '';
      originalCostField.value = '';
      sellingPriceField.value = '';
  
      function edit(e) {
        makeField.value = make;
        modelField.value = model;
        productionYearField.value = prodYear;
        fuelTypeField.value = fuel;
        originalCostField.value = costPrice;
        sellingPriceField.value = sellPrice;
  
        tbody.removeChild(trEl);
  
      }
  
      const profitField = document.getElementById('profit');
  
      function sell(e) {
        tbody.removeChild(trEl);
  
        const span1 = document.createElement('span');
        span1.textContent = `${make} ${model}`;
  
        const span2 = document.createElement('span');
        span2.textContent = `${prodYear}`;
  
        const span3 = document.createElement('span');
        span3.textContent = `${sellPrice - costPrice}`;
  
        const liEl = document.createElement('li');
        liEl.className = 'each-list';
        liEl.appendChild(span1);
        liEl.appendChild(span2);
        liEl.appendChild(span3);
  
        const ulTarget = document.getElementById('cars-list');
  
        ulTarget.appendChild(liEl);
        let a = Number(profitField.textContent);
        let b = Number(sellPrice) - Number(costPrice);
        profitField.textContent = (a + b).toFixed(2);
      }
  
    }
  
  }