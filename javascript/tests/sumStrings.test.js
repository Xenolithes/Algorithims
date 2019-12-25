const sumStrings = require('../algos/sumStrings')

console.log(sumStrings('a', 'b'))

describe('Should add number strings together', () => {
    test('add two basic numbers together', () => {
        let a = '1';
        let b = '2';
        let solution = '3'
        let result = sumStrings(a,b);
        expect(result).toBe(solution)
    })
    test('add two advanced numbers together', () => {
        let a = '10';
        let b = '200';
        let solution = '210'
        let result = sumStrings(a,b);
        expect(result).toBe(solution)
    })
    test('add two very big numbers together', () => {
        let a = '150000000000000000000';
        let b = '200000000000000000000';
        let solution = '350000000000000000000'
        let result = sumStrings(a,b);
        expect(result).toBe(solution)
    })
    test('add two different length numbers that make a third different length', () => {
        let a = '99';
        let b = '1';
        let solution = '100'
        let result = sumStrings(a,b);
        expect(result).toBe(solution)
    })
    test('trim leading zeros', () => {
        let a = '00103';
        let b = '08567';
        let solution = '8670'
        let result = sumStrings(a,b);
        expect(result).toBe(solution)
    })
})