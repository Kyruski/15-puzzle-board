import React, { useState } from 'react';
import { BoardContainer } from './elements';
import { BoardRow } from './BoardRow';

const initialBoard = () => {
  const board = Array(16).fill(null);
  for (let i = 1; i <= 15; i++) {
    if (!board.includes(i)) {
      let randIndex = Math.floor(Math.random() * 16);
      while (board[randIndex]) {
        randIndex = Math.floor(Math.random() * 16);
      }
      board[randIndex] = i;
    }
  }
  return board;
}

export const Board = () => {
  const [board, setBoard] = useState(initialBoard());

  return (
    <BoardContainer>
      {board.map(row => (<BoardRow row={row} />))}
    </BoardContainer>
  )
}