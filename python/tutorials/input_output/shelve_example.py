import shelve

with shelve.open('tutorials/input_output/shelve_test') as fruit:
    fruit['orange'] = 'a sweet orange citrus fruit'
    fruit['apple'] = 'good for making cider'
    fruit['lemon'] = 'a sour yellow fruit'
    fruit['grape'] = 'small sweet fruits that grow in bunches'
    fruit['lime'] = 'a sour green fruit'

