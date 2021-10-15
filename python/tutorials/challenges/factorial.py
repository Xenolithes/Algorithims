def factorial(num: int, total = 1) -> int:
    if(num == 0):
        return 1
    
    if(num == 1):
        return total
    else:
        total *= num
        return factorial(num-1, total)


print(factorial(4))