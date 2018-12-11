function getIndex (val, index, length) {
    return (index + val % length + length) % length
}

console.log(getIndex(15, 4, 6))
