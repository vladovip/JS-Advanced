
function solve () {
    let arrNums = [0, 0]

    return () => {
        const result = arrNums[0] + arrNums[1]
        arrNums = [arrNums[1], arrNums[1] + arrNums[0] || 1]
        return result || 1
    }
}