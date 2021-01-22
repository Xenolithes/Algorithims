import { gradingStudents } from "../algos/gradingStudents";
import { JestHelpers } from "./helpers/jesthelpers"

const helpers = new JestHelpers();

describe("Should have a functioning grading of students", () => {
    const input1 = [73, 67, 38, 33];
    const answer1 = [75, 67, 40, 33];
    helpers.basicTest(gradingStudents, [input1], answer1, "Should Round the grades properly")

    for (let i = 0; i < 100; i += 1) {
        let input = [i]
        let output: number;
        if (i < 37) {
            output = i
        } else if (i > 37 && i <= 40) {
            output = 40;
        } else if (i < 43) {
            output = i
        } else if (i >= 43 && i <= 45) {
            output = 45
        } else if (i <= 47) {
            output = i
        } else if (i > 47 && i <= 50) {
            output = 50;

        } else if (i < 53) {
            output = i
        } else if (i >= 53 && i <= 55) {
            output = 55
        } else if (i <= 57) {
            output = i
        } else if (i > 57 && i <= 60) {
            output = 60;
        }
        else if (i < 63) {
            output = i
        } else if (i >= 63 && i <= 65) {
            output = 65
        } else if (i <= 67) {
            output = i
        } else if (i > 67 && i <= 70) {
            output = 70;
        }
        else if (i < 73) {
            output = i
        } else if (i >= 73 && i <= 75) {
            output = 75
        } else if (i <= 77) {
            output = i
        } else if (i > 77 && i <= 80) {
            output = 80;
        }
        else if (i < 83) {
            output = i
        } else if (i >= 83 && i <= 85) {
            output = 85
        } else if (i <= 87) {
            output = i
        } else if (i > 87 && i <= 90) {
            output = 90;
        }
        else if (i < 93) {
            output = i
        } else if (i >= 93 && i <= 95) {
            output = 95
        } else if (i <= 97) {
            output = i
        } else if (i > 97 && i <= 100) {
            output = 100;
        }
        helpers.basicTest(gradingStudents, [input], [output], "It should round correctly")
    }
})
