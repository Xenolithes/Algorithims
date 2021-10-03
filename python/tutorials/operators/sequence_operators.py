string1 = "he's "
string2 = "probably "
string3 = "pining "
string4 = "for the "
string5 = "fjords"
print(string1 + string2 + string3 + string4 + string5)
print("hello " * 5)
print("hello " * (5 + 4))
print("hello " * 5 + "4")

today = "friday"
print("day" in today)
print("fri" in today )
print("thur" in today)
print("parrot" in "fjord")

age = 26
print("My age is {0} years".format(age))
print("There are {0} days in {1}, {2}, {3}, {4}, {5}, {6} and {7}"
    .format(31, "Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"))
print("Jan: {2}, Feb: {0}, Mar: {2}, Apr: {1}, May: {2}, Jun: {1}, Jul: {2}, Sep: {1}, Oct: {2}".format(28, 30, 31) )


for i in range(1, 13):
    # The {#:#} notation detones the index and the number of spaces to format with
    print("No. {0:2} squared is {1:3} and cubed is {2:4}".format(i, i**2, i**3))

print()

for i in range(1, 13):
    # The {#:<#} notation detones the index and the number of spaces to format with left alignment
    print("No. {0:2} squared is {1:<3} and cubed is {2:^4}".format(i, i**2, i**3))

print()

for i in range(1, 13):
    # The {#:<#} notation detones the index and the number of spaces to format with left alignment
    print("No. {} squared is {} and cubed is {:4}".format(i, i**2, i**3))


print(f"{age} this is a f string")
print(f"Pi is approximately {22 / 7:12.50f}")