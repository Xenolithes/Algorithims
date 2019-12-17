const aVeryBigNumber = require('../algos/averybigsum')
const randomRangeNum = require('./randomNumGen')


test('adds a very big number', () => {
    let bigNumber = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
    let answer = 5000000015
    expect(aVeryBigNumber(bigNumber)).toBe(answer)
})

// test('It should run with any number', () => {
//     let max = 2147483648
//     let min = -2147483648
//     for(var i = 0; i < 100; i++){
//         let bigNumber = Array.fill(randomRangeNum(min, max), 0, 5)

//     }
// })