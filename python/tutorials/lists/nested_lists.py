empty_list = []
even = [2, 4, 6, 8, 10]
odd = [1, 3, 5, 7, 9]

numbers = [even, odd]
print(numbers)

for list in numbers:
    for value in list:
        print(value)