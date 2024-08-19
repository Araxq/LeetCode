/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const n = new Map();
  const m = new Map();

  for (const c of s) {
    n.set(c, (n.get(c) || 0) + 1);
  }
  for (const c of t) {
    m.set(c, (m.get(c) || 0) + 1);
  }

  return [...n.entries()].every(([char, count]) => m.get(char) === count);
};

module.exports = { f: isAnagram };
