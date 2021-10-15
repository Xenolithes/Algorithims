available_parts = {
    "1" : "computer",
    "2" : "montor",
    "3" : "keyboard",
    "4" : "mouse",
    "5" : "hdmi cable",
    "6" : "dvd drive",
}

current_choice = None
while current_choice != "0":
    current_choice = input("Enter Choice Between 1 - 6, with 0 to exit: ")
    if current_choice in available_parts:
        chosen_part = available_parts[current_choice]
        print("Adding {}".format(chosen_part))
    else:
        print("That is not an acceptable answer please try again")

# When using in with a dictionary it checks the keys not the items like in a list