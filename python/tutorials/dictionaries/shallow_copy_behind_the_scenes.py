lion_list = ["scary", "big", "cat"]
elephant_list = ["big", "grey", "wrinkled"]
teddy_list = ["cuddly", "stuffed"]

animals = {
    "lion" : lion_list,
    "elephant" : elephant_list,
    "teddy" : teddy_list,
}

things = {
    "lion" : lion_list,
    "elephant" : elephant_list,
    "teddy" : teddy_list,
}

print(animals["teddy"])
print(things["teddy"])

print()

teddy_list.append("toy")
animals["teddy"].append("added via 'animals'")
things["teddy"].append("added via 'things'")

print(animals["teddy"])
print(things["teddy"])
