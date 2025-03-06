function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const exSum = (n * n * (n * n+1)) / 2;
    let actualSum  = 0;
    let seen = new Set<number>();
    let repeated = -1

    for (let row of grid){
        for (let num of row) {
            actualSum += num;
            if (seen.has(num)){
                repeated = num;
            }
            seen.add(num);
        }
    }

    const missing = exSum - (actualSum - repeated);
    return [repeated, missing]
};