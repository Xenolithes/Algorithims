def sum_numbers(*args):
    """
    This function will add any number of arguments
    :params *args: all then numbers you want to add
    """
    total = 0
    for x in args:
        total += x
    return total