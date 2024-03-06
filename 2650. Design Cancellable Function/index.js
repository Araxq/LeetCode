/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
  var isCancel = false;

  var doStep = (res) =>
    res?.then?.(
      (res) =>
        isCancel
          ? ((isCancel = false), doStep(generator.throw('Cancelled').value))
          : doStep(generator.next(res).value),
      (res) =>
        isCancel
          ? ((isCancel = false), doStep(generator.throw('Cancelled').value))
          : doStep(generator.throw(res).value),
    ) || res;

  return [() => (isCancel = true), doStep(Promise.resolve())];
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
