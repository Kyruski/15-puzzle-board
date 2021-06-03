import React, { useState } from 'react';
import { square } from '../types';
import { BoardSquareContainer, BoardSquareItem, SquareText } from './elements';

interface Props {
  square: square;
  pos: number[];
  handleSquareClick: Function;
}

export const BoardSquare: React.FC<Props> = ({ square, pos, handleSquareClick }) => {
  const isFilled = !!square;
  return (
    <BoardSquareContainer onClick={() => handleSquareClick(pos)}>
      <BoardSquareItem isFilled={isFilled} >
        <SquareText>
          {square || '\u00A0'}
        </SquareText>
      </BoardSquareItem>
    </BoardSquareContainer>
  )
}