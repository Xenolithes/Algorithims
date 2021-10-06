name = input("Please enter a name: ")
age = int(input("Please enter an age: "))

if name and 18 <= age < 31:
    print("Welcome to the holiday")
else:
    print("Sorry you don't qualify")