// Single pass but leads to swaps which could increase time.
function moveZeroes(nums: number[]): void {
    let lastNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
            lastNonZeroIndex++;
        }
    }
}

function moveZeroesImproved(nums: number[]): void {
    let lastNonZeroIndex = 0; // Tracks the position to place the next non-zero element

    // Shift all non-zero elements to the left
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeroes
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}