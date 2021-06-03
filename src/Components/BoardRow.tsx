import React, { useState } from 'react';
import { square } from '../types';
import { BoardRowContainer, LeftControl, RightControl } from './elements';
import { BoardSquare } from './BoardSquare'

interface Props {
  row: square[];
  rowIndex: number;
  handleSquareClick: Function;
  moveMultiple: Function;
}

export const BoardRow: React.FC<Props> = ({ row, rowIndex, handleSquareClick, moveMultiple }) => {


  return (
    <BoardRowContainer>
      <LeftControl onClick={() => moveMultiple([rowIndex, null], 'left')}>
        {'←'}
      </LeftControl>
      {row.map((square, index) => (
        <BoardSquare square={square} handleSquareClick={handleSquareClick} pos={[rowIndex, index]} key={`square${index}`} />
      ))}
      <RightControl onClick={() => moveMultiple([rowIndex, null], 'right')}>
        {'→'}
      </RightControl>
    </BoardRowContainer>
  )
}