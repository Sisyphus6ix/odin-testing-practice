const calculator = require('../calculator')

test('adding numbers', () => {
    expect(calculator(1,'+',2)).toBe(3)
});

test('subtracting numbers', () => {
    expect(calculator(10,'-',5)).toBe(5)
})

test('multiplying numbers', () => {
    expect(calculator(3,'x',3)).toBe(9)
})

test('dividing numbers', () => {
    expect(calculator(100,'/',2)).toBe(50)
})