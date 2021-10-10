pangram = "The quick brown fox jumps over the lazy dog" # contains every single letter of the alphabet

letter = sorted(pangram)
print(letter)


numbers = [2.3, 4.5, 8.7, 3.1, 9.2, 1.6]
sorted_numbers = sorted(numbers) # The sorted function will not mutate the original list

print(sorted_numbers)
print(numbers)

case_insensitive_sort = sorted(pangram, key=str.casefold)
print(case_insensitive_sort)