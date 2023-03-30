function minNum(array) {
    return Math.min(...array)
}

function maxNum(array) {
    return Math.max(...array)
}

function getAverage(array) {
    return array.reduce((previous, current) => (current += previous)) / array.length;
}

function analyzeArray(array) {
    return {
        average: getAverage(array),
        min: minNum(array),
        max: maxNum(array),
        length: array.length,
    }
}

module.exports = analyzeArray