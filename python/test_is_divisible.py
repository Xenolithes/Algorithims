import unittest
from algos.is_divisible import is_divisible

class isDivisible (unittest.TestCase):
    def test_True(self):
        data = [12,3,4]
        result = is_divisible(*data)
        self.assertEqual(result, True)
    def test_False(self):
        data = [3,3,4]
        result = is_divisible(*data)
        self.assertEqual(result, False)
    def test_True_Two(self):
        data = [48,3,4]
        result = is_divisible(*data)
        self.assertEqual(result, True)
    def test_False_Two(self):
        data = [8,3,4]
        result = is_divisible(*data)
        self.assertEqual(result, False)
if __name__ == '__main__':
    unittest.main()
