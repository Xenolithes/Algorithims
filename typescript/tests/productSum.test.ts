import { JestHelpers } from "./helpers/index";
import { productSum } from "../algos/productSum";
const helpers = new JestHelpers();
describe("Product Sum should return the correct value", () => {
    // const test1 = [5, 2, [7, -1]]
    // helpers.basicTest(productSum, [test1], 17, "should return 12")
    const test2 = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

    // 12 = 5 + 2 * ( 7 + -1) + 3 * ( 6 * (-13 + 8) + 4 )
    // 5 + 12 + 60
    helpers.basicTest(productSum, [test2], 12, "should return 12")
})