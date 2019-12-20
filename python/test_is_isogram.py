import unittest
from algos.is_isogram import is_isogram

class TestIsogram(unittest.TestCase):
    def test_True(self):
        data = 'Dermatoglyphics'
        result = is_isogram(data)
        self.assertEqual(result, True)
    def test_False(self):
        data = 'aba'
        result = is_isogram(data)
        self.assertEqual(result, False)
    def test_Mixed_Case(self):
        data = 'MoOse'
        result = is_isogram(data)
        self.assertEqual(result, False)
    def test_Empty(self):
        data = ''
        result = is_isogram(data)
        self.assertEqual(result, True)
        
if __name__ == '__main__':
    unittest.main()