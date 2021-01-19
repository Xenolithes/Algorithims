import { JestHelpers } from "./helpers";
import { numberArrayMethods } from "../algos/numberArrayMethods";

const helpers = new JestHelpers();
const methods = new numberArrayMethods();

describe(
    "This will test the methods of the numberArrayMethods class", () => {
        helpers.checkInstanceOf(numberArrayMethods, methods, "It should be an instance of the parent class")



        describe("Should have a functioning threeNumberSum", () => {
            const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            const output = [[1, 2, 12], [1, 3, 11], [1, 4, 10], [1, 5, 9], [1, 6, 8], [2, 3, 10], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]]
            helpers.classBaseTest(methods.threeNumberSum(input, 15), [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15], output, "all of the answers")
        })


        describe("Should have a functioning smallest difference", () => {
            const arr1 = [-1, 5, 10, 20, 28, 3];
            const arr2 = [26, 134, 135, 15, 17];
            // helpers.classBaseTest(methods.smallestDifference(arr1, arr2), [arr1, arr2], [28, 26], "It should find the smallest difference of two different number arrays");
            const arr3 = [10, 0, 20, 25, 2000]
            const arr4 = [1005, 1006, 1014, 1032, 1031]
            helpers.classBaseTest(methods.smallestDifference(arr3, arr4), [arr3, arr4], [2000, 1032], "It should find the smallest difference of two different number arrays");

        })

        describe("Should have a functioning moveElementToEnd method", () => {
            const arr1 = [1, 2, 5, 3, 1, 2]
            const answ = [1, 3, 5, 1, 2, 2]
            helpers.classBaseTest(methods.moveElementToEnd(arr1, 2), [arr1, 2], answ, "It should move all the 2's to the end");
        })

        describe("Should have a functioning isMonotonic method", () => {
            helpers.classBaseTest(methods.isMonotonic([]), [[]], true, "Should detect a  montonic array if empty");
            helpers.classBaseTest(methods.isMonotonic([1]), [[1]], true, "Should detect a  montonic array if only one");
            helpers.classBaseTest(methods.isMonotonic([1, 2]), [[1, 2]], true, "Should detect a positive montonic array if only two");
            helpers.classBaseTest(methods.isMonotonic([1, -2]), [[1, -2]], true, "Should detect a negative montonic array if only two");
            helpers.classBaseTest(methods.isMonotonic([1, 2, 3, 4, 5, 6, 7, 8]), [[1, 2, 3, 4, 5, 6, 7, 8]], true, "Should detect a positive montonic array");
            helpers.classBaseTest(methods.isMonotonic([-1, -2, -3, -4, -5, -6, -7, -8]), [[-1, -2, -3, -4, -5, -6, -7, -8]], true, "Should detect a negative montonic array");
            helpers.classBaseTest(methods.isMonotonic([-1, -2, -3, 4, 5, -6, -7, -8]), [[-1, -2, -3, 4, 5, -6, -7, -8]], false, "Should detect a non monotonic array");
        })

        describe("Should have a functioning spiralTraverse method", () => {
            const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
            const input = [
                [1, 2, 3, 4],
                [12, 13, 14, 5],
                [11, 16, 15, 6],
                [10, 9, 8, 7]]
            helpers.classBaseTest(methods.spiralTraverse(input), [input], answer, "Should output an array of the correct steps for a rectangle");
            const input2 = [[1, 2, 3, 4],
            [14, 15, 16, 5],
            [13, 20, 17, 6],
            [12, 19, 18, 7],
            [11, 10, 9, 8]]
            const answer2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            helpers.classBaseTest(methods.spiralTraverse(input2), [input2], answer2, "Should output an array of the correct steps for a rectangle");
            const input3 = [
                [1, 2, 3, 4, 5],
                [16, 17, 18, 19, 6],
                [15, 24, 25, 20, 7],
                [14, 23, 22, 21, 8],
                [13, 12, 11, 10, 9]]
            const answer3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
            helpers.classBaseTest(methods.spiralTraverse(input3), [input3], answer3, "Should output an array of the correct steps for a rectangle");
        })

        describe("Should have a functioning longestPeak", () => {
            const input1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
            const answer1 = 6
            // 0 10 6 5 -1 -3
            helpers.classBaseTest(methods.longestPeak(input1), [input1], answer1, "It should find the longest peak of numbers")

            const input2 = [-1, -2, -3, 1, 2, 3, 4, 5, 4, 3, 2]
            const answer2 = 9
            helpers.classBaseTest(methods.longestPeak(input2), [input2], answer2, "It should find the longest peak of numbers after a decreasing start")

            const input3 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, -4 - 2, -3, 1, 2, 3, 4, 5, 4]
            const answer3 = 10
            helpers.classBaseTest(methods.longestPeak(input3), [input3], answer3, "It should find the longest peak of numbers in two peaks")

        })

        describe("Should have a functioning arrayOfProducts", () => {
            const input1 = [5, 1, 4, 2];
            const answer1 = [8, 40, 10, 20]
            helpers.classBaseTest(methods.arrayOfProducts(input1), [input1], answer1, "It should return an array of products")
        })

        describe("Should have a functioning firstDuplicate", () => {
            const input1 = [1, 2, 4, 3, 2, 4];
            const answer1 = 2
            helpers.classBaseTest(methods.firstDuplicateValue(input1), [input1], answer1, "Should find the first duplicate number in array of numebrs");
            
            const input2 = [1, 2, 3, 4, 5, 6];
            const answer2 = -1
            helpers.classBaseTest(methods.firstDuplicateValue(input2), [input2], answer2, "Should return -1 if no duplicates exsist");


        })


    }
)