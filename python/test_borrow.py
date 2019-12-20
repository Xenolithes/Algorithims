from algos.borrow import borrow
import unittest

class TestBorrow(unittest.TestCase):
    def test_lower_case(self):
        data = "THIS IS A TEST"
        result = borrow()
        self.assertEqual(result, 3)


if __name__ == '__main__':
    unittest.main()