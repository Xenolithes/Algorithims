function sortByName(ary) {
    ary.sort(sortingParam)
      return ary
    }
    
    var sortingParam = function (a,b) {
      a = number2words(a);
      b = number2words(b);
      
      if (a > b) {
        return 1;
      }else if(b > a){
        return -1;
      }else{
        return 0
      }
    }
    
    
    // Reusing my solution from kata write out numbers:
    function number2words (number) {
    var numberString = number.toString();
    numberString = reverseString(numberString); 
    var outputMessage = '';
    var numberOfGroups = Math.ceil(numberString.length/3);
    for (var i = 0, x = 3; i < numberOfGroups; i++, x+=3){
    
    var group = numberString.slice((x-3),x);
    
    if(numberOfGroups === 1){ 
     return determineGroupOfThree(group);
    }else if(numberOfGroups === 2 && i === 1){
      
      return outputMessage === '' ? determineGroupOfThree(group) + ' thousand' : determineGroupOfThree(group) + ' thousand ' + outputMessage; 
    }
    
    outputMessage += determineGroupOfThree(group);
    
    }
    }
    
    function lastTwoDigits (number,string) {
    
    if(string === 'zero' && number === '0'){
     return '';
    
    }else if (number === '0'){
    
      return string;
    
    }else if ( (string === 'zero' || string === 'one' || string === 'two' || string === 'three' || string === 'eight' || string === 'five') && number === '1'){
    
     switch (string) {
     case 'zero':
      return 'ten';
     case 'one':
      return 'eleven';
     case 'two':
      return 'twelve';
     case 'three':
      return 'thirteen';
     case 'five':
      return 'fifteen';
     case 'eight':
      return 'eighteen';
    }
    
    }else if(string === 'zero'){
    
    switch (number) {
    case '2':
      return 'twenty';
    case '3':
      return 'thirty';
    case '4':
      return 'forty';
    case '5':
      return 'fifty';
    case '6':
      return 'sixty';
    case '7':
      return 'seventy';
    case '8': 
      return 'eighty';
    case '9': 
      return 'ninety';
    }
    
    } else {
    
    switch (number) {
    case '1': 
      return string + 'teen';
    case '2':
      return 'twenty-' + string;
    case '3':
      return 'thirty-' + string;
    case '4':
      return 'forty-'+ string;
    case '5':
      return 'fifty-' + string;
    case '6':
      return 'sixty-' + string;
    case '7':
      return 'seventy-' + string;
    case '8': 
      return 'eighty-' + string;
    case '9': 
      return 'ninety-' + string;
    }
    
    }
    }
    
    function getDigitString (number) {
    switch (number) {
    case '0':
      return 'zero';
    case '1': 
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8': 
      return 'eight';
    case '9': 
      return 'nine';
    }
    }
    
    
    function reverseString(string){
    return string.split('').reverse().join('');
    }
    
    function determineGroupOfThree(stringOfThreeNumbers){
      var outputMessage = '';
      stringOfThreeNumbers = reverseString(stringOfThreeNumbers);
      var numberArray = stringOfThreeNumbers.split('');
      if(numberArray.length === 3){
        if(numberArray [0] === '0' && numberArray [1] === '0' && numberArray[2] === '0'){
         return '';
        }else if(numberArray[0] === '0'){
         return lastTwoDigits(numberArray[1],getDigitString(numberArray[2])); 
        }else if(numberArray[1] === '0' && numberArray[2] === '0'){
         return getDigitString(numberArray[0]) + ' hundred' 
        }else{
         return getDigitString(numberArray[0]) + ' hundred ' + lastTwoDigits(numberArray[1], getDigitString(numberArray[2]));
        }
      } else if (numberArray.length === 2){
        return lastTwoDigits(numberArray[0],getDigitString(numberArray[1]));
      } else if (numberArray.length === 1){
        return getDigitString(numberArray[0]);
      }
    }