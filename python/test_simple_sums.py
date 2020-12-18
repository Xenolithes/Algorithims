import unittest
from algos.simple_sums import one_plus_one

class Testone_plus_one(unittest.TestCase):
   def test_true(self):
      x = 1
      y = 1
      result = one_plus_one(x, y)
      self.assertEqual(result, 2)
      return
if __name__ == '__main__':
   unittest.main()