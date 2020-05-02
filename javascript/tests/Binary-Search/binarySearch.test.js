const search = require("../../algos/Binary-Search/binarySearch.js")

describe("should return the indicated value in an array", () => {
  test("Should find the value 2 out of the array of numbers", () => {
    const input = [-1,0,3,5,9,12]
    const target = 9
    const answer = 4
    const output = search(input, target)
    expect(output).toBe(answer)
  })
})