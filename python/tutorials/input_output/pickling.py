import pickle

# imelda = (
#     'More Mayham',
#     'Imelda May',
#     '2011',
#     ((
#         1, 'Pulling The Rug'
#     ),
#     (
#         2, 'Psycho'
#     ),
#     (
#         3, 'Mayham'
#     ),
#     (
#         4, 'Kentish Town Waltz'
#     ))
# )

# with open('tutorials/input_output/imelda.pickle', 'wb') as pickle_file:
#     pickle.dump(imelda, pickle_file)

# with open('tutorials/input_output/imelda.pickle', 'rb') as pickle_file:
#     imelda2 = pickle.load(pickle_file)

# print(imelda2)

# album, artist, year, track_list = imelda2

# print(album)
# print(artist)
# print(year)
# for track_number, track_name in track_list:
#     print(f'{track_number}: {track_name}')


imelda = (
    'More Mayham',
    'Imelda May',
    '2011',
    ((
        1, 'Pulling The Rug'
    ),
    (
        2, 'Psycho'
    ),
    (
        3, 'Mayham'
    ),
    (
        4, 'Kentish Town Waltz'
    ))
)

evens = range(0, 10, 2)
odds = range(1, 10, 2)

with open('tutorials/input_output/imelda_with_lists.pickle', 'wb') as pickle_file:
    pickle.dump(imelda, pickle_file)
    pickle.dump(evens, pickle_file)
    pickle.dump(odds, pickle_file)
    pickle.dump(2998302, pickle_file)

with open('tutorials/input_output/imelda_with_lists.pickle', 'rb') as pickle_file:
    imelda2 = pickle.load(pickle_file)
    even_list = pickle.load(pickle_file)
    odd_list = pickle.load(pickle_file)
    x = pickle.load(pickle_file)

print(imelda2)

album, artist, year, track_list = imelda2

print(album)
print(artist)
print(year)
for track_number, track_name in track_list:
    print(f'{track_number}: {track_name}')

for number in even_list:
    print(number)

print('*' * 60)

for number in odd_list:
    print(number)

print('*' * 60)

print(x)