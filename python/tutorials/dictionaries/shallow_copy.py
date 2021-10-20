animals = {
    "lion" : "scary",
    "elephant": "big",
    "teddy": "cuddly",
}

things = animals
animals["teddy"] = "toy"
print(things["teddy"])


animals_lists = {
    "lion" : ["scary", "big", "cat"],
    "elephant" : ["big", "grey", "wrinkled"],
    "teddy" : ["cuddy", "stuffed"],
}

things_list = animals_lists.copy()

things_list["teddy"].append("toy")

print(animals_lists)