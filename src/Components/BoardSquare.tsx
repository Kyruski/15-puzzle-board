import React, { useState } from 'react';
import { square } from '../types';
import { BoardSquareContainer, SquareText } from './elements';

interface Props {
  square: square;
}

export const BoardSquare: React.FC<Props> = ({ square }) => {
  const isFilled = !!square;
  return (
    <BoardSquareContainer isFilled={isFilled} >
      <SquareText>
        {square || ''}
      </SquareText>
    </BoardSquareContainer>
  )
}