function singleNumber(nums: number[]): number {
    let result = 0;

    for (const num of nums) {
        result ^= num; // Uses XOR operator to find the single number
    }

    return result;
};