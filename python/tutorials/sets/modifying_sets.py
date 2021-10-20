# numbers = {}
# print(numbers, type(numbers))

# #Do not initilize sets like this
# numbers2 = {*""}
# numbers3 = {*{}}
# numbers4 = set()
# print(numbers2, type(numbers2))
# print(numbers3, type(numbers3))
# print(numbers4, type(numbers4))

# example = set()

# while len(example) < 4:
#     next_value = int(input("Please enter your next numeric value: "))
#     example.add(next_value)

# print(example)


colors = ["blue", "red", "blue", "green", "red", "blue", "white"]
#create a set from the list to remove duplicates
color_set = sorted(set(colors))
print(color_set)
# Create a list of unique colours keeping the order they appeared
unique_colors = list(dict.fromkeys(colors))
print(unique_colors)

print()
print(dict.fromkeys(colors))