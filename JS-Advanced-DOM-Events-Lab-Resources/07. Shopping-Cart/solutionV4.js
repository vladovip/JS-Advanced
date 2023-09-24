function solve() {
    const textarea = document.getElementsByTagName('textarea')[0];
  
    //define buttons
    const checkOutBtn = document.getElementsByClassName('checkout')[0];
    const addBtn = Array.from(document.getElementsByClassName('add-product'));
  
    //assign button events
    checkOutBtn.addEventListener('click', populateOutputField);
    addBtn.forEach(btn => btn.addEventListener('click', buyItem));
  
    let totalPrice = 0;
    let boughtItems = [];
  
    function buyItem(e){
        const product = e.target.parentNode.parentNode;
        const productTitle = product.getElementsByClassName('product-title')[0];
        const productPrice = product.getElementsByClassName('product-line-price')[0];
  
        textarea.value += `Added ${productTitle.textContent} for ${Number(productPrice.textContent).toFixed(2)} to the cart.\n`
  
        totalPrice += Number(productPrice.textContent);
  
        if (!boughtItems.includes(productTitle.textContent)){
            boughtItems.push(productTitle.textContent)
        }
    }
  
    function populateOutputField(){
        textarea.value += `You bought ${boughtItems.join(', ')} for ${totalPrice.toFixed(2)}.`;
        checkOutBtn.removeEventListener('click', populateOutputField);
        addBtn.forEach(btn => btn.removeEventListener('click', buyItem));
    }
 }