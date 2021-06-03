import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin: auto auto;
  height: 508px;
  width: 508px;
  border: 1px black solid;
`

export const BoardRowContainer = styled.div`
`

export const BoardSquareContainer = styled.div`

  display: inline-block;
`;

export const BoardSquareItem = styled.div<{ isFilled: boolean }>`
  background-color: ${({ isFilled }) => isFilled ? '#2d5178' : 'white'};
    
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  height: 125px;
  width: 125px;
`;

export const SquareText = styled.span`
  color: white;
`;