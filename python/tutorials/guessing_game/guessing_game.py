answer = 5

print("Please guess a number between 1 and 10: ")
guess = int(input())

if guess < answer:
    print("you guess was too low, please guess higher: ")
    if guess == answer:
        print("Well done, you guessed the right answer")
    else:
        print("Sorry, you have not guessed correctly")
elif guess > answer:
    print("Your answer was too high, guess again")
    guess = int(input())
    if guess == answer:
        print("Well done, you guessed the right answer")
    else:
        print("Sorry, you have not guessed correctly")
else:
    print("That was the correct guess")