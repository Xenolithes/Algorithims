/***
 * 
 * Given an array of integers, find the longest subarray where the absolute
 * difference between any two elements is less than or equal to one
 * 
 * @param {number[]} numArray An unsorted array on integers
 * @return {number} The longest subarray of array
 */

 export function pickingNumbers( numArray ) {
     // Sort the array of values lowest to highest
     numArray.sort()

     let lastValue = numArray[0]
     let longest = 1
     // Determine longest subarray
     for(let i = 0; i < numArray.length; i += 1){
        if(lastValue === numArray[i] || lastValue === numArray[i] - 1){
            longest += 1
        }else if(numArray[i - 1] === numArray[i] || numArray[i - 1] === numArray[i] - 1){
            
        }
     }
 }