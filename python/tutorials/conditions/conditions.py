age = int(input("how old are you?"))

if age >= 16 and age <= 65:
    print("Have a good day at work")

print("-" * 80)

if age < 16 or age > 65:
    print("Enjoy your free time")
else:
    print("Enjoy work")


day = "Saturday"
temperature = 30
raining = True

if day == "Saturday" and temperature > 27 or not raining:
    print("Go Swimming")
else:
    print("Learn Python")


