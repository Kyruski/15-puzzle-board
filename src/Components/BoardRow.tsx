import React, { useState } from 'react';
import { square } from '../types';
import { BoardRowContainer, LeftControl, RightControl } from './elements';
import { BoardSquare } from './BoardSquare'

interface Props {
  row: square[];
}

export const BoardRow: React.FC<Props> = ({ row }) => {


  return (
    <BoardRowContainer>
      <LeftControl>
        {'←'}
      </LeftControl>
      {row.map((square, key) => (
        <BoardSquare square={square} key={`square${key}`} />
      ))}
      <RightControl>
        {'→'}
      </RightControl>
    </BoardRowContainer>
  )
}