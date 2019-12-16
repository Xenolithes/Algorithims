//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, i = 0) {
   
    num = num.toString();
    
    if(num.length === 1){
      return i;
    }
   
    let arr1 = num.split('');
    arr1 = arr1.map(x => parseInt(x));
    let result = arr1.reduce( (x,y) => y *= x);
    i++;
    return persistence(result, i)
 }