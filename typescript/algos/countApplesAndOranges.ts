
// s = Start
// t = End
// a = apple tree
// b = orange tree
// apples = distances at which each apple falls from the tree
// oranges = distances at which each orange falls from the tree
export function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]) {

    const appleCount = apples.reduce( (count, apple) => {
        let d = a + apple;
        if (d > s && d < t) {
            return count + 1
        }
        return count
    }, 0)
    const orangeCount = oranges.reduce( (count, orange) => {
        let d: number = b + orange;
        if (d > s && d < t) {
            return count + 1
        }
        return count
    }, 0)

    return [appleCount, orangeCount]
}