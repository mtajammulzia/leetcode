/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const reverseRomans = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (reverseRomans.hasOwnProperty(currentChar)) {
      const nextChar = s[i + 1];
      if (nextChar && reverseRomans[currentChar].includes(nextChar)) {
        integer -= romans[currentChar];
        continue;
      }
    }
    integer += romans[currentChar];
  }
  return integer;
};
console.log(romanToInt("MCDLXXVI"));
