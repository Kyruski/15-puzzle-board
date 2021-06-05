import React from 'react';
import { RowType, MoveMultipleFnType, HandleSquareClickFnType } from '../types';
import { BoardRowContainer, ControlArrowContainer, LeftControl, RightControl } from './elements';
import { BoardSquare } from './BoardSquare'

interface Props {
  row: RowType;
  rowIndex: number;
  handleSquareClick: HandleSquareClickFnType;
  moveMultiple: MoveMultipleFnType;
}

export const BoardRow: React.FC<Props> = ({ row, rowIndex, handleSquareClick, moveMultiple }) => {

  return (
    <BoardRowContainer>
      <LeftControl onClick={() => moveMultiple([rowIndex, null], 'left')}>
        <ControlArrowContainer>
          ◀️
      </ControlArrowContainer>
      </LeftControl>
      {row.map((square, index) => (
        <BoardSquare square={square} handleSquareClick={handleSquareClick} pos={[rowIndex, index]} key={`square${rowIndex}-${index}`} />
      ))}
      <RightControl onClick={() => moveMultiple([rowIndex, null], 'right')}>
        <ControlArrowContainer>
          ▶️
        </ControlArrowContainer>
      </RightControl>
    </BoardRowContainer>
  )
}