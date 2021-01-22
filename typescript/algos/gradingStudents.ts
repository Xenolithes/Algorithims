import { OutputFileType } from "typescript";

/*

HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the  grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
Examples

 grade = 84 round to 85  (85 - 84 is less than 3)
 grade = 29 do not round (result is less than 40)
 grade = 57 do not round (60 - 57 is 3 or higher)
Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer, n , the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].

*/

export function gradingStudents(grades: number[]): number[] {

    //Iterate over grades\
    const output = grades.map(grade => {
        //If Grade < 38 do not round
        if (grade >= 38) {
            //If Grade Divisible by 10 remainder is less than three round up to the next 5 by adding the remainder
            const remainder = grade % 10;
            if (remainder > 7) {
                grade += (10 - remainder)
            }else if(remainder > 2 && remainder < 5){
                grade += 5 - remainder;
            }
        }
        return grade
    })
    return output;
}

