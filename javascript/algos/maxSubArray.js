const maxSubArray = function(nums) {
    let current = -Infinity;
    let last = -Infinity;
    nums.forEach(num => {
      if(current === -Infinity){
        current = num
      }else{
        current += num
      }
      if(current > last){
        last = current
      }
      if(current <= 0){
        current = 0
      }
      
    })
    return last
};

module.exports = maxSubArray