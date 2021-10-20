available_parts = {
    "1" : "computer",
    "2" : "montor",
    "3" : "keyboard",
    "4" : "mouse",
    "5" : "hdmi cable",
    "6" : "dvd drive",
}

current_choice = None
computer_parts = {}

while current_choice != "0":
    current_choice = input("Enter Choice Between 1 - 6, with 0 to exit: ")
    if current_choice in available_parts:
        chosen_part = available_parts[current_choice]
        if current_choice in computer_parts:
            print("Removing: {}".format(chosen_part))
            del computer_parts[current_choice]
        else: 
            print("Adding {}".format(chosen_part))
            computer_parts[current_choice] = available_parts[current_choice]
    else:
        print("That is not an acceptable answer please try again")
        for key, value in available_parts.items():
            print("{}: {}".format(key, value))
    print("You currently have")
    for key, value in computer_parts.items():
        print("{}: {}".format(key, value))


# When using in with a dictionary it checks the keys not the items like in a list