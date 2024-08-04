import React from 'react';

const Pawn = ({ board, row, col, tileType }) => {

  const validMove = () => {
    const N = board.length;
    const M = board[0].length;
   
    const whitePawnDirs = [
      [-1, 0],
      [-2, 0],
      [-1, -1],
      [-1, 1]
    ];

    const blackPawnDirs = [
      [1, 0],
      [2, 0],
      [1, -1],
      [1, 1]
    ];
    function color(row, col) {
      const x = String(row) + String(col);
      // console.log(`${x}`);
      const element = document.getElementById(`${x}`);
      element.style.backgroundColor = 'red';
    }
    function valid(i, j, n, m) {
      return i >= 0 && j >= 0 && i < n && j < m
    }
    for (let dir of whitePawnDirs) {
      

      if (valid(row + dir[0], col + dir[1], N, M)) {
        color(row + dir[0],col + dir[1])
        if (board[row + dir[0]][col + dir[1]] != null) {
          
          // console.log("some tile")
        }
      }
    }
  }

  return (
    <div>
      {validMove()}
    </div>
  );
}

export default Pawn;
