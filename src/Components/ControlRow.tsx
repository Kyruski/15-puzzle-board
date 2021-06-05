import React from 'react';
import { ControlSquare } from './ControlSquare';

interface Props {
  row: boolean[];
  arrow: string;
  moveMultiple: Function;
}

export const ControlRow: React.FC<Props> = ({ row, arrow, moveMultiple }) => {

  return (
    <div>

      {row.map((item, index) => <ControlSquare arrow={arrow} moveMultiple={moveMultiple} pos={[null, index]} key={index} />)}
    </div>
  )
}