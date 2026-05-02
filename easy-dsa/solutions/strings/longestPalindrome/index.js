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


module.exports = validPalindrome;