/** selection Sort **
 * 
 * Sort the 'nums' array using selection sort.
 *  
 * @example
 * selectionSort([3, 2, 1]) -> [1, 2, 3]
 * selectionSort([0, 12, 8]) -> [0, 8, 12]
 * selectionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++){
        let currMin = i

        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[currMin]){
                currMin = j
            }
        }

        if (currMin !== i){
            let temp = nums[i]
            nums[i] = nums[currMin]
            nums[currMin] = temp 
        }
    }

    return nums

}

module.exports = selectionSort;