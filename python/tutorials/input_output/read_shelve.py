import shelve

with shelve.open('tutorials/input_output/shelve_test') as fruits:
    print(fruits['apple'])
    for fruit in fruits:
        print(f'{fruit} - {fruits[fruit]}')
