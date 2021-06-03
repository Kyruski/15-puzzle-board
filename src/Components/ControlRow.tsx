import React from 'react';
import { ControlSquare } from './ControlSquare';
import { ControlRowContainer } from './elements';

interface Props {
  row: boolean[];
  arrow: string;
}

export const ControlRow: React.FC<Props> = ({ row, arrow }) => {

  return (
    <ControlRowContainer>

      {row.map((item, key) => (<ControlSquare arrow={arrow} key={key} />))}
    </ControlRowContainer>
  )
}