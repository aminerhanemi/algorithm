/**
 * Given a string, check if it is a rotated palindrome or not.
 * CBAABCD  is a rotated palindrome as it is rotation of palindrome 
 */

function isCercularPalindrom (str) {
    const doublestr = str + str
    const l = str.length
    let low = 0;
    let hight = 2 * l
    let i = 0
    while (!isPalindrome(doublestr.substring(low, l + i), 0, l - 1) && !isPalindrome(doublestr.substring(hight - l, 2 * l - i), 0, l - 1) && low < hight) {
        low++
        hight--
        i++
    }
    return low != hight
}

function isPalindrome (str, low, high) {
    return (low >= high) || (str[low] == str[high] && isPalindrome(str, low + 1, high - 1));
}

console.log(isCercularPalindrom('BAABCC'))