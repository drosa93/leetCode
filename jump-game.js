/*You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.*/

var canJump = function(nums) {
    // Initialize maxReach to track the farthest index we can reach
    let maxReach = 0;
    
    // Loop through each index in the array
    for (let i = 0; i < nums.length; i++) {
        // If current index is beyond the maxReach, return false
        if (i > maxReach) return false;
        
        // Update maxReach to the farthest reachable index from current position
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If maxReach reaches or exceeds the last index, return true
        if (maxReach >= nums.length - 1) return true;
    }
    
    // If we exit the loop without returning, it means we can't reach the last index
    return false;
};