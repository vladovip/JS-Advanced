function solution (num){
    let currentNum = num;
    let result = function add (x){
        let sum = x+currentNum;
        return sum;
    }
    return result;
}