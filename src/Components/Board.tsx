import React, { useState } from 'react';
import { BoardContainer } from './elements';
import { BoardRow } from './BoardRow';

const initialBoard = () => {
  const nums = Array(16).fill(null);
  for (let i = 1; i <= 15; i++) {
    if (!nums.includes(i)) {
      let randIndex = Math.floor(Math.random() * 16);
      while (nums[randIndex]) {
        randIndex = Math.floor(Math.random() * 16);
      }
      nums[randIndex] = i;
    }
  }
  const board = []
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      row.push(nums.pop());
    }
    board.push(row);
  }
  return board;
}

export const Board = () => {
  const [board, setBoard] = useState(initialBoard());

  return (
    <BoardContainer>
      {board.map((row, key) => (<BoardRow row={row} key={`row${key}`} />))}
    </BoardContainer>
  )
}