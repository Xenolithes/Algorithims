var recoverSecret = function(triplets) {

  var charObj = {}
  var tripletsArr = []
  
  triplets.forEach(x => (x.forEach ( y => (tripletsArr.push(y)))))
  
  var tripletsSet = new Set (tripletsArr);
  var tripletsArr = [...tripletsSet];
  
  tripletsArr.forEach(x => {
    if(!charObj.hasOwnProperty(x))
      { charObj[x] = {} }
  });
    
  triplets.forEach(x => {
    var temp1 = x[0];
    var temp2 = x[1];
    var temp3 = x[2];
     charObj[temp1][temp2] = 1;
     charObj[temp1][temp3] = 1;
     charObj[temp2][temp1] = -1;
     charObj[temp2][temp3] = 1;
     charObj[temp3][temp1] = -1;
     charObj[temp3][temp2] = -1;
  })
  
  for(var key in charObj) {
    for(var key2 in charObj[key]){
      if(charObj[key][key2] === 1){
      for(var key3 in charObj[key2]){
        if(!charObj[key].hasOwnProperty(key3) && key !== key3 && charObj[key2][key3] === 1){
          charObj[key][key3] = 1
        }
       }
     }else if(charObj[key][key2] === -1){
      for(var key3 in charObj[key2]){ 
        if(!charObj[key].hasOwnProperty(key3) && key !== key3 && charObj[key2][key3] === -1){
          charObj[key][key3] = -1
        }
      }
     }
    }
  }
  var outputStr = ''
  
  console.log(charObj)
  
  while(Object.keys(charObj).length !== 0){
   var tempChar = 'a'
   var tempTotal = -Infinity
   var tempCount = 0
   
   for (var key in charObj){
     for(var key2 in charObj[key]){
       tempCount += charObj[key][key2]
     }
    if(tempCount >= tempTotal){
      tempTotal = tempCount
      tempChar = key
      tempCount = 0
    }else{
      tempCount = 0
    }
  }
   
   outputStr += tempChar
   delete charObj[tempChar]
  }
  
  return outputStr
  }