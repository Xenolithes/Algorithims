function getCount(str) {
    var vowelsCount = 0;
    //convert the input string into an array
    var array = str.split('');
    
    // loop through the array
    for (var i = 0; i < array.length; i++) {
    // if the element is equal to a,e,i,o,u 
      if(array[i] === 'a' || array[i] === 'e' ||array[i] ===  'i' || array[i] === 'o' || array[i] === 'u') {
        // add 1 to the counter
        vowelsCount ++;
      }
    // if not continue on; no else statement needed
    }
    return vowelsCount;
    // return the vowels counter
    // enter your majic here
  }
  
  
  // function getCount(string) {
  //   var vowelsCount = 0;
  //   //Search for instances of a,e,i,o,u
  //   //g flag means match any instance of the string regardless of position within string
  //   //i flag means to ignore captical case and match anyways
  //   
  //   var vowels = /[aeiou]/gi
    
  //   //within string match occurence of the regular expression, then store them in an array
  //   //Then to count the number of occurence within the string take the length of the array.
  //   var vowelsCount = (string.match(vowels) || []).length
    
  //   return vowelsCount;
  
  