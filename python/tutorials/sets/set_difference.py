from primes_and_squares import squares_generator, primes_generator

evens = set(range(0, 50, 2))
odds = set(range(1, 50, 2))

print(evens)
print(odds)

primes = set(primes_generator(100))
print(primes)
squares = set(squares_generator(100))
print(squares)

# Set intersection to find only the odd squares
print(odds.intersection(squares))
# Set intersectino to find only the even squares
print(evens.intersection(squares))


print(odds.difference(primes))
print(odds - primes)
print(primes - odds)

# Will remove occurence items in x based on items in y
