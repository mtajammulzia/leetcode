/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const charArrayA = a.split("");
  const charArrayB = b.split("");
  let result = [];
  let hasCarry = false;

  while (charArrayA.length && charArrayB.length) {
    const aIndex = charArrayA.length - 1;
    const bIndex = charArrayB.length - 1;
    let sum = Number(charArrayA[aIndex]) + Number(charArrayB[bIndex]);
    if (hasCarry) {
      sum += 1;
      hasCarry = false;
    }
    if (sum > 1) {
      sum -= 2;
      hasCarry = true;
      result.unshift(String(sum));
    } else {
      result.unshift(String(sum));
    }
    charArrayA.pop();
    charArrayB.pop();
  }

  while (charArrayA.length) {
    const aIndex = charArrayA.length - 1;
    let num = Number(charArrayA[aIndex]);
    if (hasCarry) {
      num += 1;
      hasCarry = false;
    }
    if (num > 1) {
      num -= 2;
      hasCarry = true;
      result.unshift(String(num));
    } else {
      result.unshift(String(num));
    }
    charArrayA.pop();
  }

  while (charArrayB.length) {
    const bIndex = charArrayB.length - 1;
    let num = Number(charArrayB[bIndex]);
    if (hasCarry) {
      num += 1;
      hasCarry = false;
    }
    if (num > 1) {
      num -= 2;
      hasCarry = true;
      result.unshift(String(num));
    } else {
      result.unshift(String(num));
    }
    charArrayB.pop();
  }

  if (hasCarry) {
    result.unshift("1");
  }

  return result.join("");
};
console.log(addBinary("1010", "1011"));
