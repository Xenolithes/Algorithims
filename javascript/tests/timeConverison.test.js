let timeConversion = require('../algos/timeConversion');

describe('should conver to 24 hour format', () => {
let input = ""
let output = "" 
    test('should work with mornings', () => {
        for(var h = 0; h < 12; h++){
            let hour = h < 10 ? '0' + h: h;
            let minutes = '00'
            let seconds = '00'
        let midnightException = hour === '00' ? '12' : hour;
        input = midnightException+":"+minutes+":"+seconds+"AM";
        output = hour+":"+minutes+":"+seconds
        expect(timeConversion(input)).toEqual(output)
        }
    })
    test('it should work with evenings', () => {
        for(var h = 0; h <= 12; h++){
            let hour = h < 10 ? '0' + h: h;
            let minutes = '00'
            let seconds = '00'
        let twelveException = hour === 12 ? hour : (h + 12); 
        input = hour+":"+minutes+":"+seconds+"PM";
        output = twelveException+":"+minutes+":"+seconds
        expect(timeConversion(input)).toEqual(output)
    }})
})

