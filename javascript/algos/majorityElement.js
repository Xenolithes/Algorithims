var majorityElement = function(nums) {
    let gadget = 0;
    let cnt = 0;
        for(let i = 0; i < nums.length; i++) {
            gadget = cnt === 0 ? nums[i] : gadget; 
            if(nums[i] === gadget) cnt++; 
            else cnt--; 
        }
    return gadget;
};

module.exports = majorityElement


    // let numsHash = {}
    // for(let i = 0; i < nums.length; i +=1){
    //   if(!numsHash.hasOwnProperty(nums[i])){
    //     numsHash[nums[i]] = 1
    //   }else{
    //     numsHash[nums[i]]++
    //   }
    //   if(numsHash[nums[i]] >= Math.ceil(nums.length/2)){
    //     return nums[i]
    //   }
    // }