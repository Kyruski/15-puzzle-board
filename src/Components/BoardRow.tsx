import React, { useState } from 'react';
import { square } from '../types';
import { BoardRowContainer } from './elements';

interface Props {
  row: square[];
}

export const BoardRow: React.FC<Props> = ({ row }) => {

  return (
    <BoardRowContainer>
      {row.map(square => (<BoardSquare square={square} />))}
    </BoardRowContainer>
  )
}