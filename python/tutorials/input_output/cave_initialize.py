import shelve

with shelve.open("tutorials/input_output/locations") as locations:
    locations["0"] = {"desc": "You are sitting in front of a computer learning Python",
                 "exits": {},
                 "namedExits": {}},
    locations["1"] = {"desc": "You are standing at the end of a road before a small brick building",
                 "exits": {"W": 2, "E": 3, "N": 5, "S": 4, "Q": 0},
                 "namedExits": {"2": 2, "3": 3, "5": 5, "4": 4}},
    locations["2"] = {"desc": "You are at the top of a hill",
                 "exits": {"N": 5, "Q": 0},
                 "namedExits": {"5": 5}},
    locations["3"] = {"desc": "You are inside a building, a well house for a small stream",
                 "exits": {"W": 1, "Q": 0},
                 "namedExits": {"1": 1}},
    locations["4"] = {"desc": "You are in a valley beside a stream",
                 "exits": {"N": 1, "W": 2, "Q": 0},
                 "namedExits": {"1": 1, "2": 2}},
    locations["5"] = {"desc": "You are in the forest",
                 "exits": {"W": 2, "S": 1, "Q": 0},
                 "namedExits": {"2": 2, "1": 1}}
    
    print(locations["1"])

with shelve.open("tutorials/input_output/vocabulary") as vocabulary:
    vocabulary["Q"] = "QUIT"
    vocabulary["N"] = "NORTH"
    vocabulary["S"] = "SOUTH"
    vocabulary["E"] = "EAST"
    vocabulary["W"] = "WEST"
    vocabulary["1"] = "ROAD"
    vocabulary["2"] = "HILL"
    vocabulary["3"] = "BUILDING"
    vocabulary["4"] = "VALLEY"
    vocabulary["5"] = "FOREST"