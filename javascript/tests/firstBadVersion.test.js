const solution = require("../algos/firstBadVersion");

describe("Should arrange UL and LL appropriately", () => {
  test("This should find 7 of 10", () => {
    let numberToBeFound = 7;
    let PeakNumber = 10;
    const isBadVersion = (n) => {
      return n >= numberToBeFound;
    };
    const func = solution(isBadVersion);
    const answer = numberToBeFound;
    const response = func(PeakNumber);
    expect(response).toBe(answer);
  });
  test("This should find 4 of 10", () => {
    let numberToBeFound = 4;
    let PeakNumber = 10;
    const isBadVersion = (n) => {
      return n >= numberToBeFound;
    };
    const func = solution(isBadVersion);
    const answer = numberToBeFound;
    const response = func(PeakNumber);
    expect(response).toBe(answer);
  });
});

describe("should work with random inputs", () => {
  for (let i = 0; i < 10; i++) {
    let numberToBeFound = Math.floor(Math.random() * 1000000);
    let PeakNumber = 1000000;
    test(`This should find ${numberToBeFound} on 1000000 of 5`, () => {
      const isBadVersion = (n) => {
        return n >= numberToBeFound;
      };
      const func = solution(isBadVersion);
      const answer = numberToBeFound;
      const response = func(PeakNumber);
      expect(response).toBe(answer);
    });
  }
});
