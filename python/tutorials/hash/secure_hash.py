import hashlib

print(sorted(hashlib.algorithms_guaranteed))
print(sorted(hashlib.algorithms_available))

python_program = """for i in range(10):
print(i)"""

print(python_program)

original_hash = hashlib.sha256(python_program.encode("utf8"))

print(original_hash.hexdigest())

python_program += "print('code change')"

new_hash = hashlib.sha256(python_program.encode("utf8"))
print()
print(f"SHA256: {new_hash.hexdigest()}")

if new_hash.hexdigest() == original_hash.hexdigest:
    print("The code has not been modified")
else:
    print("The code has been modified")