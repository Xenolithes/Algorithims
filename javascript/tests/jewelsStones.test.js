const numJewelsInStones = require("../algos/jewelsStones");

describe(`You're given strings J representing the types of stones that are jewels,
and S representing the stones you have. Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".`, () => {
  test(`Input: J = "aA", S = "aAAbbbb" Output: 3`, () => {
    let input = "aA";
    let input2 = "aAAbbbb"
    let output = 3
    let response = numJewelsInStones(input, input2)
    expect(response).toBe(output)
  });
  test(`Input: J = "z", S = "ZZ`, () => {
    let input = "z";
    let input2 = "ZZ"
    let output = 0
    let response = numJewelsInStones(input, input2)
    expect(response).toBe(output)
  });
});
