import React from 'react';
import { MoveMultipleFnType } from '../types';
import { ControlSquare } from './ControlSquare';

interface Props {
  row: boolean[];
  arrow: string;
  moveMultiple: MoveMultipleFnType;
}

export const ControlRow: React.FC<Props> = ({ row, arrow, moveMultiple }) => {

  return (
    <div>
      {row.map((_, index) => <ControlSquare arrow={arrow} moveMultiple={moveMultiple} pos={[null, index]} key={index} />)}
    </div>
  )
}