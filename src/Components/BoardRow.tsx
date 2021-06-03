import React, { useState } from 'react';
import { square } from '../types';
import { BoardRowContainer, LeftControl, RightControl } from './elements';
import { BoardSquare } from './BoardSquare'

interface Props {
  row: square[];
  rowIndex: number;
  handleSquareClick: Function;
}

export const BoardRow: React.FC<Props> = ({ row, rowIndex, handleSquareClick }) => {


  return (
    <BoardRowContainer>
      <LeftControl>
        {'←'}
      </LeftControl>
      {row.map((square, index) => (
        <BoardSquare square={square} handleSquareClick={handleSquareClick} pos={[rowIndex, index]} key={`square${index}`} />
      ))}
      <RightControl>
        {'→'}
      </RightControl>
    </BoardRowContainer>
  )
}