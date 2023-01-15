function solve (arr, param2){
let result = [];
for (let index = 0; index < arr.length; index += Number(param2)) {

    result.push(arr[index]);
}

return result;

} 