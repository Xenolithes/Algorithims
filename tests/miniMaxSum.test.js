const miniMaxSum = require('../miniMaxSum')


let output = ""
let storeLog = log => output += log
console["log"] = storeLog;

describe('Finds minimum sum and maximum sum', () => {
    
    beforeEach(() => {
        output = ""
    })
    
    test('prints hello world', () => {
        miniMaxSum([3,2,5,4,1])
        expect(output).toEqual("10 14")  
    })
})

