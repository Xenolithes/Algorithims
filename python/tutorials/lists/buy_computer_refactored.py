available_parts = [
    "computer",
    "monitor",
    "keyboard",
    "mouse mat",
    "hdmi cable",
    "dvd drive"
]

current_choice = "-"
computer_parts = []
valid_choices = []
for i in range(1, len(available_parts) + 1):
    valid_choices.append(str(i))
while current_choice != '0':
    if current_choice in valid_choices:
        index = valid_choices.index(current_choice)
        part = available_parts[index]
        if part in computer_parts:
            computer_parts.remove(part)
            print("Removing {}".format(current_choice))
        else:
            print("Adding {}".format(current_choice))
            computer_parts.append(part)
    else:
        for i, part in enumerate(available_parts):
            print("{}: {}".format(i + 1, part))
    
    current_choice = input()

print(computer_parts)