package algorithms;

public class TwoSum {
    public int[] twoSum(int[] nums, int target){
        int [] output = new int[2];
        for(int x = 0; x < nums.length; x++){
            for(int y = 0; y < nums.length; y++){
                if(x != y && (nums[y] + nums[x] == target)){
                    output[0] = x;
                    output[1] = y;
                    return output;
                }
            }
        }
        return output;
    }
}
