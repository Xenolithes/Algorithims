import {JestHelpers} from "./helpers";
import {StringMethods} from "../algos/stringMethods";


describe("This suite test thes methods of the Strings Method Class", () => {
    const strMethods = new StringMethods();
    const helpers = new JestHelpers();

    helpers.checkInstanceOf(StringMethods, strMethods, "strMethods");
    describe("Testing the isPalidrome method", () => {
        helpers.basicTest(strMethods.isPalindrome, ["abba"], true, "should identify a even length palindrome");
        helpers.basicTest(strMethods.isPalindrome, ["aboba"], true, "should identify a odd length palindrome");
        helpers.basicTest(strMethods.isPalindrome, ["food"], false, "should identify a even length non-palindrome");
        helpers.basicTest(strMethods.isPalindrome, ["odd"], false, "should identify a odd length non-palindrome");
        helpers.basicTest(strMethods.isPalindrome, [""], false, "should return false for a empty string");
    })

    describe("Testing caesarCipherEncryption", () => {
        helpers.classBaseTest(strMethods.caesarCipherEncryptor("abc", 1), ["abc", 1], "bcd", "Should encrypt the following string with 1");
        helpers.classBaseTest(strMethods.caesarCipherEncryptor("xyz", 1), ["xyz", 1], "yza", "Should wrap");
        helpers.classBaseTest(strMethods.caesarCipherEncryptor("xyz", 56), ["xyz", 56], "bcd", "Should work with large keys");
    })

    describe("Testing runLengthEncoding", () => {
        helpers.classBaseTest(strMethods.runLengthEncoding("AAA"), ["AAA"], "3A", "It should a length encode a basic string");
        helpers.classBaseTest(strMethods.runLengthEncoding("AAAAAAAAAA"), ["AAAAAAAAAA"], "9A1A", "It should a length encode a long string");
        helpers.classBaseTest(strMethods.runLengthEncoding("111"), ["111"], "31", "It should a length encode a string with numbers");
        helpers.classBaseTest(strMethods.runLengthEncoding("BBAAA222YYA"), ["BBAAA222YYA"], "2B3A322Y1A", "It should a length encode a string with numbers and letters");
        helpers.classBaseTest(strMethods.runLengthEncoding("A"), ["A"], "1A", "It should a length encode a string with numbers and letters");
    })
})