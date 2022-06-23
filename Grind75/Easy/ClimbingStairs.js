// * Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let possibleWays = 0;
  const move = (currentStep) => {
    if (currentStep === n) possibleWays += 1;
    if (currentStep + 1 <= n) move(currentStep + 1);
    if (currentStep + 2 <= n) move(currentStep + 2);
  };
  move(0);
  return possibleWays;
};
console.log(climbStairs(7));
