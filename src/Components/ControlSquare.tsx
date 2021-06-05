import React from 'react';
import { ControlArrowContainer, ControlSquareContainer, TopControl } from './elements';
import { square } from '../types';

interface Props {
  arrow: string;
  pos: square[];
  moveMultiple: Function;
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