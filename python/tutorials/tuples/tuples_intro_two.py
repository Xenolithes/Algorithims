albums = [
            ("Bad Company", "Bad Company", 1974),
            ("Nightflight", "Budgie", 1981),
            ("More Mayham", "Emilda May", 2011),
            ("Ride the Lightning", "Metallica", 1984)
        ]
print(len(albums))

for title, artist, year in albums:
    print("title {}, artist {}, year {}".format(title, artist, year))