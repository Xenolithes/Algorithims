vehicles = {
    "dream": "Honda 250T",
    "roadster": "BMW R1100",
    "er5": "Kawaski ER5",
    "can-am": "Bombardier Can-Am 250",
    "virago": "Yamaha XV250",
    "tenere": "Yamaha XT650",
    "jimny": "Suzuki Jimny 1.5",
    "fiesta": "Ford Fiesta Ghia 1.4",
}

my_car = vehicles['fiesta']
# my_car = vehicles['Fiesta'] This will error out
print(my_car)
commuter = vehicles["virago"]
print(commuter)
learner = vehicles.get("er5")
#This will return None if the casesensitivity does not match
learner2 = vehicles.get("ER5") 
print(learner)
print(learner2)
# The trade off of using the .get method is that it is slower then directly hitting the key with indexing

vehicles["starfighter"] = "Lockheed F-104"
vehicles["learjet"] = "Bombardier Learjet 75"
vehicles["toy"] = "glider"

#Upgrade the virago
vehicles["virago"] = "Yamaha XV535"

#Deleting keys
del vehicles["starfighter"]
#When using the pop method by adding a value in the second parameter slot that is what will happen if it does not exist
result = vehicles.pop("f1", 1)
print(result)
print()
#This will loop through the keys in a dictionary
# for key in vehicles:
#     print(key, vehicles[key], sep=": ")

# for key, value in vehicles.items():
#     print(key, value, sep=": ")