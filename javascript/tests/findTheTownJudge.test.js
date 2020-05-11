/*In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
*/
const findTownJudge = require("../algos/findTheTownJudge")
describe("Find the town judge", () => {
  test("Should input of [[1,2]], 2 is the town judge", () => {
    let input =  [[1,2]]
    let N = 2
    let answer = 2
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
  test("Should input =  [[1,3],[2,3]], find that number 3 is the town judge", () => {
    let input =  [[1,3],[2,3]]
    let N = 3
    let answer = 3
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
  test("Should  input =  [[1,3],[2,3],[3,1]] ,find that number -1 is the town judge", () => {
    let input =  [[1,3],[2,3],[3,1]]
    let N = 3
    let answer = -1
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
  test("Should input =  [[1,2],[2,3]] find that number -1 is the town judge", () => {
    let input =  [[1,2],[2,3]]
    let N = 3
    let answer = -1
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
  test("Should input =  [[1,3],[1,4],[2,3],[2,4],[4,3]] find that number 3 is the town judge", () => {
    let input =  [[1,3],[1,4],[2,3],[2,4],[4,3]]
    let N = 4
    let answer = 3
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
  test("Should [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]] find that number 3 is the town judge", () => {
    let input =  [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]]
    let N = 4
    let answer = 3
    let response = findTownJudge(N, input)
    expect(response).toBe(answer)
  })
})