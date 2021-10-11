from nested_data import albums

SONGS_LIST_INDEX = 3
SONG_TITLE_INDEX = 1
while True:
    print("Select an album (invalid choice exits)")
    print("0: Exit")
    for index, ( title, artist, year, songs) in enumerate(albums):
        print("{}: {}".format(index + 1, title))
    
    choice = int(input())
    if 1 <= choice <= len(albums):
        songs_list = albums[choice-1][SONGS_LIST_INDEX]
    elif choice == 0:
        break
    else:
        print("That is an invalid song choice please try again.")
        continue

    print("Please Choose your song:")
    for index, (track_number, song) in enumerate(songs_list):
        print("{}: {}".format(index+1, song))
    
    song_choice = int(input())
    if  0 < song_choice <= len(songs_list):
        print("Playing: {}".format(songs_list[song_choice-1][SONG_TITLE_INDEX])
        )
    print( "=" * 40)


print("Thanks Please Come Again")