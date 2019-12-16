function flattenAndSort(array) {
    // Good luck, brave code warrior!
    array = needsFlat(array);
    array.sort(compareNumbers);
    console.log(array);
    
    return array;
  }
  
  function needsFlat (array, arr1 = []) {
    for(var i = 0; i < array.length; i++){
      if (typeof array[i] !== 'object'){
        arr1.push(array[i])
      }else if(typeof array[i] === 'object'){
        needsFlat(array[i], arr1)
      }
    }
  
  return arr1;
  }
  
  function compareNumbers (a, b) {
    return a - b
  }