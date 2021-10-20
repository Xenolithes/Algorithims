import copy

animals_lists = {
    "lion" : ["scary", "big", "cat"],
    "elephant" : ["big", "grey", "wrinkled"],
    "teddy" : ["cuddy", "stuffed"],
}

# Performs a shallow copy
things_lists = animals_lists.copy()

# Performs a deep copy
# things_lists = copy.deepcopy(animals_lists)

things_lists["teddy"].append("toy")

print(animals_lists["teddy"])
print(things_lists["teddy"])

print(id(animals_lists["teddy"]))
print(id(things_lists["teddy"]))