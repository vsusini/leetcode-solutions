function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 0;

  const expandAroundCenter = (left: number, right: number): number => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);

    const maxLen = Math.max(len1, len2);
    if (maxLen > maxLength) {
      maxLength = maxLen;
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}
