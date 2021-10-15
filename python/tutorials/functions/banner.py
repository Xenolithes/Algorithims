def banner_text(text = " ", screen_width = 80):
    
    if len(text) > screen_width - 4:
        raise ValueError("String {0} is larger then specified width {1}".format(text, screen_width))
    if text == "*":
        print("*" * screen_width)
    else:
        centred_text = text.center(screen_width - 4)
        output_string =  "**{0}**".format(centred_text)
        print(output_string)

banner_text("*")
banner_text("ALways look on the bright side of life...")
banner_text("If life seems jolly rotten")
banner_text("There's something you've forgotten!")
banner_text("And that's to laugh and smile and dance and sing.")
banner_text()
banner_text("When you're feeling in the dumps.")
banner_text("Don't be silly chumps")



banner_text("This is a string that is way way way way way way way way too long even even even even even longer", 120)