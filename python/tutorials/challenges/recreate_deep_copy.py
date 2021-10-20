def copy_dict( dict_to_copy: dict ) -> dict:
    copy_of_dict = {}
    list_of_keys = dict_to_copy.keys()
    for key in list_of_keys:
        if(isinstance(dict_to_copy[key], list)):
            copy_of_dict[key] = copy_list(dict_to_copy[key])
        elif(isinstance(dict_to_copy[key], dict)):
            copy_of_dict[key] = copy_dict(dict_to_copy[key])
        else:
            copy_of_dict[key] = dict_to_copy[key]
    return copy_of_dict
        

def copy_list( list_to_copy: list ) -> list:
    copy_of_list = []
    for item in list_to_copy:
        if(isinstance(item, list)):
            copy_of_list.append(copy_list(item))
        elif(isinstance(item, dict)):
            copy_of_list.append(copy_dict(item))
        else:
            copy_of_list.append(item)
    return copy_of_list

def deep_copy( object_to_copy ):
    if(isinstance(object_to_copy, list)):
        return copy_list(object_to_copy)
    elif(isinstance(object_to_copy, dict)):
        return copy_dict(object_to_copy)
    else:
        return object_to_copy

animals_lists = {
    "lion" : ["scary", "big", "cat"],
    "elephant" : ["big", "grey", "wrinkled"],
    "teddy" : ["cuddy", "stuffed", [ "sweet" ]],
}

# Performs a deep copy
things_lists = deep_copy(animals_lists)

# things_lists["teddy"].append("toy")

print(animals_lists["teddy"])
print(things_lists["teddy"])

print(id(animals_lists["teddy"]))
print(id(things_lists["teddy"]))

print(id(animals_lists["teddy"][2]))
print(id(things_lists["teddy"][2]))