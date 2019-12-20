def is_isogram(string):
    string = string.lower()
    charObj = {}
    for char in string:
        if char in charObj:
            return False
        else:
            charObj[char] = 1
    return True