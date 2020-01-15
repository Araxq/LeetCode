/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const { rows, cols, squares } = removeEmptyCells(board);
  const validateRight = createValidateRight(rows);
  const validateDown = createValidateDown(cols);
  const validateNext = createValidateNext(squares);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') continue;
      if (!(validateRight(i) && validateDown(j) && validateNext(i, j)))
        return false;
    }
  }

  return true;
};

const removeEmptyCells = board => {
  const rows = Array(9)
    .fill(null)
    .map(() => []);
  const cols = Array(9)
    .fill(null)
    .map(() => []);
  const squares = Array(9)
    .fill(null)
    .map(() => []);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];
      if (digit === '.') continue;
      rows[i].push(digit);
      cols[j].push(digit);
      squares[chooseSquare(i, j)].push(digit);
    }
  }

  return { rows, cols, squares };
};

const createValidateRight = rows => rowInd => {
  const row = rows[rowInd];
  for (let i = 1; i < row.length; i++) {
    if (row[i] === row[0]) return false;
  }
  row.shift();
  return true;
};

const createValidateDown = cols => colInd => {
  const col = cols[colInd];
  for (let i = 1; i < col.length; i++) {
    if (col[i] === col[0]) return false;
  }
  col.shift();
  return true;
};

const createValidateNext = squares => (i, j) => {
  const square = squares[chooseSquare(i, j)];
  for (let i = 1; i < square.length; i++) {
    if (square[i] === square[0]) return false;
  }
  square.shift();
  return true;
};

const chooseSquare = (i, j) => {
  const checkPart = (i, a, b, c) => {
    return i === a || i === b || i === c;
  };

  if (checkPart(i, 0, 1, 2)) {
    if (checkPart(j, 0, 1, 2)) {
      return 0;
    } else if (checkPart(j, 3, 4, 5)) {
      return 1;
    } else return 2;
  } else if (checkPart(i, 3, 4, 5)) {
    if (checkPart(j, 0, 1, 2)) {
      return 3;
    } else if (checkPart(j, 3, 4, 5)) {
      return 4;
    } else return 5;
  } else if (checkPart(i, 6, 7, 8)) {
    if (checkPart(j, 0, 1, 2)) {
      return 6;
    } else if (checkPart(j, 3, 4, 5)) {
      return 7;
    } else return 8;
  }
};

module.exports = {
  chooseSquare,
  removeEmptyCells,
  isValidSudoku,
};
