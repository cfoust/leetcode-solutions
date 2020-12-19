let board = [[".",".",".","7",".",".","3",".","1"],["3",".",".","9",".",".",".",".","."],[".","4",".","3","1",".","2",".","."],[".","6",".","4",".",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".","1",".",".","8",".","4","."],[".",".","6",".","2","1",".","5","."],[".",".",".",".",".","9",".",".","8"],["8",".","5",".",".","4",".",".","."]]
//board = [[".","8","9",".","4",".","6",".","5"],[".","7",".",".",".","8",".","4","1"],["5","6",".","9",".",".",".",".","8"],[".",".",".","7",".","5",".","9","."],[".","9",".","4",".","1",".","5","."],[".","3",".","9",".","6",".","1","."],["8",".",".",".",".",".",".",".","7"],[".","2",".","8",".",".",".","6","."],[".",".","6",".","7",".",".","8","."]]

// Change into better representation
board = board.map(line => line.map(v => v === '.' ? null : parseInt(v)))

const DIVISION = 3
const POSSIBLE = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const canUse = (board, row, col) => {
  const squareRow = Math.floor(row / DIVISION) * DIVISION
  const squareCol = Math.floor(col / DIVISION) * DIVISION

  const elements = [
    // row
    ...board[row],
    // column
    ...board.map(v => v[col]),
    // Square
    ...board[squareRow].slice(squareCol, squareCol + DIVISION),
    ...board[squareRow + 1].slice(squareCol, squareCol + DIVISION),
    ...board[squareRow + 2].slice(squareCol, squareCol + DIVISION)
  ].filter(v => v != null)
  const unique = new Set(elements)

  return POSSIBLE.filter(v => !unique.has(v))
}

const printBoard = board => {
  board.map(line => console.log(line.map(v => v == null? '.' : v.toString()).join(' ')))
  console.log('  ');
}


const changeBoard = (board, i, j, num) => board.map((row, rowIndex) => row.map((col, colIndex) => {
  if (rowIndex === i && colIndex === j) {
    return num
  }
  return col
}))

printBoard(board)

const isSolved = board => {
  for (let i = 0; i < DIVISION; i++) {
    for (let j = 0; j < DIVISION; j++) {
      if (canUse(board, i * DIVISION, j * DIVISION).length > 0) {
        return false
      }
    }
  }

  if (board.reduce((a, v) => [...a, ...v]).some(v => v == null)) {
    return false
  }

  return true
}

const solveBoard = board => {
  if (isSolved(board)) {
    return true
  }

  let solutions = [board]
  let attempts = 0
  while (solutions.length > 0 && !isSolved(solutions[0]) && attempts < 3) {
    const current = solutions.pop()

    if (isSolved(current)) {
      console.log('done');
      printBoard(current)
      return true
    }

    let firstEmpty = null

    for (let i = 0; i < DIVISION * DIVISION; i++) {
      for (let j = 0; j < DIVISION * DIVISION; j++) {
        if (current[i][j] == null) {
          firstEmpty = [i, j]
          break
        }
      }

      if (firstEmpty != null) {
        break;
      }
    }

    if (firstEmpty == null) {
      continue;
    }

    const [emptyR, emptyC] = firstEmpty
    const possibilities = canUse(current, emptyR, emptyC)
      .map(v => {
        return changeBoard(current, emptyR, emptyC, v)
      })

    solutions = [...solutions, ...possibilities]
  }

  return false
}

console.log(solveBoard(board));
