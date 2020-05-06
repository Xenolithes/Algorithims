const canConstruct = require("../algos/ransomNote")

describe(`Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines;
Otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.`, () => {



test("should return false when given two strings with no matching characters", () => {
  let input1 = "a"
  let input2 = "b"
  let response = canConstruct(input1, input2) //?
  expect(response).toBeFalsy()
})
test("should return false when given two strings with not all matching characters", () => {
  let input1 = "aa"
  let input2 = "ab"
  let response = canConstruct(input1, input2)
  expect(response).toBeFalsy()
})
test("should return true when given two strings with matching characters", () => {
  let input1 = "aa"
  let input2 = "aab"
  let response = canConstruct(input1, input2)
  expect(response).toBeTruthy()
})





});
