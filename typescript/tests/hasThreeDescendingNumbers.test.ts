/*
 * Create a function that takes an array of integers and returns
 * 1 if there are at least three descending consecutive integers
 * in any part of the array. Return 0 if not.
 */

const hasThreeDescendingNumbers = (array: number[]): 1 | 0 => {
    // ...
    // If the arrays length is less than three then to return 0 
    if( array.length < 3){
        return 0
    }
    // Counter
    let counter = 1;
    // Inital value = the first item in the array 
    let previousValue = array[0];
    // Iterate over the array and increment the counter when consecutive decreasing integers are found, if not reset the couter 
    for(let i = 0; i < array.length; i += 1){
        // if the current value is equal to previous value - 1 then increment the counter
        if(array[i] === previousValue - 1){
            counter += 1;
        }else{
            counter = 1
        }
        // If the counter is ever equal to three return 1
        if(counter >= 3){
            return 1
        }
        previousValue = array[i]
    }
    // return 0 if the counter does not equal three or greater
    return 0
  };
  
  const assert = require('assert').strict;
  assert.equal(
    hasThreeDescendingNumbers([2, 6, 5, 4, 1]),
    1,
  );
  
  assert.equal(
    hasThreeDescendingNumbers([3, 2, 1]),
    1,
  );
  
  assert.equal(
    hasThreeDescendingNumbers([2, 9, 0, 2, 7, 1, 3]),
    0,
  );

  assert.equal(
      hasThreeDescendingNumbers([6, 3, 2]),
      0
  )