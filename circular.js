/**
 * Check if given set of moves is circular or not. The move is circular if its starting and ending coordinates
 *  are the same. The moves can contain instructions to move one unit in same direction (M), to change direction 
 * to left of current direction (L) and to change direction to right of current direction (R).
 * 
 * Set of moves MRMRMRM is circular
 * Set of moves MRMLMRMRMMRMM is circular
 */

const moves = 'MRMLMRMRMMRMM'
const tabDirection = {
    'L': {
        'X+': 'Y-',
        'X-': 'Y+',
        'Y+': 'X+',
        'Y-': 'X-',
    },
    'R': {
        'X+': 'Y+',
        'X-': 'Y-',
        'Y+': 'X-',
        'Y-': 'X+',
    },
}
function isCercular (moves) {
    let sens = 'X+'
    let point = [0, 0]
    for (let i = 0; i < moves.length; i++) {
        switch (moves.charAt(i)) {
            case 'M':
                if (sens === 'X+') point[0]++
                else if (sens === 'X-') point[0]--
                else if (sens === 'Y+') point[1]++
                else if (sens === 'Y-') point[1]--
                break;
            case 'L':
                sens = tabDirection['L'][sens]
                break;
            case 'R':
                sens = tabDirection['R'][sens]
                break;
        }

    };
    console.log(point)
    return point[0] === 0 && point[1] === 0
}

console.log(isCercular(moves))