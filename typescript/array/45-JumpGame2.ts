function jump(nums: number[]): number {
    const goal = nums.length - 1
    let jumps = 0
    let farthest = 0
    let currentEnd = 0
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            if (currentEnd >= goal) break;
        }
    }
    return jumps
};