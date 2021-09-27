package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {

	//set properties of the preDefined Logger, including
	// The log entry prefix and flag to disable printing
	// the time, sourcefile and line number.
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	// Request a greeting Message
	// A slice of names.
	names := []string{"Gladys", "John", "Mary"}

	messages, err := greetings.Hellos(names)

	// Exit the program if an error occured
	if err != nil {
		log.Fatal(err)
	}
	// If no error was retuned print the message
	fmt.Println(messages)
}
