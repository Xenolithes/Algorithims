parrot = "Norwegian Blue"
letter = input("Enter a character ")
if letter in parrot:
    print('{} is in {}'.format(letter, parrot))
else:
    print('The letter is not in the sentence')

