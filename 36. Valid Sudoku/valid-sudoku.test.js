const { chooseSquare, removeEmptyCells, isValidSudoku } = require('./');

const validSudoku = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const invalidSudoku = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const failingTestSudoku = [
  ['.', '.', '5', '.', '.', '.', '.', '.', '.'],
  ['1', '.', '.', '2', '.', '.', '.', '.', '.'],
  ['.', '.', '6', '.', '.', '3', '.', '.', '.'],
  ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['3', '.', '1', '5', '2', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '4', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

it('chooseSquare', function() {
  expect(chooseSquare(0, 0)).toBe(0);
  expect(chooseSquare(3, 7)).toBe(5);
  expect(chooseSquare(7, 4)).toBe(7);
});

it('removeEmptyCells', function() {
  const correctRows = [
    ['5', '3', '7'],
    ['6', '1', '9', '5'],
    ['9', '8', '6'],
    ['8', '6', '3'],
    ['4', '8', '3', '1'],
    ['7', '2', '6'],
    ['6', '2', '8'],
    ['4', '1', '9', '5'],
    ['8', '7', '9'],
  ];
  const correctCols = [
    ['5', '6', '8', '4', '7'],
    ['3', '9', '6'],
    ['8'],
    ['1', '8', '4'],
    ['7', '9', '6', '2', '1', '8'],
    ['5', '3', '9'],
    ['2'],
    ['6', '8', '7'],
    ['3', '1', '6', '5', '9'],
  ];

  const correctSquares = [
    ['5', '3', '6', '9', '8'],
    ['7', '1', '9', '5'],
    ['6'],
    ['8', '4', '7'],
    ['6', '8', '3', '2'],
    ['3', '1', '6'],
    ['6'],
    ['4', '1', '9', '8'],
    ['2', '8', '5', '7', '9'],
  ];

  const { rows, cols, squares } = removeEmptyCells(validSudoku);

  expect(rows).toStrictEqual(correctRows);
  expect(cols).toStrictEqual(correctCols);
  expect(squares).toStrictEqual(correctSquares);
});

it('isValidSudoku', function() {
  expect(isValidSudoku(validSudoku)).toBe(true);
  expect(isValidSudoku(invalidSudoku)).toBe(false);
  expect(isValidSudoku(failingTestSudoku)).toBe(false);
});