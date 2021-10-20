def factorial(num: int, total = 1) -> int:
    """
    This function will find the factorial of a number
    :param num: The factorial value to find
    :returns num: The total factorial value
    """
    if(num == 0):
        return 1
    if(num == 1):
        return total
    else:
        total *= num
        return factorial(num-1, total)


print(factorial(4))