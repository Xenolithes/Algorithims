# The binary search algorithm is the most efficient way of finding an item in an ordered list.
# It forms thebasis for teh data structures that database programs, such as SQLite and ORacle, use for storing the database keys.
# That allows for very fast searching off the data.


import random

highest = 1000
mid = 500
lowest = 1
answer = random.randint(lowest, highest)

while mid != answer:
    if mid < answer:
        lowest = mid
    elif mid > answer:
        highest = mid
    else:
        break
    mid = ((highest - lowest) // 2 ) + lowest
    print(mid, answer)
print("found")