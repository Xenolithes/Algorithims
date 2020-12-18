import unittest
from algos.running_sums import runningSum

class TestrunningSum(unittest.TestCase):
   def test_basic(self):
      nums = [ 1, 2, 3]
      result = runningSum(nums)
      self.assertEqual(result, [1, 3, 6])
      return
   def test_negative(self):
      nums = [ -8, -2, -3]
      result = runningSum(nums)
      self.assertEqual(result, [-8, -10, -13])
      return
   def test_mix(self):
      nums = [ -8, 2, -3]
      result = runningSum(nums)
      self.assertEqual(result, [-8, -6, -9])
      return
   def test_mix(self):
      nums = [ -8, 2, -3]
      result = runningSum(nums)
      self.assertEqual(result, [-8, -6, -9])
      return
if __name__ == '__main__':
   unittest.main()