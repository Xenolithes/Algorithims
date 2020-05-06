var findComplement = function(num) {
  let val = num.toString(2) //?
  let newString = ""
  for(var i = 0; i < val.length; i++){
    if(val[i] === "1"){
      newString += "0"
    }else{
      newString += "1"
    }
  }
  return parseInt(newString, 2)
};
module.exports = findComplement;
