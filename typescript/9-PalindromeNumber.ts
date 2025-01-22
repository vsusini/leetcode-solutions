function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// How to do it without converting to a str.
function isPalindromeImproved(x: number): boolean {
  // Negative numbers cannot be palindromes
  if (x < 0) return false;

  // Initialize variables to reverse the number
  let original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10; // Get the last digit
    reversed = reversed * 10 + digit; // Build the reversed number
    x = Math.floor(x / 10); // Remove the last digit from x
  }

  // Check if the original number equals the reversed number
  return original === reversed;
}
