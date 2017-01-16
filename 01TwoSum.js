/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    lengthOfNumsArray = nums.length;
    for(var i = 0;i < lengthOfNumsArray;i++){
        tempNumber = target - nums[i];
        for(var k = i + 1;k < lengthOfNumsArray;k++){
            if(tempNumber == nums[k]){
                var answer = new Array(2);
                answer[0]  = i;
                answer[1]  = k;
                return answer;
            }
        }
    }
    return null;
};