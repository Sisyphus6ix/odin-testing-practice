function reverseString (string) {
    // first i am using the split method so my strings converted to an array
    // second i use the reverse method so that my array because reversed
    // finally i use the join method so that my array gets turned back into a string
    return string.split('').reverse().join('')
}

module.exports = reverseString