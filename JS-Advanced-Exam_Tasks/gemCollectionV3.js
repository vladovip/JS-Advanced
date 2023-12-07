function solve() {
    const gemNameField = document.querySelector('#gem-name');
    const colorField = document.querySelector('#color');
    const caratsField = document.querySelector('#carats');
    const priceField = document.querySelector('#price');
    const typeField = document.querySelector('#type');
    const addGemBtn = document.querySelector('#add-btn');

    addGemBtn.addEventListener('click', valueToPreview);

    function valueToPreview(e) {
        if (gemNameField.value == '' || colorField.value == '' || caratsField.value == '' || priceField.value == '' || typeField.value == '') {
           return;
        }

        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = gemNameField.value;
        article.appendChild(h4);

        const pColor = document.createElement('p');
        const color = colorField.value;
        pColor.textContent = `Color: ${colorField.value}`;
        article.appendChild(pColor);

        const pCarats = document.createElement('p');
        const carat = caratsField.value;
        pCarats.textContent = `Carats: ${caratsField.value}`;
        article.appendChild(pCarats);

        const pPrice = document.createElement('p');
        const price = priceField.value;
        pPrice.textContent = `Price: ${priceField.value}$`;
        article.appendChild(pPrice);

        const pType = document.createElement('p');
        const type = typeField.value;
        pType.textContent = `Type: ${typeField.value}`;
        article.appendChild(pType);

        const btnSave = document.createElement('button');
        btnSave.addEventListener('click', moveToCollection);
        btnSave.classList = 'save-btn';
        btnSave.textContent = `Save to Collection`;

        const btnEdit = document.createElement('button');
        btnEdit.addEventListener('click', returnValue)
        btnEdit.classList = 'edit-btn';
        btnEdit.textContent = `Edit Information`;

        const btnCancel = document.createElement('button');
        btnCancel.addEventListener('click', removeItems);
        btnCancel.classList = 'cancel-btn';
        btnCancel.textContent = `Cancel`;

        const liElement = document.createElement('li');
        liElement.classList = `gem-info`;
        liElement.appendChild(article);
        liElement.appendChild(btnSave);
        liElement.appendChild(btnEdit);
        liElement.appendChild(btnCancel);

        const lElement = document.querySelector('#preview-list');
        lElement.appendChild(liElement);

        gemNameField.value = '';
        colorField.value = '';
        caratsField.value = '';
        priceField.value = '';
        typeField.value = '';

        addGemBtn.disabled = true;   

        function returnValue(e) {
            gemNameField.value = h4.textContent;
            colorField.value = color;
            caratsField.value = carat;
            priceField.value = price;
            typeField.value = type;

            addGemBtn.disabled = false;

            lElement.removeChild(liElement);

        }

        function moveToCollection(e) {
            const collectionField = document.querySelector('#collection');
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.className = 'collection-item';
            p.textContent = `${h4.textContent} - ${pColor.textContent}/ ${pCarats.textContent}/ Price: ${price}$/ ${pType.textContent}`;
            li.appendChild(p);
            collectionField.appendChild(li);
            lElement.removeChild(liElement);
            addGemBtn.disabled = false;
        }

        function removeItems(e) {
            lElement.removeChild(liElement);
            addGemBtn.disabled = false;
        }
    }
}