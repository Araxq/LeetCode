/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = new Map();

  strs.forEach((s) => {
    const signature = getCharsCount(s);

    if (!groups.has(signature)) {
      groups.set(signature, []);
    }

    groups.get(signature).push(s);
  });

  return Array.from(groups, (tuple) => tuple[1]);
};

const charCodeShift = 'a'.charCodeAt(0);
const alphabetLength = 26;

const getCharsCount = (str) => {
  const count = Array(alphabetLength).fill(0);

  for (const char of str) {
    count[char.charCodeAt(0) - charCodeShift]++;
  }

  return count.join('-');
};
