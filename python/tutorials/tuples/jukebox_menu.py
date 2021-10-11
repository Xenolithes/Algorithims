from nested_data import albums

print(albums)

while True:
    print("Select an album (invalid choice exits)")
    for index, ( title, artist, year, songs) in enumerate(albums):
        print("{}: {}, {}, {}, {}".format(index + 1, title, artist, year, songs))
    break