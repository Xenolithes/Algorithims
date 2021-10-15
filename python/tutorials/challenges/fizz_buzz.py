def fizz_buzz(num: int) -> str:
    divisable_by_three = num % 3 == 0
    divisable_by_five = num % 5 == 0
    if(divisable_by_three and divisable_by_five):
        return "fizz buzz"
    elif(divisable_by_five):
        return "buzz"
    elif(divisable_by_three):
        return "fizz"