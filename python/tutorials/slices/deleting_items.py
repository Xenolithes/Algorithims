data = [ 4, 5, 104, 105, 110, 120, 130, 130, 150, 160, 170, 183, 187, 188, 191, 350, 360 ]
more_data = list(data)
extra_data = list(data)
print(data)
del data[0:2]
print(data)


min_value = 100
max_value = 200

for index, value in enumerate(more_data):
    if (value < min_value ) or (value > max_value):
        del more_data[index]
        # index -= 1 this would work in C or JAVA however in python
        # since the value is reassigned at line 11 each time this solution does not work.

print(more_data)

stop = 0
for index, value in enumerate(extra_data):
    if value >= min_value:
        stop = index
        break

print(stop)
del extra_data[:stop]
print(extra_data)

start = 0
for index, value in enumerate(extra_data):
    if value >= max_value:
        start = index
        break
del extra_data[start:]
print(extra_data)