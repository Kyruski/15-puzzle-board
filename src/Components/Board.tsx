import React, { useState } from 'react';
import { square } from '../types';
import { BoardRow } from './BoardRow';
import { ControlRow } from './ControlRow';
import { BoardContainer, GameContainer, TopBottomContainer, BottomControl, TopControl } from './elements';

const initialBoard = (): [square[][], number[]] => {
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
  let open = [0, 0];
  const board = []
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      let num = nums.pop()
      row.push(num);
      if (num === null) open = [i, j];
    }
    board.push(row);
  }
  return [board, open];
}

const [boardMatrix, open] = initialBoard();

export const Board = () => {
  const [board, setBoard] = useState(initialBoard());
  const [openSpace, setOpenSpace] = useState(open)

  const controllRow = [true, true, true, true];

  const moveSquare = (matrix: square[][], pos: number[]): square[][] => {
    const newMatrix = [...matrix];
    [newMatrix[pos[0]][pos[1]], newMatrix[open[0]][open[1]]] = [newMatrix[open[0]][open[1]], newMatrix[pos[0]][pos[1]]];
    return newMatrix;
  }


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