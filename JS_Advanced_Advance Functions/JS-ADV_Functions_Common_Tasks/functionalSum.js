function solve(num) {
    let tempNum = 0;

    function recursive(y) {
        tempNum += y;
        return recursive
    }
    recursive.toString = () => tempNum;
    return recursive(num);
}