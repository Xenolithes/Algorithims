import {JestHelpers} from "./helpers/jesthelpers"
import {Sort} from "../algos/sort"

const helpers = new JestHelpers()
const sort = new Sort();

describe("Sort should have working sort and search methods", () => {
    helpers.basicTest(sort.binarySearch, [[1,2,3,4,5,6,7,8,9], 8], 7, "should find the index");
    helpers.basicTest(sort.binarySearch, [[10,20,30,40,50,60,70,80], 30], 2, "should find the index");
    helpers.basicTest(sort.binarySearch, [[5,10,22,42], 5], 0, "should find the index");
    helpers.basicTest(sort.binarySearch, [[5,10,22,42], 42], 3, "should find the index");
    helpers.basicTest(sort.binarySearch, [[5,10, 88], 88], 2, "should find the index");
    helpers.basicTest(sort.binarySearch, [[5,10, 88], 5], 0, "should find the index");
    helpers.basicTest(sort.binarySearch, [[0, 1, 21, 33, 45, 45, 61, 71, 72, 73],70], -1, "should find the index");
    helpers.basicTest(sort.binarySearch, [[5, 23, 111],3], -1, "should find the index");
})