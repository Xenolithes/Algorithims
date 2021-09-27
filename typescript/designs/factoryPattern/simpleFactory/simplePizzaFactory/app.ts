import {pizzaType, simplePizzaFactory} from "./factory"

const pizza = simplePizzaFactory.createPizza("cheese");
pizza.prepare()
pizza.bake()
pizza.cut()
pizza.box()

const pizza2 = simplePizzaFactory.createPizza("pepperoni");
pizza2.prepare()
pizza2.bake()
pizza2.cut()
pizza2.box()


const pizza3 = simplePizzaFactory.createPizza("veggie");
pizza3.prepare()
pizza3.bake()
pizza3.cut()
pizza3.box()