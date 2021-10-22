small_ints = set(range(21))

print(small_ints)

small_ints.discard(10)
small_ints.remove(11)
print(small_ints)


small_ints.discard(99)
print(small_ints)

#This will break on execution
# small_ints.remove(99)
# print(small_ints)

# 1. Ensure that, when we're done, something no longer exists
#    In this case, we don't care if it was already there
#    or not - we just want it gone

# 2. Remove somthing if it exists, but provide some sort
#    of notifiation if it doesn't

# These are different use cases and Python provides one for
# each discard for 1. and remove for 2.