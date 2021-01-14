import { Deserializer } from "v8";
import { getNthFib } from "../algos/findNthFib"
import { JestHelpers, BSTGenerator } from "./helpers"

const helpers = new JestHelpers();

describe("The function of getNthFib should behave properly", () => {
    helpers.basicTest(getNthFib, [1], 0, "Should return 0");
    helpers.basicTest(getNthFib, [2], 1, "Should return 1");
    helpers.basicTest(getNthFib, [3], 1, "Should return 2");
    helpers.basicTest(getNthFib, [4], 2, "Should return 3");
    helpers.basicTest(getNthFib, [5], 3, "Should return 4");
    helpers.basicTest(getNthFib, [6], 5, "Should return 5");
    helpers.basicTest(getNthFib, [7], 8, "Should return 8");
    helpers.basicTest(getNthFib, [8], 13, "Should return 13");
});