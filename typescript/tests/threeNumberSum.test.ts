import{JestHelpers} from "./helpers";
import{numberArrayMethods}from "../algos/numberArrayMethods";

const helpers = new JestHelpers();
const methods = new numberArrayMethods();

describe( 
    "This will test the methods of the numberArrayMethods class", () => {
        helpers.checkInstanceOf(numberArrayMethods, methods, "It should be an instance of the parent class")



        describe("Should have a functioning threeNumberSum", ()=> {
            const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            const output = [[1,2,12], [1,3,11], [1,4,10], [1,5,9], [1,6,8], [2, 3, 10], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]]
            helpers.classBaseTest(methods.threeNumberSum(input, 15), [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15], output, "all of the answers" )
        })


        describe("Should have a functioning smallest difference", () => {
            const arr1 = [-1, 5, 10, 20, 28, 3];
            const arr2 = [26, 134, 135, 15, 17];        
            // helpers.classBaseTest(methods.smallestDifference(arr1, arr2), [arr1, arr2], [28, 26], "It should find the smallest difference of two different number arrays");
            const arr3 = [10, 0, 20, 25, 2000]
            const arr4 = [1005, 1006, 1014, 1032, 1031]
            helpers.classBaseTest(methods.smallestDifference(arr3, arr4), [arr3, arr4], [2000,1032], "It should find the smallest difference of two different number arrays");
        
        })

        describe("Should have a functioning moveElementToEnd method", () => {
            const arr1 = [1, 2, 5, 3, 1, 2]
            const answ = [1, 3, 5, 1, 2, 2]
            helpers.classBaseTest(methods.moveElementToEnd(arr1, 2), [arr1, 2], answ, "It should move all the 2's to the end");
        })

        describe("Should have a functioning isMonotonic method", () => {
            helpers.classBaseTest(methods.isMonotonic([1,2,3,4,5,6,7,8]), [[1,2,3,4,5,6,7,8]], true, "Should detect a positive montonic array");
            helpers.classBaseTest(methods.isMonotonic([-1,-2,-3,-4,-5,-6,-7,-8]), [[-1,-2,-3,-4,-5,-6,-7,-8]], true, "Should detect a negative montonic array");
            helpers.classBaseTest(methods.isMonotonic([-1,-2,-3,4,5,-6,-7,-8]), [[-1,-2,-3,4,5,-6,-7,-8]], false, "Should detect a non monotonic array");
        })

    
    }
)