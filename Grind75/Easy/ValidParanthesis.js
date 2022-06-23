// * Valid Paranthesis
/**
 * @param {string} s
 * @returns {boolean}
 */
const isValid = (s) => {
  const stack = new Array();
  const bracketObject = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const stackTop = stack[stack.length - 1];
    if (Object.keys(bracketObject).includes(currentChar)) {
      stack.push(currentChar);
    } else {
      if (currentChar !== bracketObject[stackTop]) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return false;
  return true;
};
console.log(isValid("()"));
