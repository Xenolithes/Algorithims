# When an object is described as immutable, that means it can't be changed
# The following immutable types are built into python
# int, float, bool, str, tuple, frozenset, bytes

result = True
another_result = result
print(id(result))
print(id(another_result))

# id returns the "identity" of an object
# "guaranteed to be unique and constant for this object during its lifetime"

# CPython will return the memory address, but not all pythons will do that
# It is a good way to tell if an object has changed

result = False
print(id(result))

# The id will have changed for result because of the immutability of the True object
string_result = "Correct"
another_string_result = string_result
print(id(string_result))
print(id(another_string_result))

string_result += "ish"
print(id(string_result))
