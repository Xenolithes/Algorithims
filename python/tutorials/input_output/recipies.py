import shelve

# blt = ['bacon', 'tomato','bread']
# beans_on_toast = ['beans', 'bread']
# scrambled_eggs = ['eggs','butter','milke']
soup = ['tin of soup']
# pasta = ['pasta', 'cheese']

with shelve.open('tutorials/input_output/recipes_db', writeback=True) as recipes:
    # recipes['blt'] = blt
    # recipes['beans on toast'] = beans_on_toast
    # recipes['scrambled eggs'] = scrambled_eggs
    # recipes['soup'] = soup
    # recipes['pasta'] = pasta


    # When writeback is False (Default) 
    # temp_blt = recipes['blt']
    # temp_blt.append('butter')
    # recipes['blt'] = temp_blt

    # temp_pasta = recipes['pasta']
    # temp_pasta.append('tomatos')
    # recipes['pasta'] = temp_pasta

    # recipes['soup'].append('croutons')

    #Showing how writeback is caching the changes
    recipes["soup"] = soup
    recipes.sync()
    soup.append('cream')

    for recipe in recipes:
        print(f'{recipe} chosen')
        for ingrediant in recipes[recipe]:
            print(ingrediant)

