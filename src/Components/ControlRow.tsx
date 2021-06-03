import React from 'react';
import { ControlSquare } from './ControlSquare';
import { ControlRowContainer } from './elements';

interface Props {
  row: boolean[];
  arrow: string;
  moveMultiple: Function;
  arrowClick: string;
}

export const ControlRow: React.FC<Props> = ({ row, arrow, moveMultiple, arrowClick }) => {

  return (
    <ControlRowContainer>

      {row.map((item, index) => <ControlSquare arrow={arrow} arrowClick={arrowClick} moveMultiple={moveMultiple} pos={[null, index]} key={index} />)}
    </ControlRowContainer>
  )
}