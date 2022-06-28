/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const removeBackspacedChars = (str) => {
    let strCopy = str;
    while (true) {
      const spliceIndex = strCopy.indexOf("#");
      if (spliceIndex === -1) break;
      strCopy =
        strCopy.substring(0, spliceIndex - 1) + strCopy.substring(spliceIndex + 1, strCopy.length);
    }
    return strCopy;
  };

  return removeBackspacedChars(s) === removeBackspacedChars(t);
};
console.log(backspaceCompare("ab##", "c#d#"));

// Can also be done with stack.
