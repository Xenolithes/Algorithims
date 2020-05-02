const isHappy = require("../algos/happyNumber")

test("should tell if a number is a happy number", () => {
  let test = 19
  let answer = true
  let response = isHappy(test)
  expect(response).toBe(answer)
})