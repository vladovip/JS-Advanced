
function myFunc(matrix) {
    let sumsRows = new Set()
    let sumsCols = new Set()
 
    for (let row of matrix) {
        sumsRows.add(row.reduce((a, b) => a + b))
    }
    if (sumsRows.size > 1) { return false }
 
    for (let col = 0; col < matrix.length; col++) {
        let currentSum = 0
        for (let row = 0; row < matrix.length; row++) {
            currentSum += matrix[row][col]
        }
        sumsCols.add(currentSum)
    }
    if (sumsCols.size > 1) { return false }
 
    return Array.from(sumsRows)[0] == Array.from(sumsCols)[0]
 
}
 
 
 
 
 
console.log(myFunc(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));