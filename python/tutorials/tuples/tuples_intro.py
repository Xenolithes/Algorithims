t = ("a", "b", "c")
t1 = "a", "b", "c"

print(t, t1)

welcome = "Welcome to my Nightmare", "Alice Cooper", 1975
bad = "Bad Company", "Bad Company", 1974
budgie = "Nightflight", "Budgie", 1981
imelda = "More Mayham", "Emilda May", 2011
metallica = "Ride the Lightning", "Metallica", 1984

print(metallica)
print(metallica[0])
print(metallica[1])
print(metallica[2])

# Tuples are immutable and the values are cannot be changed. 

metallica2 = list(metallica)
print(metallica2)
metallica2[0] = "Master of Puppets"
print(metallica2)

title, artist, year = imelda
print(title, artist, year)

table = "Coffee Table", 200, 100, 75, 34.50
print(table[1] * table[2])
name, length, width, height, price = table
print(length * width)

#Unpacking makes the code much more readable and less error prone