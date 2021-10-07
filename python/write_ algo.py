import string
class writeAlgo ():
    file_name = input("Please enter a file name: ")
    function_name = input("Please enter a function name: ")
    parameter_array = []
    parameter_name = ""
    while parameter_name != "quit":
        parameter_name = input("Please enter a parameter, if no more parameters type 'quit' ");
        if(parameter_name != "quit"):
            parameter_array.append(parameter_name)
        pass
    print(parameter_array)

    file = open("./algos/"+file_name+".py", "x")
    separator =","
    paramString = separator.join(parameter_array)
    funcDefString = "def "+function_name+"("+paramString+"):\n"
    funcDefReturn = "   return"
    file.write(funcDefString)
    file.write(funcDefReturn)
    test_file = open("test_"+file_name+".py", "x")
    test_file.write("import unittest\n")
    test_file.write("from algos."+file_name+" import "+ function_name+"\n\n")
    test_file.write("class Test"+function_name+"(unittest.TestCase):\n")
    test_file.write("   def test_true(self):\n      return\n")
    test_file.write("if __name__ == '__main__':\n   unittest.main()")
    file.close()
    test_file.close()

