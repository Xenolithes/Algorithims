parrot = "Norwegian Blue"

print(parrot)
print(parrot[3])
print(parrot[4])
print()
print(parrot[3])
print(parrot[6])
print(parrot[8])


print()

print(parrot[-11])
print(parrot[-1])
print()
print(parrot[-11])
print(parrot[-8])
print(parrot[-6])

print(parrot[0:6])
print(parrot[3:5])
print(parrot[0:9])
print(parrot[:9])
print(parrot[10:14])
print(parrot[10:])
print(parrot[:6] + parrot[6:])
print(parrot[:])
print(parrot[-4:-2])
print(parrot[-4: 12])
print(parrot[-14: -8])


print(parrot[0:6:2]) #From index 0 up to 6 print every second step
print(parrot[0:6:3]) #From index 0 up to 6 print every third step

number = "9,223;372:086 854,775:807"
seperators = number[1::4]
print(seperators)
values = "".join(char if char not in seperators else " " for char in number).split()
print(values)
print([int(val) for val in values])


letters = "abcdefghijklmnopqrstuvwxyz"
backwards = letters[25:-27:-1]
doubleBackwards = letters[::-1] #This is a slicing idium to reverse an list
print(backwards)
print(doubleBackwards)
qpo = letters[-10:-13: -1]
print(qpo)
print(letters[16:13:-1])
edcba = letters[4:-27:-1]
print(edcba)
print(letters[4::-1])
last8 = letters[-1:-9:-1]
print(last8)
print(letters[:-9:-1])

print(letters[-4:]) #The last four elements
print(letters[-1:])# Only the last element

#This is an important distinction because the first line
#Will not cause an error if the string or list is empty
print(letters[:1]) # Only the first element
print(letters[0]) # Access only the first 
