import React, { useState } from 'react';
import { BoardRow } from './BoardRow';
import { ControlRow } from './ControlRow';
import { BoardContainer, GameContainer, TopBottomContainer, BottomControl, TopControl } from './elements';

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

  const controllRow = [true, true, true, true];

  return (
    <GameContainer>
      <BoardContainer>
        <TopBottomContainer>
          <TopControl>
            <ControlRow row={controllRow} arrow={'↑'} />
          </TopControl>
        </TopBottomContainer>
        {board.map((row, key) => (<BoardRow row={row} key={`row${key}`} />))}
        <TopBottomContainer>
          <BottomControl>
            <ControlRow row={controllRow} arrow={'↓'} />
          </BottomControl>
        </TopBottomContainer>
      </BoardContainer>
    </GameContainer>
  )
}