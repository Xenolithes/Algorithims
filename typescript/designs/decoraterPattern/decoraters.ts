abstract class Beverage {
    description: string;
    price: number;
    abstract getDescription(): string
    abstract cost(): number
}

abstract class CondimentDecorator extends Beverage {
    coffee: Beverage
    price: number
    abstract cost(): number
    abstract getDescription(): string
}

export class HouseBlend extends Beverage {
    constructor() {
        super()
        this.price = 1.50;
        this.description = "A House Blend Coffee"
    }

    cost() {
        return this.price
    }

    getDescription() {
        return this.description
    }
}


export class Mocah extends CondimentDecorator {
    constructor(coffee: Beverage) {
        super();
        this.coffee = coffee
        this.price = .50
        this.description = "With mocha"
    }
    cost() {
        return this.price + this.coffee.cost();
    }

    getDescription(): string {
        return this.coffee.getDescription() + " " + this.description
    }
}

export class Vanilla extends CondimentDecorator {
    constructor(coffee: Beverage) {
        super()
        this.coffee = coffee
        this.description = "with vanilla"
        this.price = 1.00
    }

    cost() {
        return this.price + this.coffee.cost();
    }

    getDescription(): string {
        return this.coffee.getDescription() + " " + this.description
    }
}