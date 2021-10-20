a = b = c = d = e = f = 42
print(c)

x, y, z = 1, 2, 76
print(x)
print(y)
print(z)

print("Unpacking a tuple")

data = 1, 2, 76
a, b, c = data
print(a),
print(b)
print(c)

#You can unpack lists as well, however if you add an item
#Before unpacking it can break, this is why tuples are great
#Because you can always unpack a tuple