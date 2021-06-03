import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin: auto auto;
  height: 508px;
  width: 508px;
  border: 1px black solid;
`

export const BoardRowContainer = styled.div`
  display: inline-block;
`

export const BoardSquareContainer = styled.div<{ isFilled: boolean }>`
  border: 1px white solid;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 125px;
  width: 125px;

  background-color: ${({ isFilled }) => isFilled ? '#2d5178' : 'white'};
`;

export const SquareText = styled.p`
  color: white;
`;