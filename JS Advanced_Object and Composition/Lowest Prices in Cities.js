function solve (inputArr){

    let obj = {};

    for (let index = 0; index < inputArr.length; index++) {
        let text = inputArr[index];
        let productInfo = text.split(" | ");
        let town =  productInfo[0];
        let product = productInfo[1];
        let price = +productInfo[2];
       
        if ( !obj.hasOwnProperty(product) ){
          obj[product] = { town, price}
        } else {
            if( price < obj[product].price ){
                obj[product] = { town, price}
            }
        }
    }
    for (let product in obj) {
        console.log(`${product} -> ${obj[product].price} (${obj[product].town})`);
    }


}

solve (['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);

