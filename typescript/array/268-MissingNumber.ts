function missingNumber(nums: number[]): number {
    const numbers = new Set(nums)
    for (let i = 0; i <= nums.length; i++){
        if (!numbers.has(i)){
            return i
        }
    }

    return 0;
};

function missingNumberImproved(nums: number[]): number {
    let xor = 0;
    const n = nums.length;

    for (let i = 0; i <= n; i++) {
        xor ^= i;     
        if (i < n) {
            xor ^= nums[i];
        }
    }

    return xor;
}