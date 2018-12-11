/**
 *  Given a sequence consisting of  'I'and 'D' where 'I'  denotes increasing sequence and 'D'
 *  denotes the decreasing sequence. Decode the given sequence to construct minimum number without repeated digits.
 *  ex : IIDDIDID –> 125437698
 */

const I = 'I'
const D = 'D'
function decode (list) {
    const stack = []
    const result = []
    for (let i = 0; i <= list.length; i++) {
        stack.push(i + 1)
        if (list[i] === I || i === list.length) {
            while (stack.length > 0) {
                result.push(stack.pop())
            }
        }
    }
    return result
}
console.log(decode([I, I, D, D, I, D, I, D]))
