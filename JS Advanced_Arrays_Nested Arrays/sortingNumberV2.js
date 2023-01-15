function solve (arr){
 let result = [];
arr.sort((a,b)=> a-b).forEach(element => {
    let smallNum = arr.shift();
    let biggestNum = arr.pop();
    result.push(smallNum);
    result.push(biggestNum);
});
    let smallNum = arr.shift();
    let biggestNum = arr.pop();
    result.push(smallNum);
    result.push(biggestNum);

    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);