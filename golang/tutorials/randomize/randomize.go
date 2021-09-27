package main

//Factored Import
import (
	"fmt"
	"math/rand"
	"time"
)

// import "fmt"
// import "math"

func initializeSeed() {
	rand.Seed(time.Now().UTC().UnixNano())
}
func main() {
	initializeSeed()
	fmt.Println("My favorite number is", rand.Intn(10))
}

// All exports are identified with captial letters.
