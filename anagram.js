/**
 * Any word that exactly reproduces the letters in another order is an anagram. In other words, 
 * X and Y are anagrams if by rearranging the letters of X, we can get Y using all the original letters of X exactly once.
 */

function isAnagram (s1, s2) {
    s1 = s1.toLowerCase().replace(/ /g, '')
    s2 = s2.toLowerCase().replace(/ /g, '')
    let character = {}
    if (s1.length != s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        character[s1.charAt(i)] = character[s1.charAt(i)] ? ++character[s1.charAt(i)] : 1;
    }
    for (let i = 0; i < s2.length; i++) {
        if (!character[s2.charAt(i)] || character[s2.charAt(i)] < 0) {
            return false
        }
        else character[s2.charAt(i)]--
    }
    return true;
}

console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort"))