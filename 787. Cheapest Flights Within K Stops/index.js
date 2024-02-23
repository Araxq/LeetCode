/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = (n, flights, src, dst, k) => {
  var paths = Array(n).fill(Infinity);
  paths[src] = 0;

  for (var i = 0; i <= k; i++) {
    var p = [...paths];

    flights.forEach(([from, to, price]) => {
      p[to] = Math.min(paths[from] + price, p[to]);
    });

    paths = p;
  }

  var res = paths[dst];

  return res !== Infinity ? res : -1;
};

module.exports = { f: findCheapestPrice };
