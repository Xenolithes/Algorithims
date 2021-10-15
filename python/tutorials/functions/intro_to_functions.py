def multiply(x, y):
    result = x*y
    return result


answer = multiply(10.5, 4)
print(answer)

#Positional arguments are assigned to the parameters in the order they appeare.
#In fact the arguments in this example are really called positional-or-keyword arguments. 

forty_two = multiply(6, 7)
print(forty_two)

for val in range(1, 5):
    two_times = multiply(2, val)
    print(two_times)


def is_palindrome(string):
    backwards = string[::-1]
    return backwards == string


word = ''.join(input("Please enter a palindrome: ").casefold().split())

if is_palindrome(word):
    print("{} is a palindrome".format(word))
else:
    print("{} is not a palindrome".format(word))
