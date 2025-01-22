function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates

    const backtrack = (path: number[], used: boolean[]) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    };

    backtrack([], Array(nums.length).fill(false)); // Initialize with empty path with  unused markers
    return result;
};