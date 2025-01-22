function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(
    remaining: number,
    combination: number[],
    start: number
  ): void {
    if (remaining == 0) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= remaining) {
        combination.push(candidates[i]);
        backtrack(remaining - candidates[i], combination, i);
        combination.pop();
      }
    }
  }

  backtrack(target, [], 0);
  return result;
}
