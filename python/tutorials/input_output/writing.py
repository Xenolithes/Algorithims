# cities = ['Fairfax', 'Arlington', 'Alexandria', 'Falls Church', 'Annandale']

# with open('tutorials/input_output/cities.txt', 'w') as city_file:
#     for city in cities:
#         print(city, file=city_file)

cities = []

with open('tutorials/input_output/cities.txt', 'r') as city_file:
    for city in city_file:
        cities.append(city.strip('\n'))

print(cities)
for city in cities:
    print(city)
