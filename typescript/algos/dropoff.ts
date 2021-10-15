// Evan Schweitzer

// Technical Questions

// Factorial
console.log('Factorial:')

// Write a function which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g., 4! is 24,
// because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.


//Input num
//Constraints
function factorial(num: number, total=1) {
    if(num == 1){
        return total * 1
    } else {
        total *= num
        return factorial(num-1, total)
    }
}

// Factorial Sample Results
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

// Fibonacci
// console.log('Fibonacci:')

// Write a function that accepts a number and returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8 ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n: number){
    if(n == 0 || n == 1 || n == 2){
        return 1
    }
    function fibonacci(currentPosition: number, nMinus1: number, nMinus2: number ){
        if(currentPosition == n){
            return nMinus1 + nMinus2
        }else{
            let total = nMinus1 + nMinus2
            nMinus2 = nMinus1
            nMinus1 = total
            return fibonacci(currentPosition+1, nMinus1, nMinus2 )
        }
    }

    return fibonacci(3, 1, 1)
}

// Factorial Sample Results
// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465ß

// Technical Questions

// Factorial
console.log('Factorial:')

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g., 4! is 24,
// because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.

// function factorial(num) {
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }

// // Factorial Sample Results
// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

// // Fibonacci
// console.log('Fibonacci:')

// // Write a recursive function that accepts a number and returns the nth number in the Fibonacci sequence.
// // The Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8 ... which starts with 1 and 1,
// // and where every number thereafter is equal to the sum of the previous two numbers.

// function fib(num){
//   if (num === 0) {
//     return 0;
//   }else if (num === 1) {
//     return 1;
//   }
//   return fib(num - 1) + fib(num - 2);
// }

// // Factorial Sample Results
// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465ß