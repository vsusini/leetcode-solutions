// Still O(n) but uses O(n) space
function firstMissingPositive(nums: number[]): number {
  const numSet = new Set(nums);

  let missing = 1;

  while (numSet.has(missing)) {
    missing++;
  }

  return missing;
}

// Improved space usage to O(1)
function firstMissingPositiveImproved(nums: number[]): number {
  const n = nums.length;

  // Sorts the list
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap nums[i] with nums[nums[i] - 1]
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  // Find the first missing positive
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all positions are correct, return n + 1
  return n + 1;
}
