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

  const handleSquareClick = (pos: number[]): void => {
    const newMatrix = [...board]; //working matrix since board is immutable
    if ( //check if valid move
      (Math.abs(pos[0] - openSpace[0]) === 1 && pos[1] === openSpace[1]) || //if in same column and adjacent
      (Math.abs(pos[1] - openSpace[1]) === 1 && pos[0] === openSpace[0]) //if in same row and adjacent
    ) {
      [newMatrix[pos[0]][pos[1]], newMatrix[openSpace[0]][openSpace[1]]] = [newMatrix[openSpace[0]][openSpace[1]], newMatrix[pos[0]][pos[1]]]; //swap spots
      setBoard(newMatrix); //set new board
      setOpenSpace(pos); //set new Open Space
    }
  }

  const moveMultiple = (pos: square[], arrowClick: string): void => {
    console.log(pos, openSpace, board);
    const newMatrix = [...board]; //working matrix since board is immutable
    let newPos = [0, 0];
    if (pos[1] !== null) {
      if (arrowClick === 'bottom' || arrowClick === 'right') {
        for (let i = openSpace[0]; i > 0; i--) { //work from open space to end, excluding 0th index since it switches
          [newMatrix[i][pos[1]], newMatrix[i - 1][pos[1]]] = [newMatrix[i - 1][pos[1]], newMatrix[i][pos[1]]] //swap spots
        }
        newPos = [0, pos[1]];
      } else {
        for (let i = openSpace[0]; i < 3; i++) {
          [newMatrix[i][pos[1]], newMatrix[i + 1][pos[1]]] = [newMatrix[i + 1][pos[1]], newMatrix[i][pos[1]]] //swap spots
        }
        newPos = [3, pos[1]];
      }
    } else {
      if (arrowClick === 'bottom' || arrowClick === 'right') {
        for (let i = openSpace[1]; i > 0; i--) { //work from open space to end, excluding 0th index since it switches
          [newMatrix[pos[0]][i], newMatrix[pos[0]][i - 1]] = [newMatrix[pos[0]][i - 1], newMatrix[pos[0]][i]] //swap spots
        }
        newPos = [pos[0], 0];
      } else {
        for (let i = openSpace[1]; i < 3; i++) {
          [newMatrix[pos[0]][i], newMatrix[pos[0]][i + 1]] = [newMatrix[pos[0]][i + 1], newMatrix[pos[0]][i]] //swap spots
        }
        newPos = [pos[0], 3];
      }
    }
    setBoard(newMatrix);
    setOpenSpace(newPos);
  }

  return (
    <GameContainer>
      <BoardContainer>
        <TopBottomContainer>
          <TopControl>
            <ControlRow row={controllRow} moveMultiple={moveMultiple} arrowClick={'top'} arrow={'↑'} />
          </TopControl>
        </TopBottomContainer>
        {board.map((row, index) => (<BoardRow row={row} handleSquareClick={handleSquareClick} moveMultiple={moveMultiple} rowIndex={index} key={`row${index}`} />))}
        <TopBottomContainer>
          <BottomControl>
            <ControlRow row={controllRow} moveMultiple={moveMultiple} arrowClick={'bottom'} arrow={'↓'} />
          </BottomControl>
        </TopBottomContainer>
      </BoardContainer>
    </GameContainer>
  )
}