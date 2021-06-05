import React from 'react';
import { HandleSquareClickFnType, PositionType, SquareType } from '../types';
import { BoardSquareContainer, BoardSquareItem, SquareText } from './elements';

interface Props {
  square: SquareType;
  pos: PositionType;
  handleSquareClick: HandleSquareClickFnType;
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