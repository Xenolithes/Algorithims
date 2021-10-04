for i in range(1, 13):
    print("No. {}s quared is {} and cubed is {:4}".format(i, i ** 2, i ** 3))
print("*" * 80)


name = input("Please enter your name: ")
age = input("How old are you, {}?".format(name))
print(age)

if int(age) >= 18:
    print("You are old enough to vote")
elif int(age) == 17:
    print("Almost there wait only one more year")
else:
    print("Please come back in {} years".format(18 - int(age)))

