const molecule = 'K4[ON(SO3)2]2HO2';
const molecule2 = 'Mg(OH)2';
const molecule3 = 'H2O';
const molecule4 = 'H2O2';

const bracketsClosed = {
    ')': '(',
    '}': '{',
    ']': '[',
}

const bracketsOpen = {
    '(': ')',
    '{': '}',
    '[': ']',
}

const charType = {
    LOWER_CASE: 'letterLower',
    UPER_CASE: 'letterUp',
    CLOSED_BRACKET: 'closedBracket',
}


function parsMolecule (molecule) {
    const stack = [];
    for (let i = 0; i < molecule.length; i++) {
        switch (checkType(molecule.charAt(i))) {
            case charType.UPER_CASE:
                stack.push(molecule.charAt(i));
                if (i === molecule.length - 1) {
                    stack.push(1);
                } else if (checkType(molecule.charAt(i + 1)) === charType.LOWER_CASE) {
                    stack[stack.length - 1] = stack[stack.length - 1] + molecule.charAt(++i);
                }
                if (isNaN(+molecule.charAt(i + 1))) stack.push(1);
                break;
            case charType.CLOSED_BRACKET:
                const multiplyBy = molecule.charAt(i + 1);
                let j = 1;
                while (stack[stack.length - j] !== bracketsClosed[molecule.charAt(i)]) {
                    if (!isNaN(+stack[stack.length - j])) {
                        stack[stack.length - j] *= multiplyBy;
                    }
                    j++;
                }
                stack.splice(stack.length - j, 1);
                i++;
                break;
            default:
                stack.push(molecule.charAt(i));
        }
    }
    console.log(stack)
    return moleculeComposition(stack);
}
console.log(molecule);
console.log(parsMolecule(molecule));
console.log(molecule2);
console.log(parsMolecule(molecule2));
console.log(molecule3);
console.log(parsMolecule(molecule3));
console.log(molecule4);
console.log(parsMolecule(molecule4));

function isALetter (char) {
    if (!bracketsOpen[char] && isNaN(+char) && !bracketsClosed[char]) {
        return true;
    }
    return false;
}
function checkType (char) {
    if (isALetter(char)) {
        if (char === char.toUpperCase()) return charType.UPER_CASE;
        return charType.LOWER_CASE;
    } else if (bracketsClosed[char]) return charType.CLOSED_BRACKET;
}

function moleculeComposition (atomsList) {
    const result = {};
    atomsList.forEach((val, index) => {
        if (!isNaN(val)) {
            if (result[atomsList[index - 1]]) {
                result[atomsList[index - 1]] = result[atomsList[index - 1]] + +val;
            } else {
                result[atomsList[index - 1]] = +val;
            }
        }
    });
    return result;
}