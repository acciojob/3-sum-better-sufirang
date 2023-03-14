function threeSum(arr, target) {
// write your code here
nums.sort((a, b) => a - b); // sort the array in ascending order
  let closestSum = Infinity; // initialize closest sum to a large value
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;
