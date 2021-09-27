import chalk from 'chalk'

abstract class Pizza {
    description: string;
    abstract prepare(): void;
    abstract bake(): void;
    abstract cut(): void;
    abstract box(): void;
}

class CheesePizza extends Pizza {
    constructor(){
        super();
        this.description = "Cheese";
    }
    prepare() {
        console.log(`${chalk.red("Preparing")} a ${chalk.blue(this.description)} pizza`)
    }
    bake() {
        console.log(`${chalk.red("Baking")} a ${chalk.blue(this.description)} pizza`)
    }
    cut () {
        console.log(`${chalk.red("Cutting")} a ${chalk.blue(this.description)} pizza`)
    }
    box() {
        console.log(`${chalk.red("Boxing")} a ${chalk.blue(this.description)} pizza`)
    }
}
class PepperoniPizza extends Pizza {
    constructor(){
        super();
        this.description = "Pepperoni";
    }
    prepare() {
        console.log(`${chalk.red("Preparing")} a ${chalk.blue(this.description)} pizza`)
    }
    bake() {
        console.log(`${chalk.red("Baking")} a ${chalk.blue(this.description)} pizza`)
    }
    cut () {
        console.log(`${chalk.red("Cutting")} a ${chalk.blue(this.description)} pizza`)
    }
    box() {
        console.log(`${chalk.red("Boxing")} a ${chalk.blue(this.description)} pizza`)
    }
}
class ClamPizza extends Pizza {
    constructor(){
        super();
        this.description = "Clam";
    }
    prepare() {
        console.log(`${chalk.red("Preparing")} a ${chalk.blue(this.description)} pizza`)
    }
    bake() {
        console.log(`${chalk.red("Baking")} a ${chalk.blue(this.description)} pizza`)
    }
    cut () {
        console.log(`${chalk.red("Cutting")} a ${chalk.blue(this.description)} pizza`)
    }
    box() {
        console.log(`${chalk.red("Boxing")} a ${chalk.blue(this.description)} pizza`)
    }
}
class VeggiePizza extends Pizza {
    constructor(){
        super();
        this.description = "Veggie";
    }
    prepare() {
        console.log(`${chalk.red("Preparing")} a ${chalk.blue(this.description)} pizza`)
    }
    bake() {
        console.log(`${chalk.red("Baking")} a ${chalk.blue(this.description)} pizza`)
    }
    cut () {
        console.log(`${chalk.red("Cutting")} a ${chalk.blue(this.description)} pizza`)
    }
    box() {
        console.log(`${chalk.red("Boxing")} a ${chalk.blue(this.description)} pizza`)
    }
}

export type pizzaType = "cheese" | "pepperoni" | "clam" | "veggie";

class SimplePizzaFactory {

    createPizza(type: pizzaType): Pizza{

        let pizza: Pizza
        switch(type){
            case "cheese":
                pizza = new CheesePizza();
                break;
            case "pepperoni":
                pizza = new PepperoniPizza();
                break;
            case "clam":
                pizza = new ClamPizza();
                break;
            case "veggie":
                pizza = new VeggiePizza();
                break;
            default:
                break;
        }

        return pizza;
    }
}

export const simplePizzaFactory = new SimplePizzaFactory();