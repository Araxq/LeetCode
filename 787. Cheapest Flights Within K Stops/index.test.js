const { f } = require('./index');

it('f', () => {
  expect(
    f(
      15,
      [
        [10, 14, 43],
        [1, 12, 62],
        [4, 2, 62],
        [14, 10, 49],
        [9, 5, 29],
        [13, 7, 53],
        [4, 12, 90],
        [14, 9, 38],
        [11, 2, 64],
        [2, 13, 92],
        [11, 5, 42],
        [10, 1, 89],
        [14, 0, 32],
        [9, 4, 81],
        [3, 6, 97],
        [7, 13, 35],
        [11, 9, 63],
        [5, 7, 82],
        [13, 6, 57],
        [4, 5, 100],
        [2, 9, 34],
        [11, 13, 1],
        [14, 8, 1],
        [12, 10, 42],
        [2, 4, 41],
        [0, 6, 55],
        [5, 12, 1],
        [13, 3, 67],
        [3, 13, 36],
        [3, 12, 73],
        [7, 5, 72],
        [5, 6, 100],
        [7, 6, 52],
        [4, 7, 43],
        [6, 3, 67],
        [3, 1, 66],
        [8, 12, 30],
        [8, 3, 42],
        [9, 3, 57],
        [12, 6, 31],
        [2, 7, 10],
        [14, 4, 91],
        [2, 3, 29],
        [8, 9, 29],
        [2, 11, 65],
        [3, 8, 49],
        [6, 14, 22],
        [4, 6, 38],
        [13, 0, 78],
        [1, 10, 97],
        [8, 14, 40],
        [7, 9, 3],
        [14, 6, 4],
        [4, 8, 75],
        [1, 6, 56],
      ],
      1,
      4,
      10,
    ),
  ).toEqual(169);
  expect(
    f(
      5,
      [
        [4, 1, 1],
        [1, 2, 3],
        [0, 3, 2],
        [0, 4, 10],
        [3, 1, 1],
        [1, 4, 3],
      ],
      2,
      1,
      1,
    ),
  ).toEqual(-1);
  expect(
    f(
      4,
      [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      0,
      3,
      1,
    ),
  ).toEqual(700);
  expect(
    f(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      1,
    ),
  ).toEqual(200);
  expect(
    f(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      0,
    ),
  ).toEqual(500);
  expect(
    f(
      5,
      [
        [1, 2, 10],
        [2, 0, 7],
        [1, 3, 8],
        [4, 0, 10],
        [3, 4, 2],
        [4, 2, 10],
        [0, 3, 3],
        [3, 1, 6],
        [2, 4, 5],
      ],
      0,
      4,
      1,
    ),
  ).toEqual(5);
  expect(
    f(
      4,
      [
        [0, 1, 1],
        [0, 2, 5],
        [1, 2, 1],
        [2, 3, 1],
      ],
      0,
      3,
      1,
    ),
  ).toEqual(6);
});
