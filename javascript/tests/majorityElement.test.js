const majorityElement = require("../algos/majorityElement")

describe(`Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.`, () => {
  
  test(`Input: [3,2,3] Output: 3`, () => {
    let input = [3,2,3];
    let answer = 3
    let response = majorityElement(input)
    expect(response).toBe(answer)
  })
  test(`Input: [2,2,1,1,1,2,2] Output: 2`, () => {
    let input = [2,2,1,1,1,2,2];
    let answer = 2
    let response = majorityElement(input)
    expect(response).toBe(answer)
  })

})