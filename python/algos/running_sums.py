# Given an array nums. Return the running sums throughout the list

def runningSum(nums):
   current_sum = 0
   running_list = []
   for number in nums:
      current_sum += number
      running_list.append(current_sum)
   return running_list