/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let findTruth = (number) => {
    let square = number * number
    if(square !== num){
      if(square > num){
        return false
      }else{
        return findTruth(number + 1)
      }
    }else{
      return true
    }
  }
  return findTruth(1)
};

module.exports = isPerfectSquare