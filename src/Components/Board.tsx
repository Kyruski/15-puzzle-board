import React, { useState } from 'react';
import { BoardType, NulledPositionType, PositionType } from '../types';
import { BoardRow } from './BoardRow';
import { ControlRow } from './ControlRow';
import { BoardContainer, GameContainer, BottomControl, TopControl, BoardRowContainer } from './elements';

const initialBoard = (): [BoardType, PositionType] => {
  const nums = Array(16).fill(null); //create empty array with 'null'
  const open: PositionType = [0, 0];
  const board = []

  for (let i = 1; i <= 15; i++) { //populate the array with numbers 1-15 in random indexs
    if (!nums.includes(i)) {
      let randIndex = Math.floor(Math.random() * 16);
      while (nums[randIndex]) { //if the value at the index isn't null, recompute index
        randIndex = Math.floor(Math.random() * 16);
      }
      nums[randIndex] = i;
    }
  }

  for (let i = 0; i < 4; i++) { //run through the array turning into 2d matrix for board
    const row = [];
    for (let j = 0; j < 4; j++) {
      let num = nums.pop()
      row.push(num);
      if (num === null) {
        [open[0], open[1]] = [i, j]; //if the value null, we have our open space
      }
    }
    board.push(row);
  }

  return [board, open];
}

const [boardMatrix, open] = initialBoard();

export const Board = () => {
  const [board, setBoard] = useState(boardMatrix);
  const [openSpace, setOpenSpace] = useState(open)

  const controllRow = [true, true, true, true]; // just to ake a 4 length array to ap over for controls

  const handleSquareClick = (pos: PositionType): void => {
    const newMatrix = [...board]; //working matrix since board is immutable

    if ( //check if valid move
      (Math.abs(pos[0] - openSpace[0]) === 1 && pos[1] === openSpace[1]) || //if in same column and adjacent
      (Math.abs(pos[1] - openSpace[1]) === 1 && pos[0] === openSpace[0]) //if in same row and adjacent
    ) {
      [newMatrix[pos[0]][pos[1]], newMatrix[openSpace[0]][openSpace[1]]] = [newMatrix[openSpace[0]][openSpace[1]], newMatrix[pos[0]][pos[1]]]; //swap spots
      setBoard(newMatrix); //set new board
      setOpenSpace(pos); //set new openSpace
    }
  }

  const moveMultiple = (pos: NulledPositionType, arrow: string): void => {
    const newMatrix = [...board]; //working matrix since board is immutable
    let newPos: PositionType = [...openSpace];

    if (pos[0] === null && pos[1] === openSpace[1]) { //checking if it's a column (if pos[0] is null) and if it's the correct column
      if (arrow === 'bottom' || arrow === 'right') { //if the arrow is click from the bottom or right
        for (let i = openSpace[0]; i > 0; i--) { //work from open space to start, excluding 0th index since it switches
          [newMatrix[i][pos[1]], newMatrix[i - 1][pos[1]]] = [newMatrix[i - 1][pos[1]], newMatrix[i][pos[1]]] //swap spots
        }
        newPos = [0, pos[1]];
      } else { //else arrow is clicked from top or left
        for (let i = openSpace[0]; i < 3; i++) { //work from open space to end, excluding the last index sicne it switches
          [newMatrix[i][pos[1]], newMatrix[i + 1][pos[1]]] = [newMatrix[i + 1][pos[1]], newMatrix[i][pos[1]]] //swap spots
        }
        newPos = [3, pos[1]];
      }
    } else if (pos[1] === null && pos[0] === openSpace[0]) { //checking if it's a row (if pos[1] is null) and if it's the correct row
      if (arrow === 'bottom' || arrow === 'right') { //if the arrow is click from the bottom or right
        for (let i = openSpace[1]; i > 0; i--) { //work from open space to start, excluding 0th index since it switches
          [newMatrix[pos[0]][i], newMatrix[pos[0]][i - 1]] = [newMatrix[pos[0]][i - 1], newMatrix[pos[0]][i]] //swap spots
        }
        newPos = [pos[0], 0];
      } else { //else arrow is clicked from top or left
        for (let i = openSpace[1]; i < 3; i++) { //work from open space to end, excluding the last index sicne it switches
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
        <BoardRowContainer>
          <TopControl>
            <ControlRow row={controllRow} moveMultiple={moveMultiple} arrow={'top'} />
          </TopControl>
        </BoardRowContainer>
        {board.map((row, index) => (<BoardRow row={row} handleSquareClick={handleSquareClick} moveMultiple={moveMultiple} rowIndex={index} key={`row${index}`} />))}
        <BoardRowContainer>
          <BottomControl>
            <ControlRow row={controllRow} moveMultiple={moveMultiple} arrow={'bottom'} />
          </BottomControl>
        </BoardRowContainer>
      </BoardContainer>
    </GameContainer>
  )
}