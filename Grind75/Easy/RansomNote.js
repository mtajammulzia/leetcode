// * Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const getAlphabetCount = (str) => {
    let alphabetCountMap = new Map();
    for (const char of str) {
      if (alphabetCountMap.has(char)) {
        alphabetCountMap.set(char, alphabetCountMap.get(char) + 1);
      } else {
        alphabetCountMap.set(char, 1);
      }
    }
    return alphabetCountMap;
  };
  const magazineAlphabetCount = getAlphabetCount(magazine);
  for (const char of ransomNote) {
    if (!magazineAlphabetCount.has(char)) return false;
    magazineAlphabetCount.set(char, magazineAlphabetCount.get(char) - 1);
    if (magazineAlphabetCount.get(char) < 0) return false;
  }
  return true;
};
