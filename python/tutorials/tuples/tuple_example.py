for t in enumerate("abcdefghijk"):
    index, character = t
    print(t) # enumerate returns a tuple that is then unpacked
    print(index, character)