const floodFill = require("../algos/floodFill")
describe(`An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.`, () => {
  test("should fill the 2d array with 2", () => {
    let input = [[1,1,1],[1,1,0],[1,0,1]]
    let sr = 1
    let sc = 1
    let newColor = 2
    let answer = [[2,2,2],[2,2,0],[2,0,1]]
    let response = floodFill(input, sr, sc, newColor)
    expect(response).toStrictEqual(answer)
  })
  test("should fill the 2d array with 2", () => {
    let input = [[0,0,0],[0,1,1]]
    let sr = 1
    let sc = 1
    let newColor = 1
    let answer = [[0,0,0],[0,1,1]]
    let response = floodFill(input, sr, sc, newColor)
    expect(response).toStrictEqual(answer)
  })
  
})
