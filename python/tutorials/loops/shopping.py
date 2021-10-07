shopping_list = ["milk", "pasta", "eggs", "spam", "bread", "rice"]

# for item in shopping_list:
#     if item != "spam":
#         print("Buy " + item)

# The continue key word causes the for loop to immediately go to the next iteration.
for item in shopping_list:
    if item == "spam":
        continue
    print("Buy " + item)


# When a for loop encounters a break statement it immediately stops the for loop
for item in shopping_list:
    if item == "spam":
        break
    print("Buy break " + item)

item_to_find = "pasta"
found_at = None

if item_to_find in shopping_list:
    found_at = shopping_list.index(item_to_find)

print(found_at)


item_to_find = "bread"
found_at = None

for index in range(len(shopping_list)):
    if shopping_list[index] == item_to_find:
        found_at = index

print(found_at)