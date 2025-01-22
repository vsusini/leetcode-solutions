function lengthOfLongestSubstring(s: string): number {
    const charSet  = new Set<string>();
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++){
        while (charSet.has(s[i])){
            charSet.delete(s[start]);
            start++;
        }

        charSet.add(s[i]);
        maxLength = Math.max(maxLength, i-start+1)
    }

    return maxLength
};