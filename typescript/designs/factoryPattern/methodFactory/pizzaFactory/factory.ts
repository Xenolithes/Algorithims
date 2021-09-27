
//The product interface declares the operations that all concreate products must implement.

interface Product {
    operation(): string;
}

/* 
The creator class declares the factory method that returns an object of the product class
*/

abstract class Creator {
    abstract factoryMethod(): Product;
    someOperation(): string {
        // Call the factroy method to create a product object 
        const product = this.factoryMethod();
        // Now use the product.
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }

}

// Concrete products provid the various implementation of the Products interfcae
class ConcreteProduct1 implements Product {
    public operation(): string {
        return `{Result of the COncreteProduct1}`
    }
}
class ConcreteProduct2 implements Product {
    public operation(): string {
        return `{Result of the COncreteProduct1}`
    }
}

class ConcreteCreator1 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}