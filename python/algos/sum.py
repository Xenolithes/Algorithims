class Solution:
    def two_sum(self, nums: [int], target: int):
        xi = 0
        yi = 0
        for x in nums:
            xi += 1
            for y in nums:
                yi += 1
                if xi != yi and x + y == target:
                    return [xi, yi]
                    
