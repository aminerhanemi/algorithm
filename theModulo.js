function getIndex (val, index, length) {
    return (index + val % length + length) % length
}

console.log(getIndex(15, 4, 6))


function curry (fn) {
    function nest (N, args) {
        return (...xs) => {
            console.log(xs)
            if (N - xs.length <= 0) {
                return fn(...args, ...xs)
            }
            return nest(N - xs.length, [...args, ...xs])
        }
    }
    console.log(fn.length)
    return nest(fn.length, [])
}

const sum3 = curry((x, y, z, b) => x + y + z + b)