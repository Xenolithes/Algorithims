from contents_quantities import pantry, recipes
if __name__ == '__main__' and  __package__ is None:
    import sys
    from os import path
    sys.path.append( path.dirname( path.dirname( path.abspath(__file__) ) ) )
    from print_funcs.print_colors import color_print, GREEN,CYAN

shopping_list = {}

display_dict = {}
for index, key in enumerate(recipes):
    display_dict[str(index + 1)] = key

while True:
    print("Please choose your recipe")
    print("-" * 30)
    for key, value in display_dict.items():
        output_string = color_print(f"{key} - {value}", GREEN)
        print(output_string)
    choice = input("What recipe would you like: ")

    if choice =="0":
        break
    elif choice in display_dict:
        choice_value = display_dict[choice]
        for value in recipes[choice_value]:
            if value in pantry:
                remaining_amount = pantry[value] - recipes[choice_value][value]
                if(remaining_amount >= 0 ):
                    print(color_print(f"\t {value}, {remaining_amount} is still left in the pantry", CYAN))
                    pantry[value] = remaining_amount
                else:
                    needed_amount = remaining_amount * -2
                    if( not shopping_list.get(value, False)):
                        shopping_list[value] = needed_amount
                    else:
                        old_value = shopping_list[value]
                        shopping_list[value] += needed_amount
                    print(color_print(f"\t {value}, {needed_amount} is needed", CYAN))
            else:
                print(color_print(f"\t{value}, {recipes[choice_value][value]} is needed to be bought ", CYAN))
                if( not shopping_list.get(value, False)):
                    shopping_list[value] = recipes[choice_value][value]
                else:
                    shopping_list[value] += recipes[choice_value][value]

for (value, quantity) in shopping_list.items():
    print(f"{value}: {quantity} to buy")