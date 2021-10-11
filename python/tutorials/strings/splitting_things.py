panagram = "The quick brown fox jumps over the lazy dog"
output = panagram.split()
print(output)

numbers = "123,53,123,7532,12,234"
number_output = numbers.split(",")
print(number_output)

generated_list =  [ '9', ' ',
                    '2', '2', '3', ' ',
                    '3', '7', '2', ' ',
                    '0', '3', '6', ' ',
                    '8', '5', '4', ' ',
                    '7', '7', '5', ' ',
                    '8', '0', '7'
                ]
values = "".join(generated_list)
print(values)
split_values = values.split()
print(split_values)

for index, number_string in enumerate(split_values):
    split_values[index] = int(number_string)

print(split_values)
