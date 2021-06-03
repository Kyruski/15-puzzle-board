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
  const [board, setBoard] = useState(boardMatrix);
  const [openSpace, setOpenSpace] = useState(open)

  const controllRow = [true, true, true, true];

  const moveSquare = (matrix: square[][], pos: number[]): square[][] => {
    const newMatrix = [...matrix];
    [newMatrix[pos[0]][pos[1]], newMatrix[openSpace[0]][openSpace[1]]] = [newMatrix[openSpace[0]][openSpace[1]], newMatrix[pos[0]][pos[1]]];
    return newMatrix;
  }

  const handleSquareClick = (pos: number[]): void => {
    if ( //check if valid move
      (Math.abs(pos[0] - openSpace[0]) === 1 && pos[1] === openSpace[1]) ||
      (Math.abs(pos[1] - openSpace[1]) === 1 && pos[0] === openSpace[0])
    ) {
      setBoard(moveSquare(board, pos));
      setOpenSpace(pos);
    }
  }

  // const handleMultiple = () => {

  // }

  return (
    <GameContainer>
      <BoardContainer>
        <TopBottomContainer>
          <TopControl>
            <ControlRow row={controllRow} arrow={'↑'} />
          </TopControl>
        </TopBottomContainer>
        {board.map((row, index) => (<BoardRow row={row} handleSquareClick={handleSquareClick} rowIndex={index} key={`row${index}`} />))}
        <TopBottomContainer>
          <BottomControl>
            <ControlRow row={controllRow} arrow={'↓'} />
          </BottomControl>
        </TopBottomContainer>
      </BoardContainer>
    </GameContainer>
  )
}