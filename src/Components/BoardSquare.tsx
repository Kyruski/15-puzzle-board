import React, { useState } from 'react';
import { square } from '../types';
import { BoardSquareContainer } from './elements';

interface Props {
  square: square;
}

export const BoardRow: React.FC<Props> = ({ square }) => {

  return (
    <BoardSquareContainer>
      {square || ''}
    </BoardSquareContainer>
  )
}