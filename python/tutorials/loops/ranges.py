for i in range(1, 21):
    print("i is now {}".format(i))

# If you don't specify a start value it will automatically start at 0

for i in range(10):
    print("i is now {}".format(i))

for i in range(0, 10, 2):
    print("i is stepping to {}".format(i))

# you can also step down instead of up

for i in range(10, 0, -2):
    print("i is stepping down at {}".format(i))

# You can also use ranges in if statements

age = 43
if age in range(16, 66):
    print("this is in range")