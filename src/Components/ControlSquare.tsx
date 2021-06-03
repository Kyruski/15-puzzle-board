import React from 'react';
import { ControlSquareContainer, TopControl } from './elements';
import { square } from '../types';

interface Props {
  arrow: string;
  pos: square[];
  moveMultiple: Function;
  arrowClick: string;
}

export const ControlSquare: React.FC<Props> = ({ arrow, moveMultiple, pos, arrowClick }) => {

  return (
    <ControlSquareContainer onClick={() => moveMultiple(pos, arrowClick)}>
      {arrow}
    </ControlSquareContainer>

  )
}