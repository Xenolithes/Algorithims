package main

import "fmt"

// A map has a list of propertys that act as keys to values
// The zero value of a map is nil
// The make funciton returns a map of the given type initialized

type Address struct {
	name, street, city string
}

type Cars struct {
	name, color string
}

var m map[string]Address

// A map literal are like struct literals but keys are required
var c = map[string]Cars{
	"Toyota": Cars{"Camry", "Red"},
	"Honda":  Cars{"Civic", "Blue"},
	"Dodge":  Cars{"Charger", "Black"},
}

// If the top level type is the same as the type of value you can omit the type in the map literal
var c2 = map[string]Cars{
	"Land Rover": {"Discovery", "Red"},
	"Ford":       {"Fiesta", "Blue"},
	"Chevy":      {"Camero", "Black"},
}

// Mutating Maps
func mutateMap() {
	// Insert or update an element in map m[key] = val
	c2["Chevy"] = Cars{"Corvette", "White"}
	// Retreive an element from map m[key]
	currChevy := c2["Chevy"]
	// Delete an element from map delete(m, key)
	delete(c2, "Ford")
	// Testing if a key is present
	v, ok := c2["Ford"]
	fmt.Println(v, ok)
	fmt.Println(currChevy)
}

func main() {
	m = make(map[string]Address)
	m["Evan"] = Address{"Evan", "123 Main St", "New York"}
	fmt.Println(m["Evan"])
	fmt.Println(c["Honda"])
	fmt.Println(c2["Ford"])
	mutateMap()
}
