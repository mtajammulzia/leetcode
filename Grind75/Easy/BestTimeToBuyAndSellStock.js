// * Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let buyPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    const profit = sellPrice - buyPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (buyPrice > sellPrice) {
      buyPrice = sellPrice;
    }
  }
  return maxProfit;
};
console.log(maxProfit([20, 100, 1, 10]));
