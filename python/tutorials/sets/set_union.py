from perscription_data import adverse_interactions

farm_animals = {"sheep", "hen", "horse", "goat"}
wild_animals = {"lion", "elephant", "tiger", "goat", "panther", "horse"}

animals = farm_animals.union(wild_animals)
print(animals)

animals_2 = wild_animals.union(farm_animals)
print(animals_2)

animals_3 = wild_animals | farm_animals
print(animals_3)

meds_to_watch = set()

# for interaction in adverse_interactions:
    # meds_to_watch = meds_to_watch.union(interaction)
    # meds_to_watch = meds_to_watch | interaction
    # meds_to_watch.update(interaction)
    # meds_to_watch |= interaction

meds_to_watch.update(*adverse_interactions)
# print(sorted(meds_to_watch))
print(*sorted(meds_to_watch), sep='\n')