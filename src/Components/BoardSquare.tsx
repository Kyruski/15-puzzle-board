import React, { useState } from 'react';
import { square } from '../types';
import { BoardSquareContainer, BoardSquareItem, SquareText } from './elements';

interface Props {
  square: square;
}

export const BoardSquare: React.FC<Props> = ({ square }) => {
  const isFilled = !!square;
  return (
    <BoardSquareContainer >
      <BoardSquareItem isFilled={isFilled} >
        <SquareText>
          {square || '\u00A0'}
        </SquareText>
      </BoardSquareItem>
    </BoardSquareContainer>
  )
}