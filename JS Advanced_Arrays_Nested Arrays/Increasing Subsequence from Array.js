function extractIncreasingSequence(elements) {
    return elements.reduce((arr, element) => {
        if (element >= (arr[arr.length - 1] || elements[0])) {
            arr.push(element)
        }
        return arr
    }, [])
}