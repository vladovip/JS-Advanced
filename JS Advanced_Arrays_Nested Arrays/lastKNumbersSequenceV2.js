function solve ( num1 , num2 ){

    let result = [];
    let  n = +num1;
    let  k = +num2;
    result[0]=1;

    for (let index = 1; index < n; index++) {
        let currnetSumNum = 0;
        let startIndex = Math.max(0, index - k);
        for( let j = startIndex; j < index ; j++){
            currnetSumNum += result[j];
        }
        result[index] = currnetSumNum;
        
    }
    
    return result;
    
}

solve(6, 3);
solve(8, 2);
