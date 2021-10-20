d = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
}

pantry_items = ['chicken', 'spam', 'egg', 'bread', 'lemon']

# Values 
v = d.values()
print(v)
d[10] = "ten"
print(v)
# Views are really good for determining if a value is in a dictionary
print("four" in v)
print("eleven" in v)

d2 = {
    7: "Lucky numer seven",
    10: "ten",
    3: "this is the third item",
}

d.update(d2)
for key, value in d.items():
    print(key, value)

# This will create a new dictionary from the keys of another dictionary with values
new_dict = dict.fromkeys(pantry_items, 0)
print(new_dict)

# This will create a list of keys
keys = d.keys()
print(keys)