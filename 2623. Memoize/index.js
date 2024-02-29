var memoize = (fn) => {
  var cache = new Map();

  return (a, b) => {
    var key = a + '-' + b;

    if (!cache.has(key)) {
      cache.set(key, fn(a, b));
    }

    return cache.get(key);
  };
};

module.exports = { f: memoize };
