function myAtoi(s: string): number {
    const INT_MIN = -(2 ** 31); // -2147483648
    const INT_MAX = 2 ** 31 - 1; // 2147483647
  
    let i = 0;
    let sign = 1;
    let result = 0;
  
    s = s.trim()
  
    if (i < s.length && (s[i] === '-' || s[i] === '+')) {
      sign = s[i] === '-' ? -1 : 1;
      i++;
    }
  
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
      const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
  
      if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }
  
      result = result * 10 + digit;
      i++;
    }
  
    return result * sign;
  }