/** Insertion Sort **
 * 
 * Sort the 'nums' array using insertion sort.
 *  
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

//Insertion - is where you divide it to two parts- Sorted and Unsorted based on where the Sorted is set
// the first one that is marked sorted is usually the first value, index[0] and the starting state is assuming it is sorted already because there are not other values being checked
// our divider is in the example is  between values 0 and 12 in this case
// the cycle will be comparing is the value of index[x]is less than the previous value of index[x-1]? if yes then swap right away 

    // [3, 2, 1, 0]
    //       ^ updated divider after a number is moved to sorted section to be compared with the first value
    //     ^this is the start index to move to the sorted section to be compared of whether it is greater or less than the value at index[0]
    //   ^the divider (this will be using | to devide)
    //  ^ sorted 

// after the first comparison for 0 and 12, we will move to 18 and onward if there are any other numbers avaliable until the last index is moved to sorted section to be compared with the other values
// the steps are going to be long because you loop and swap then you do that for all values in the "sorted" section first before jumping into the next value
// the divider (this will be using | to divide)
// [3, 2|, 1, 0] => [2, 3|, 1, 0] => [2, 3, 1|, 0] => [2, 1, 3|, 0] => [1, 2, 3|, 0] => [1, 2, 3, 0|] => [1, 2, 0, 3|] => [1, 0, 2, 3|] => [0, 1, 2, 3|] => done

 const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++){// starting at index[1] // [nums[0],nums[1] , nums[2]]
        while(nums[i-1] > nums[i]){//  if index[0].val is greater than index[1] value // [nums[0],nums[1] , nums[2]] 
            // this is the swap mechanic
            let temp = nums[i - 1] // store index[0] into temp so it still exists after being over written by index[1]
            nums[i - 1] = nums[i] // then assign index[1] into index[0] effectively overwriting it
            nums[i] = temp // index[1] value  will be overwritting by index[0] value using temp variable
            //  [ nums[i - 1], nums[i] ] = [ nums[i], nums[i - 1] ] // you can also just use destructing to swap // avaliable since 2015 ES6 but it was still new and not supported in all browsers

            i -= 1; // this moves 1 index to the left so since starting index[1] on first loop then it becomes 
            // 1-1 = becomes index[0]  and then 0-1 = becomes index[-1] becomes which then becomes false because under the hood the value becomes "undefined" and undefined > anything is false
        }
    }
    return nums;

}

module.exports = insertionSort;





//  const insertionSort = (nums) => {
//     for (let i = 1; i < nums.length; i++){
//         while(nums[i] < nums[i - 1]){
//             let temp = nums[i - 1]
//             nums[i - 1] = nums[i]
//             nums[i] = temp
//             i -= 1; // this moves 1 index to the left  
//         }
//     }
//     return nums

// }

// you can also switch it around so that it will do the same thing but storing different ones
//  const insertionSort = (nums) => {
//     for (let i = 1; i < nums.length; i++){
//         while(nums[i] < nums[i - 1]){
//             let temp = nums[i - 1]
//             nums[i - 1] = nums[i]
//             nums[i] = temp
//             i -= 1  
//         }
//     }
//     return nums

// }