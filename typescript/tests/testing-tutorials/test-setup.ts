async function test(title, callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`x ${title}`)
        console.error(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} does is not equal to ${expected}`)
            }
        }
    }
}

// globalThis.test = test
// globalThis.expect = expect