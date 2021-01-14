import ts, { Map } from "typescript";

export class StringMethods {
    cosntructor() {

    }

    _initializeAlphabetHash(): globalThis.Map<any, any> {
        const output = new Map()
        output.set("a", 1)
        output.set("b", 2)
        output.set("c", 3)
        output.set("d", 4)
        output.set("e", 5)
        output.set("f", 6)
        output.set("g", 7)
        output.set("h", 8)
        output.set("i", 9)
        output.set("j", 10)
        output.set("k", 11)
        output.set("l", 12)
        output.set("m", 13)
        output.set("n", 14)
        output.set("o", 15)
        output.set("p", 16)
        output.set("q", 17)
        output.set("r", 18)
        output.set("s", 19)
        output.set("t", 20)
        output.set("u", 21)
        output.set("v", 22)
        output.set("w", 23)
        output.set("x", 24)
        output.set("y", 25)
        output.set("z", 26)
        output.set("1", "a")
        output.set("2", "b")
        output.set("3", "c")
        output.set("4", "d")
        output.set("5", "e")
        output.set("6", "f")
        output.set("7", "g")
        output.set("8", "h")
        output.set("9", "i")
        output.set("10", "j")
        output.set("11", "k")
        output.set("12", "l")
        output.set("13", "m")
        output.set("14", "n")
        output.set("15", "o")
        output.set("16", "p")
        output.set("17", "q")
        output.set("18", "r")
        output.set("19", "s")
        output.set("20", "t")
        output.set("21", "u")
        output.set("22", "v")
        output.set("23", "w")
        output.set("24", "x")
        output.set("25", "y")
        output.set("26", "z")
        return output
    }

    caesarCipherEncryptor(string: string, key: number) {
        if (key > 26) {
            key = key % 26;
        }
        // Write your code here.
        let output = ""
        const hash = this._initializeAlphabetHash();
        for (let i = 0; i < string.length; i += 1) {
            let num = hash.get(string[i]) as number;
            const indexVal = num + key > 26 ? num + key - 26 : num + key;
            output += hash.get(indexVal.toString())
        }

        return output;
    }


    isPalindrome(str: string): boolean {
        if (str.length === 0) {
            return false
        }
        let front = 0;
        let end = str.length - 1;
        while (front <= end) {
            if (str[front] !== str[end]) {
                return false
            }
            front += 1
            end -= 1
        }
        return true
    }

    runLengthEncoding(string: string) {
        if(string.length === 1){
            return 1 + string[0]
        }
        // Write your code here.
        let counter: number = 1
        let last: string = string[0]
        let output = ""

        for (let i = 1; i < string.length; i += 1) {
            if (string[i] === last) {
                counter += 1;
                if (counter === 10) {
                    output += 9 + last;
                    counter = 1
                }
            } else if (string[i] !== last) {
                if (counter === 1) {
                    output += 1 + last;
                    last = string[i];
                    counter = 1
                } else {
                    output += counter + last;
                    last = string[i]
                    counter = 1
                }
            }

            if (i === string.length - 1) {
                if (counter === 1) {
                    output += 1 + last;
                    last = string[i];
                    counter = 1
                } else {
                    output += counter + last;
                    last = string[i]
                    counter = 1
                }
            }
        }
        return output;
    }
}

