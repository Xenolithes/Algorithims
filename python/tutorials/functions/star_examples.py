numbers = (1, 2, 3, 4, 5)

# you can use the * symbol to unpack all values
# print(*numbers, sep="-")
# print(numbers, sep="-")
# print(1, 2, 3, 4, 5, sep="-")

def test_star(*args):
    print(args)
    for x in args:
        print(x)

test_star(0,1,2,3,4,5,6)