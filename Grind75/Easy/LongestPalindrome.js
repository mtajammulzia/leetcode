// * Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let set = new Set();
  let len = 0;
  for (const char of s) {
    if (set.has(char)) {
      len += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }
  if (set.size > 0) len += 1;
  return len;
};
console.log(longestPalindrome("banana"));
