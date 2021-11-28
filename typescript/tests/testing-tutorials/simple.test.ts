import { sum, subtract } from "../../testing-lessons/basics"
let result, expected

async function sumTest() {

    result = sum(3, 7)
    expected = 10
    expect(result).toBe(expected)

}

async function subtactTest() {

    result = subtract(7, 3)
    expected = 4
    expect(result).toBe(expected)

}
test("Sum adds numbers", sumTest)
test("Subtract minus numbers", subtactTest)
