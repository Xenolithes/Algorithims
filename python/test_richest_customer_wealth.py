import unittest
from algos.richest_customer_wealth import maximumWealth

class TestmaximumWealth(unittest.TestCase):
   def test_basic(self):
      input = [[1,2,3],[2,3,4],[5,5,5]]
      result = maximumWealth("", input)
      self.assertEqual(result, 15)
      return
   def test_complex(self):
      input = [[1,-2,3],[2,3,4],[5,-5,5]]
      result = maximumWealth("", input)
      self.assertEqual(result, 9)
      return
   def test_negative(self):
      input = [[-1,-2,-3],[-2,-3,-4],[-5,-5,-5]]
      result = maximumWealth("", input)
      self.assertEqual(result, -6)
      return
   def test_equal(self):
      input = [[1,2,3],[1,2,3],[1,2,3]]
      result = maximumWealth("", input)
      self.assertEqual(result, 6)
      return
if __name__ == '__main__':
   unittest.main()