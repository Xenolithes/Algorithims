comma_seperated_number_string = input("Enter a number string seperated by commas")
number_list = comma_seperated_number_string.split(',')
for i in range(len(number_list)):
    number_list[i] = int(number_list[i])
output = number_list[0]+number_list[1]-number_list[2]
print(output)