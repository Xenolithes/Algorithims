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
}