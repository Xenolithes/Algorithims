import {Mocah, HouseBlend, Vanilla} from "./decoraters"

let cup = new HouseBlend()
cup = new Mocah(cup)
cup = new Vanilla(cup);

console.log(cup.getDescription());
console.log("The price is: " + cup.cost())