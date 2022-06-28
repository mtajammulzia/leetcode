/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const getOnesInBinary = (decimalNum) => {
    let numberOfOnes = 0;
    while (decimalNum > 0) {
      const bit = decimalNum % 2;
      if (bit === 1) numberOfOnes++;
      decimalNum = (decimalNum - bit) / 2;
    }
    return numberOfOnes;
  };
  return getOnesInBinary(n);
};
