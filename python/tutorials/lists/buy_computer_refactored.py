available_parts = [
    "computer",
    "monitor",
    "keyboard",
    "mouse",
    "mouse mat",
    "hdmi cable",
    "dvd drive"
]

current_choice = "-"
computer_parts = []

while current_choice != '0':
    if current_choice in "1234567":
        print("Adding {}".format(current_choice))
        for i, part in enumerate(available_parts):
            if i == int(current_choice):
                computer_parts.append(part)
    else:
        for i, part in enumerate(available_parts):
            print("{}: {}".format(i + 1, part))
    
    current_choice = input()

print(computer_parts)