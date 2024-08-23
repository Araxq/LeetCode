var MinStack = function () {
  this.minStack = [Infinity];
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  Array.prototype.push.call(this, val);
  if (val <= this.minStack.at(-1)) this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const top = Array.prototype.pop.call(this);
  if (top === this.minStack.at(-1)) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return Array.prototype.at.call(this, -1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};

module.exports = { MinStack };
