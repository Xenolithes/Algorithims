def fibonacci(n):
    """ 
        Will return the number at the nth positionin the fibonacci sequence
        :param n: nth position
        :return: nth number in fibonacci sequence
    """
    x = 0
    y = 1
    z = 0
    if n == 1:
        return x
    elif n == 2 or n == 3:
        return y

    for i in range(n+1):
        if i == n - 1:
            return y
        else:
            z = x + y
            x = y
            y = z

def fibonacci2(n):
    if 0 <= n <= 1:
        return n
    n_minus1, n_minus2 = 1, 0
    result = None
    for f in range(n - 1):
        result = n_minus2 + n_minus1
        n_minus2 = n_minus1
        n_minus1 = result
    return result


    
print(fibonacci2(1))
print(fibonacci2(2))
print(fibonacci2(3))
print(fibonacci2(4))
print(fibonacci2(5))
print(fibonacci2(6))
