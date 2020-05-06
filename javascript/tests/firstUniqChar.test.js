const firstUniqChar = require("../algos/firstUniqueCharacter");

describe(`Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.`, () => {
  test(`input = "leetcode" return 0.`, () => {
    let input = "leetcode";
    let answer = 0;
    let response = firstUniqChar(input);
    expect(response).toBe(answer);
  });
  test(`input = "loveleetcode", return 2.`, () => {
    let input = "loveleetcode";
    let answer = 2;
    let response = firstUniqChar(input);
    expect(response).toBe(answer);
  });
  test(`input = "love", return -1.`, () => {
    let input = "love";
    let answer = -1;
    let response = firstUniqChar(input);
    expect(response).toBe(answer);
  });
  test(`input = "cc", return -1.`, () => {
    let input = "cc";
    let answer = -1;
    let response = firstUniqChar(input);
    expect(response).toBe(answer);
  });
});
