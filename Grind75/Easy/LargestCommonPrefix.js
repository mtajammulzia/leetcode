/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs = strs.sort();
  if (strs[0] === strs[strs.length - 1]) return strs[0];
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.substring(0, j);
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["abc", "ab"]));
