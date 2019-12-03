/*eslint complexity: ["error", 20]*/
/* Find The Words

Given a "board" as a 2D array and a "word" as a string of letters, return true if the string of letters can be found in the board by traversing vertically and horizontally, only, and return false if it cannot.

*/
const board1 = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O']
];
const board2 = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O']
];
const board3 = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O']
];
const board4 = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O']
];

function searchAround(board, word, rowIdx, colIdx) {
  if (!word[0]) {
    return true;
  } else {
    let tempChar = board[rowIdx][colIdx];
    board[rowIdx][colIdx] = 0;
    let thisChar = word[0];

    if (rowIdx > 0 && board[rowIdx - 1][colIdx] === thisChar) {
      let newWord = word.slice(1);
      return searchAround(board, newWord, rowIdx - 1, colIdx);
    }
    if (colIdx > 0 && board[rowIdx][colIdx - 1] === thisChar) {
      let newWord = word.slice(1);
      return searchAround(board, newWord, rowIdx, colIdx - 1);
    }
    if (
      colIdx < board[0].length - 1 &&
      board[rowIdx][colIdx + 1] === thisChar
    ) {
      let newWord = word.slice(1);
      return searchAround(board, newWord, rowIdx, colIdx + 1);
    }
    if (rowIdx < board.length - 1 && board[rowIdx + 1][colIdx] === thisChar) {
      let newWord = word.slice(1);
      return searchAround(board, newWord, rowIdx + 1, colIdx);
    }
    board[rowIdx][colIdx] = tempChar;
    return false;
  }
}

function findWord(board, word) {
  let thisChar = word[0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let currentElem = board[i][j];
      if (thisChar === currentElem) {
        let newWord = word.slice(1);
        if (searchAround(board, newWord, i, j)) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log('true?', findWord(board1, 'ABCD'));
console.log('true?', findWord(board2, 'ABG'));
console.log('true?', findWord(board3, 'ABGHMN'));
console.log('false?', findWord(board4, 'AAA'));
