const findComplement = require("../algos/numberComplement")

describe("Should inverse the binary value of a number and return the associated numeric value", () => {
  it("Should turn 5 to 2", () => {
    let input = 5
    let answer = 2
    let response = findComplement(input)
    expect(response).toBe(answer)
  })
  it("Should turn 4 to 3", () => {
    let input = 4
    let answer = 3
    let response = findComplement(input)
    expect(response).toBe(answer)
  })
})