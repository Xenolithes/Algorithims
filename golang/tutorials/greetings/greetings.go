package greetings

import (
	"errors"
	"fmt"
	"math/rand"
	"time"
)

// Returns a greeting genererated with the inputed name
func Hello(name string) (string, error) {

	if name == "" {
		return "", errors.New("empty name")
	}

	//Return a greeting that embeds the name in a message
	message := fmt.Sprintf(randomFormat(), name)
	return message, nil
}

// Hellos returns a map that associates each of the named people with a greeting
func Hellos(names []string) (map[string]string, error) {
	messages := make(map[string]string)
	// Loop through the received slice of names, calling the Hello function
	for _, name := range names {
		message, err := Hello(name)
		if err != nil {
			return nil, err
		}
		messages[name] = message
	}
	return messages, nil
}

//Capitalized Functions are exported named functions in Go
// := is the sort assignment operator
// The long way to do it
// var message string
// message = fmt.Sprintf("Hi, %v. Welcome!", name)

// init sets initial values for variables used in the function
func init() {
	rand.Seed(time.Now().UnixNano())
}

//randomFormat reutrns one of a set of greeting messages
func randomFormat() string {
	formats := []string{
		"Hi, %v. Welcome!",
		"Hello, %v. How are you?",
		"Greetings, %v. How are you?",
		"Good day, %v. How are you?",
		"Hail %v! Well Met!",
	}

	// Return a random greeting message by specigying a random number

	return formats[rand.Intn(len(formats))]
}
