/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
  for (let i = 0; i < asteroids.length; ) {
    const current = asteroids[i];
    const currentSize = Math.abs(current);
    const next = asteroids[i + 1];
    const prev = asteroids[i - 1];

    const isMovingRight = current > 0;

    const willCollapseRight = isMovingRight && next < 0;
    const willCollapseLeft = !isMovingRight && prev > 0;

    if (willCollapseRight) {
      const nextSize = Math.abs(next);

      if (currentSize === nextSize) {
        asteroids.splice(i, 2);
      } else asteroids.splice(currentSize > nextSize ? i + 1 : i, 1);
    }

    if (willCollapseLeft) {
      const prevSize = Math.abs(prev);

      if (currentSize < prevSize) {
        asteroids.splice(i, 1);
      } else {
        asteroids.splice(i - 1, currentSize === prevSize ? 2 : 1);
        i--;
      }
    }

    if (!willCollapseLeft && !willCollapseRight) {
      i++;
    }
  }

  return asteroids;
};

module.exports = { asteroidCollision };
