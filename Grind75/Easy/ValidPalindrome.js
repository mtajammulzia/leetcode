// * Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sanitizedStr = s.replace(/[^a-zA-Z0-9]|\s+/g, "").toLowerCase();
  let start = 0;
  let end = sanitizedStr.length - 1;
  while (end >= start) {
    if (sanitizedStr.charAt(start) !== sanitizedStr.charAt(end)) return false;
    end--;
    start++;
  }
  return true;
};
