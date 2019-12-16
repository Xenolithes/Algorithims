let birthdayCandles = require('../birthdayCandles')

test('Return the number of tallest candles on cake', () =>{

    expect(birthdayCandles([1,2,3,3])).toEqual(2)

})