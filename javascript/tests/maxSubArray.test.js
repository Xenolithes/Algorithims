const maxSubArray = require("../algos/maxSubArray")

test("should find the max sub array in an array of numbers", () => {
  let test = [-2,1,-3,4,-1,2,1,-5,4]
  let answer = 6
  let response = maxSubArray(test)
  expect(response).toBe(answer)
})

test("should find max sub array without defaulting to zero", () => {
  let test = [-1]
  let answer = -1
  let response = maxSubArray(test)
  expect(response).toBe(answer)
})