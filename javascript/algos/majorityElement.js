var majorityElement = function(nums) {
    let numsHash = {}
    for(let i = 0; i < nums.length; i +=1){
      if(!numsHash.hasOwnProperty(nums[i])){
        numsHash[nums[i]] = 1
      }else{
        numsHash[nums[i]]++
      }
      if(numsHash[nums[i]] >= Math.ceil(nums.length/2)){
        return nums[i]
      }
    }
};

module.exports = majorityElement