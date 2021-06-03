import React from 'react';
import { ControlSquareContainer, TopControl } from './elements';

interface Props {
  arrow: string;
}

export const ControlSquare: React.FC<Props> = ({ arrow }) => {

  return (
    <ControlSquareContainer>
      {arrow}
    </ControlSquareContainer>

  )
}