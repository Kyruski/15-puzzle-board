import React from 'react';
import { ControlArrowContainer, ControlSquareContainer } from './elements';
import { MoveMultipleFnType, NulledPositionType } from '../types';

interface Props {
  arrow: string;
  pos: NulledPositionType;
  moveMultiple: MoveMultipleFnType;
}

export const ControlSquare: React.FC<Props> = ({ arrow, moveMultiple, pos }) => {

  return (
    <ControlSquareContainer onClick={() => moveMultiple(pos, arrow)}>
      <ControlArrowContainer>
        {arrow === 'top' ? `🔼` : `🔽`}
      </ControlArrowContainer>
    </ControlSquareContainer>

  )
}