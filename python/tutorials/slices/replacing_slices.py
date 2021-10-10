computer_parts = [
    "computer",
    "monitor",
    "keyboard",
    "mouse mat",
    "hdmi cable",
    "dvd drive"
]

print(computer_parts)

computer_parts[3] = "trackball"
print(computer_parts)
double_parts = list(computer_parts)
computer_parts[3:] = "trackball"
print(computer_parts)
double_parts[3:] = ["gaming chair"]
print(double_parts)