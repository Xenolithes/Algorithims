# Write a program to append the time tables to our times_table file
# We want the tables from 2 to 12 

with open('tutorials/challenges/times_table.txt', 'a') as times_table:
    for i in range(13):
        for y in range(13):
            print(f'{y} times {i} equals {y * i}', file=times_table)
        print('*' * 60, file=times_table)