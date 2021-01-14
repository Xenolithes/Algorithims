import { ClassDeclaration } from "typescript";

export class JestHelpers {
    constructor() {

    }

    _listInputs(inputs: any[]):string{
        let output = "Inputs: "
        inputs.forEach(input => {
            if(typeof input === "object"){
                output += JSON.stringify(input) + " ";
            }else{
                output += input
            }
        })
        return output
    }

    basicTest(func: any, testInputs: any[], answer, testdesc: string, debug: boolean = false) {

        it(`${testdesc} ${this._listInputs(testInputs)} Output: ${answer}`, () => {
            const response = func(...testInputs);
            if (typeof answer === "object") {
                expect(response).toStrictEqual(answer)
            } else {
                expect(response).toBe(answer)
            }
        })
    }

    classBaseTest(response: any, testInputs: any[], answer: any, testdesc: string, debug: boolean = false) {
        it(`${testdesc} ${this._listInputs(testInputs)} Output: ${answer}`, () => {
            if (typeof answer === "object") {
                expect(response).toStrictEqual(answer)
            } else {
                expect(response).toBe(answer)
            }
        })
    }

    checkInstanceOf (parent, child, testdesc: string){
        it(`${testdesc}, Output: should be an instance of the parent class`, () => {
            expect(child).toBeInstanceOf(parent)
        })
    }

    checkPropertiesOf (object, propArr: string[], testdesc: string){
        for(let i = 0; i < propArr.length; i+=1){
            const input = propArr[i]
            test(`${testdesc}: Output: should have the property ${input}`, () => {
                console.log(input)
                expect(object).toHaveProperty(input)
            })
        }
    }
}