import { ValidateSubsequence } from "../algos/validateSubsequence";
import { JestHelpers } from "./helpers/jesthelpers";
const helpers = new JestHelpers();
const solution = new ValidateSubsequence();

describe("The algorithm should find a subsequence in an array if there is one", () => {
    helpers.basicTest(solution.firstSolution, [[1, 2, 3, 4, 5, 6, 7, 8], [2, 5, 7]], true, "should find the subsequence");
    helpers.basicTest(solution.firstSolution, [[1, 2, 3, 4, 5, 6, 7], [7, 8, 9]], false, "The solution should not finde a substring");
    helpers.basicTest(solution.firstSolution, [[1, 2, 3, 4], [9]], false, "Should return false with a input of one integer that is not a subsequence");
    helpers.basicTest(solution.firstSolution, [[1, 2, 3, 4], [3]], true, "Should return false with a input of one integer that is not a subsequence");
    helpers.basicTest(solution.firstSolution, [[1, 2, 3], [1, 2, 3, 4, 5, 6]], false, "It should return false if the subsequence is longer than the input arr");
    helpers.basicTest(solution.firstSolution, [[1, 2, 3, 4, 5], [1, 1, 2, 5]], false, "Should deal with duplicate numbers");
    helpers.basicTest(solution.firstSolution, [[5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]], false, "Should deal with duplicate numbers", true);
});