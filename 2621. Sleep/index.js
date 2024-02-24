/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  return new Promise((res) => setTimeout(res, millis));
}

module.exports = { f: sleep };
