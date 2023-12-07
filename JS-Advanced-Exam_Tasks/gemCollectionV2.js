function solve() {

    const gemstoneNameElement = document.getElementById('gem-name');
    const colorElement = document.getElementById('color');
    const caratsElement = document.getElementById('carats');
    const priceElement = document.getElementById('price');
    const typeElement = document.getElementById('type');
    const previewList = document.getElementById('preview-list');
    const collectionList = document.getElementById('collection');
    
    const addGemBtn = document.getElementById('add-btn');
    addGemBtn.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();
        const gemstoneNameValue = gemstoneNameElement.value;
        const colorValue = colorElement.value;
        const caratsValue = caratsElement.value;
        const priceValue = priceElement.value;
        const typeValue = typeElement.value;
        
        if (gemstoneNameValue === "" || colorValue === "" || caratsValue === "" || priceValue === "" || typeValue === "") {
            return;
        };

        const liElement = document.createElement('li');
        liElement.classList = 'gem-info';

        const article = document.createElement('article');

        const h4Element = document.createElement('h4');
        h4Element.textContent = gemstoneNameValue;

        const p1Element = document.createElement('p');
        p1Element.textContent = `Color: ${colorValue}`

        const p2Element = document.createElement('p');
        p2Element.textContent = `Carats: ${caratsValue}`

        const p3Element = document.createElement('p');
        p3Element.textContent = `Price: ${priceValue}$`

        const p4Element = document.createElement('p');
        p4Element.textContent = `Type: ${typeValue}`;

        
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save to Collection';
        saveBtn.classList = 'save-btn';
        
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit Information';
        editBtn.classList = 'edit-btn';
        
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.classList = 'cancel-btn';
        
        article.appendChild(h4Element);
        article.appendChild(p1Element);
        article.appendChild(p2Element);
        article.appendChild(p3Element);
        article.appendChild(p4Element);

        liElement.appendChild(article);
        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(cancelBtn);
        previewList.appendChild(liElement);

        gemstoneNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';
        addGemBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);
        saveBtn.addEventListener('click', onSave);
        cancelBtn.addEventListener('click', onCancel);
    };
    function onEdit(e) {
        const liEditElement = e.target.parentElement;
        const gemNameParentElement = e.target.parentElement.children[0];
        const gemNameValue = gemNameParentElement.children[0].textContent;
        const colorValue = gemNameParentElement.children[1].textContent;
        const caratsValue = gemNameParentElement.children[2].textContent;
        const priceValue = gemNameParentElement.children[3].textContent;
        const typeValue = gemNameParentElement.children[4].textContent;

        gemstoneNameElement.value = gemNameValue;
        colorElement.value = colorValue.substring(7);
        caratsElement.value = caratsValue.substring(8);
        priceElement.value = priceValue.substring(7);
        typeElement.value = typeValue.substring(6);

        liEditElement.remove();
        addGemBtn.disabled = false;
    };
    function onSave(e) {
        const liSaveElement = e.target.parentElement.children[0];
        const gemNameVal = liSaveElement.children[0].textContent;
        const colorVal = liSaveElement.children[1].textContent.substring(7);
        const caratsVal = liSaveElement.children[2].textContent.substring(8);
        const priceVal = liSaveElement.children[3].textContent.substring(7);
        const typeVal = liSaveElement.children[4].textContent.substring(6);

        const liElement = document.createElement('li');
        const pElement = document.createElement('p');
        pElement.className = 'collection-item';
        pElement.textContent = `${gemNameVal} - Color: ${colorVal}/ Carats: ${caratsVal}/ Price: ${priceVal}$/ Type: ${typeVal}`;
        liElement.appendChild(pElement);
        collectionList.appendChild(liElement);
        const previewLi = e.target.parentElement;
        previewLi.remove();
        addGemBtn.disabled = false;
    }
    function onCancel(e) {
        const liCancelElement = e.target.parentElement;
        liCancelElement.remove();
        addGemBtn.disabled = false;
    };
};