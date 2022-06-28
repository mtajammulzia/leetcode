/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bitArray = [];

  const getOnesInBinary = (decimalNum) => {
    let numberOfOnes = 0;
    while (decimalNum > 0) {
      const bit = decimalNum % 2;
      if (bit === 1) numberOfOnes++;
      decimalNum = (decimalNum - bit) / 2;
    }
    return numberOfOnes;
  };

  for (let i = 0; i <= n; i++) {
    bitArray.push(getOnesInBinary(i));
  }

  return bitArray;
};
console.log(countBits(7));
