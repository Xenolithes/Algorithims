menu = [
    ["egg", "bacon"],
    ["egg", "sausage", "bacon"],
    ["egg", "spam"],
    ["egg", "bacon", "spam"],
    ["egg", "bacon", "sausage", "spam"],
    ["spam", "bacon", "sausage", "spam"],
    ["spam", "egg", "spam", "spam", "bacon", "spam"],
    ["spam", "sausage", "spam", "bacon", "spam", "tomato", "spam"],
]


""" Write code to print out all the meals in the menu, but with spam removed. """

# for meal in menu:
#     for index in range(len(meal)-1, -1, -1):
#         if meal[index] == "spam":
#             del meal[index]

# print(menu)

for meal in menu:
    for food in meal:
        if food != "spam":
            print(food, start="[ ", sep=", ", end=" ]")
    print()
