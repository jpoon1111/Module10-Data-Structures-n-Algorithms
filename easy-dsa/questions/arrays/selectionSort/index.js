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


    //  selection sort will use 2 pointers(current-minimum and current) like bubble sort but it will both start from index 0
    //  check for is current smaller than current-minimum? if Yes then we found a new current-minimum value will be 
    // pointing to current  but if no then move to the next number until we reach the end of the array.
    // if we found no smaller number then we will take current-minimum and swap it with the value at index[0] then it is marked sorted so the next iteration will start from [1] instead of [0]
    // then we repeat that until current-minimum starts at 2nd last index and current is pointed at last index
    // 1st iteration...
    //     [3, 2, 1]
    //      ^current-minimum(currMin)
    //      ^current
    // final is [1,2,3]
   
 const selectionSort = (nums) => {

    for(let i = 0;i< nums.length;++i){
        currMin = i;
        for(let j = i+1;j<nums.length;++j){
            if(nums[j] < nums[currMin]) {
                currMin = j;
            }
        }
        
        // check for just the index so if currMin value is at index that is different from i then set the index
        if (currMin !== i) {
            const temp = nums[i];// create a temp variable to hold nums[i] value while it is being replaced/swap
            nums[i] = nums[currMin];/// this replace nums[i] with nums[currMin] value
            nums[currMin] = temp; // then currMin will hold the temp that stored nums[i] initial value aftewr it was replaced by nums[currMin] value
            // the above Effectively creating a swap



            // but you can do it by destruction because it takes both value at the same time and ressign it at the same time before either value gets updated
            //[nums[i], nums[currMin]] = [nums[currMin], nums[i]]; // destruction “Take both values on the right side, then assign them back swapped.”
        }
    }
    return nums;

}

module.exports = selectionSort;

//  const selectionSort = (nums) => {
//     let currMin;
//     let curr;
//     for(let loop = 0;loop< nums.length;++loop){
//         currMin = loop;
//         for(let i = loop+1;i<nums.length;++i){
//             curr = i
//             if(nums[currMin] > nums[curr]) {
//                 console.log(true , currMin, curr);
//                 currMin = curr;
//             }
            
//         }
//         const temp = nums[loop]
//         nums[loop] = nums[currMin]
//         nums[currMin] = temp;
//     }

// }