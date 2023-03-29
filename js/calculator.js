function calculator (a, operator, b) {
    if (operator === '+'){
        let add = a + b
        return add
    }
    if (operator === '-'){
        let subtract = a - b
        return subtract
    }
    if (operator === 'x'){
        let multiply = a * b
        return multiply
    }
    if (operator === '/'){
        let divide = a / b
        return divide
    }

    return
}

console.log('HELLOOO')

module.exports = calculator;