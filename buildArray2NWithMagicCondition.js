function findAllCombinations (n) {
    const list = new Array(2 * n);
    list.fill(-1);
    findAllCombinationsHelper(list, 1, n)
}
function findAllCombinationsHelper (list, value, n) {

    if (value > n) {
        console.log(list)
        return
    }

    for (let i = 0; i < 2 * n; i++) {
        if (list[i] === -1 && i + value + 1 < 2 * n && list[i + value + 1] === -1) {
            list[i] = value
            list[i + value + 1] = value
            findAllCombinationsHelper(list, value + 1, n)
            list[i] = -1;
            list[i + value + 1] = -1
        }
    }

}
console.log(findAllCombinations(4))