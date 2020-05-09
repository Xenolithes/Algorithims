const perfectSquare = require("../algos/perfectSquares")

describe("The function should find if the number is a perfect square or not", () => {
  test("Should return true if given true", () => {
    let input = 16
    let response = perfectSquare(input) //?
    expect(response).toBeTruthy()
  })
  test("Should return true if given true", () => {
    let input = 12
    let response = perfectSquare(input) //?
    expect(response).toBeFalsy()
  })
  test("Should return true if given true", () => {
    let input = 81
    let response = perfectSquare(input) //?
    expect(response).toBeTruthy()
  })
  test("Should return true if given true", () => {
    let input = 200
    let response = perfectSquare(input) //?
    expect(response).toBeFalsy()
  })
})