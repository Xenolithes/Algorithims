choice = "-"
while choice != "0":
    # if choice in set("12345"):
    if choice in {"1", "2", "3", "4", "5"}:
        print(f"You chose {choice}")
    else:
        print("Please choose your option from the list below")
        print("1:\tLearn Python")
        print("2:\tLearn Java")
        print("3:\tGo Swimming")
        print("4:\tHave Dinner")
        print("5:\tGo to bed")
        print("0:\tExit")
    
    choice = input(["Please select an option 1 - 5, 0 to exit"])
