/** Bubble Sort **
 * 
 * Sort the 'nums' array using bubble sort.
 *  
 * @example
 * bubbleSort([3, 2, 1]) -> [1, 2, 3]
 * bubbleSort([0, 12, 8]) -> [0, 8, 12]
 * bubbleSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */


 const bubbleSort = (nums) => {
    //this loops through array only
    for (let loop = 0; loop<nums.length;++loop)//Why it works without {} In JavaScript, a for loop (and if, while, etc.) can control exactly one statement without braces.
        // let swapped = false; // this boolean is added by me that  will help exit early incase the bubble sorting finish early
        // this will loop through the same array but using either i+1 or i-1 to reference the number next to it
        for (let i = 1;i < nums.length; ++i){// starting from i=1 so you use [i-1] while i=0 is [i+1] to compare the number next
            if (nums[i]< nums[i-1]){// compares both number to see if the value at [i] and [i-1]
                const tempo = nums[i];// this will temporary hold the current value so that it doesnt gets lost or deleted
                nums[i] = nums[i-1];// then this will now hold a new value from the value next to nums[i]
                nums[i+1] = tempo;// nums i+1 will now hold the new value from tempo (which was originally nums[i])
                //swapped = true;// set swapped to true only if the if statement run during this iteration                 
            }
        }
        // if(!swapped) break; // this will check if it is !true then it will break (in our case really just check if it is set to true from if statement)
    return nums// this is exiting both for loops even without a 2nd {} for the outer for loop because JavaScriptcan control exactly one statement

}

module.exports = bubbleSort;


