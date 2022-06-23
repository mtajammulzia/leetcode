// * Min Stack
var MinStack = function () {
  this.stackItems = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stackItems.push(val);
  if (val < this.min) this.min = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let item;
  if (this.stackItems.length > 0) item = this.stackItems.pop();
  if (item !== undefined && item === this.min) {
    const arr = this.stackItems;
    const initialLowest = Infinity;
    const lowestItem = arr.reduce(
      (persistedValue, currentValue) => Math.min(persistedValue, currentValue),
      initialLowest
    );
    this.min = lowestItem;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stackItems[this.stackItems.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
