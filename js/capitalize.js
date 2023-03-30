function capitalize (string) {
    // the first index of my string gets set to uppercase and added to the rest of my string
    return string.charAt(0).toUpperCase()
    + string.slice(1)
}

module.exports = capitalize