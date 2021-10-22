text = """Education is not the learning of facts
but the training of the mind to think

– Albert Einstein"""

prepositions = {"as", "but", "by", "down", "for", "in", "of", "on", "to", "with"}

# Add your code here.
quote_word_list = text.split()
quote_word_set = set(quote_word_list)
print(quote_word_set)
preposition_intersection = prepositions.intersection(quote_word_set)

print(preposition_intersection)