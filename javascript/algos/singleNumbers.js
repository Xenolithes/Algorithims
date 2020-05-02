const singleNumber = function(nums) {
  let hash = {}
  nums.forEach(num => {
      if(!hash.hasOwnProperty(num.toString())){
          hash[num.toString()] = num
      }else if(hash.hasOwnProperty(num.toString())){
          delete hash[num.toString()]
      }
  })
  for(let key in hash){
      return hash[key]
  }
};


module.exports = singleNumber