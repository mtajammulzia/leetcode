// * First Bad Version
/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;
    let start = 1;
    let end = n;
    let mid = Math.floor((end + start) / 2);
    while (true) {
      if (isBadVersion(mid)) {
        if (n > mid - 1 && !isBadVersion(mid - 1)) return mid;
        else {
          end = mid - 1;
          mid = Math.floor((end + start) / 2);
        }
      } else {
        start = mid + 1;
        mid = Math.floor((end + start) / 2);
      }
    }
  };
};
