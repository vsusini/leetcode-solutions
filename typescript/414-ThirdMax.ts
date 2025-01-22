function thirdMax(nums: number[]): number {
    const distinctNumbers = new Set(nums);  // Store distinct numbers in a Set

    // Convert the Set to an array and sort it in descending order
    const sortedDistinct = Array.from(distinctNumbers).sort((a, b) => b - a);

    // Return the third largest if it exists, otherwise return the largest
    return sortedDistinct.length >= 3 ? sortedDistinct[2] : sortedDistinct[0];
}