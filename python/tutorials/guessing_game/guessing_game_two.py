import random

highest = 10
answer = random.randint(1, highest)

print("Please guess number between 1 and {}: ".format(highest))

guess = int(input())

while guess != answer:
    print("That's is the incorrect guess")
    if(guess < answer):
        print("Try guessing higher: ")
    else:
        print("Try guessing lower: ")
    guess = int(input())

print("That was the correct guess")