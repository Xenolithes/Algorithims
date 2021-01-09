import { TwoNumberSum } from "../algos/twoNumberSum";
import { JestHelpers } from "./helpers/jesthelpers";
const jestHelpers = new JestHelpers();
describe("The solutions should be given an array of numbers and a target sum", () => {
    const twoNumberSum = new TwoNumberSum();
    jestHelpers.basicTest(twoNumberSum.firstSolution, [[9, 3, 4, 1, 0], 5], [4, 1], "should return an array of two numbers that create the target sum" );
    jestHelpers.basicTest(twoNumberSum.firstSolution, [[1,2,3,4,5], 50], [], "should return an empty array if the target sum cannot be found");
})