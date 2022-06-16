function createSortedList() {
    let resultArr = [];

    return {
        add(num) {
            if (typeof(num) === 'number') {
                resultArr.push(num);
                resultArr.sort((a, b) => a - b);
            } else {
                console.log('The array takes only numbers.')
            }
        },
        remove(index) {
            if (index >= 0 && index < resultArr.length) {
                resultArr.splice(index, 1);
            } else {
                console.error('The index is outside the bounds of the array');
            }
        },
        get(index) {
            if (index >= 0 && index < resultArr.length) {
                return resultArr[index];
            } else {
                console.error('The index is outside the bounds of the array');
            }
        },
        get size() {
            return resultArr.length
        }
    }
}

let resultArr = createSortedList();
resultArr.add(5);
resultArr.add(6);
resultArr.add(7);
console.log(resultArr.get(1)); 
resultArr.remove(1);
console.log(resultArr.get(1));
