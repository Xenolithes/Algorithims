import chalk from "chalk"
abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[];

    abstract prepare(): void;
    abstract bake(): void;
    abstract cut(): void;
    abstract box(): void;
}

abstract class PizzaStore {
    abstract orderPizza(type: string): void;
    abstract createPizza(type: string): Pizza;
}
// Chicago Pizza Store
class ChicagoPizzaStore extends PizzaStore {
    orderPizza(type: string) {
        const pizza = this.createPizza(type);
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
    }
    
    createPizza(type: string): Pizza {
        let pizza: Pizza
        switch (type) {
            case "cheese":
                pizza = new ChicagoCheese();
                break;
            default:
                break;
        }
        return pizza
    }
}
class ChicagoCheese extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Cheese Pizza";
        this.dough = "Thick Crust";
        this.sauce = "hearty marinara"
        this.toppings = ["cheese"];
    }
    prepare(){
        console.log(`Prepairing ${chalk.red(this.name)} with the following toppings ${chalk.green(this.toppings.reduce( (previous, topping) => {
            previous += ", " + topping;
            return previous
        }))}`)
    }
    bake(){
        console.log(`Baking ${chalk.red(this.name)}`)
    }
    cut(){
        console.log(`Cutting ${chalk.red(this.name)} into diagnoal slices.`)
    }
    box(){
        console.log(`Boxing ${chalk.red(this.name)}`)
    }
}
export const chicagoStore = new ChicagoPizzaStore();

// New York Pizza Store
export class NewYorkPizzaStore extends PizzaStore {
    orderPizza(type: string) {
        const pizza = this.createPizza(type);
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
    }
    createPizza(type: string): Pizza {
        let pizza: Pizza
        switch (type) {
            case "cheese":
                pizza = new NewYorkCheese();
                break;
            default:
                break;
            }
            return pizza
        }
}

// New York Specific Pizzas

class NewYorkCheese extends Pizza {
    constructor(){
        super();
        this.name = "New York Cheese Pizza";
        this.dough = "Thin Crust";
        this.sauce = "savory marinara"
        this.toppings = ["cheese", "oregano"];
    }
    prepare(){
        console.log(`Prepairing ${chalk.red(this.name)} with the following toppings ${chalk.green(this.toppings.reduce( (previous, topping) => {
            previous += " " + topping;
            return previous
        }))}`)
    }
    bake(){
        console.log(`Baking ${chalk.red(this.name)}`)
    }
    cut(){
        console.log(`Cutting ${chalk.red(this.name)} into square slices`)
    }
    box(){
        console.log(`Boxing ${chalk.red(this.name)}`)
    }
}

export const newYorkStore = new NewYorkPizzaStore()