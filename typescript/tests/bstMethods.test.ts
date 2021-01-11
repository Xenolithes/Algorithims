import { BST, BSTmethods } from "../algos/BSTmethods";
import { JestHelpers, BSTGenerator } from "./helpers"

const helpers  = new JestHelpers();
const bstGen = new BSTGenerator();
const methods = new BSTmethods();

describe("The methods for binary search trees should unction correctly", (() => [
    describe("It should be able to find the closest value", () => {

        helpers.basicTest(methods.findClosestValueInBst, [bstGen.generateBST([10, 8, 3, 9, 15, 13, 18]), 12], 13, "Should find the cloest value on the right side");
        helpers.basicTest(methods.findClosestValueInBst, [bstGen.generateBST([10, 8, 3, 9, 15, 13, 18]), 11], 10, "Should find the cloest value even if it is the first");
        helpers.basicTest(methods.findClosestValueInBst, [bstGen.generateBST([10, 8, 3, 9, 15, 13, 18]), 2], 3, "Should find the cloest value on the left side");


    })

    // describe("it should be able to find the sum of all branches", () => [

    // ])
]))