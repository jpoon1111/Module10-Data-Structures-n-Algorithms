/** Valid Palindrome **
 * 
 * Given a string, determine if it is a valid palindrome or not.
 * Ignore all spaces, non-alphanumeric characters and capitalisation of letters. 
 *  
 * @example
 * validPalindrome("racecar") -> true
 * validPalindrome("r A C ec  ar") -> true
 * validPalindrome("I like to code.") -> false 
 * 
 */

//TOP TECH SOLUTION

 const validPalindrome = (str) => {

    const modifiedStr = str.replace(/[\W _]/g, "").toLowerCase();
    let l = 0;
    let r = modifiedStr.length - 1
    
    while (l < r){
        if (modifiedStr[l] !== modifiedStr[r]){
            return false
        }
        l++
        r--
    }
    return true

}

//METHOD 2
 const validPalindrome1 = (str) => {

    const modifiedChars = []
    const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyz'
    
    for (char of str){
        if (alphanumerics.includes(char.toLowerCase())){
            modifiedChars.push(char.toLowerCase())
        }
    }

    const modifiedStr = modifiedChars.join('')

    let l = 0
    let r = modifiedStr.length - 1

    while (l < r){
        if (modifiedStr[l] !== modifiedStr[r]){
            return false
        }
        l += 1
        r -= 1
    }

    return true

}

module.exports = validPalindrome;