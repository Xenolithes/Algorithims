
# jabber = open("tutorials/input_output/sample.txt", "r")

# for line in jabber:
#     if 'jabberwock' in line.lower():
#         print(line, end='')

# jabber.close()

# By utilizing the with clause it prevents any errors from occuring
# It basically makes sures that python closes the file

# with open("tutorials/input_output/sample.txt", "r") as jabber_two:
#     for line in jabber_two:
#         if "JAB" in line.upper():
#             print(line, end="")

# with open("tutorials/input_output/sample.txt", 'r') as jabber_three:
#     line = jabber_three.readline()
#     while line:
#         print(line, end="")
#         line = jabber_three.readline()
with open("tutorials/input_output/sample.txt", 'r') as jabber_four:
    lines = jabber_four.readlines()
print(lines)

for line in lines:
    print(line, end="")