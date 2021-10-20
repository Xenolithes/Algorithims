from contents_quantities import pantry

chicken_quantity = pantry.setdefault("chicken", 0)
print(chicken_quantity)

bean_quantity = pantry.setdefault("beans", 0)
print(bean_quantity)


for key, value in pantry.items():
    print(f"{key}: {value}")