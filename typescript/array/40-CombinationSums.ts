function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b); // different from 39-CombinationSums.ts, sort handles the duplicates

  function backtrack(
    remaining: number,
    combination: number[],
    start: number
  ): void {
    // Similar base case
    if (remaining == 0) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      // Can no longer meet the target
      if (candidates[i] > remaining) {
        break;
      }

      combination.push(candidates[i]);
      backtrack(remaining - candidates[i], combination, i + 1);
      combination.pop();
    }
  }

  backtrack(target, [], 0);
  return result;
}
