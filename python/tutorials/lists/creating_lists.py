from typing import OrderedDict


empty_list = []
even = [2, 4, 6, 8 ]
odd = [1, 3, 5, 7, 9]

numbers = even + odd
print(numbers)

sorted_numbers = sorted(numbers)
print(numbers)
print(sorted_numbers)

digits = sorted("12323465")
print(digits) # A list of strings

more_lists = list("12362341")
print(more_lists)

more_numbers = list(numbers)
print(more_numbers)
print(numbers is more_numbers)
print(numbers == more_numbers)

sliced_numbers = numbers[:]
print(sliced_numbers)

#The most effcient way to copy an array is to use the copy method
copied_list = numbers.copy()
print(copied_list is numbers)
print(copied_list == numbers)
