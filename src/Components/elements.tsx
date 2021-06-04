import styled from 'styled-components';

export const GameContainer = styled.div`
  margin: 50px;
`;

export const BoardContainer = styled.div`
  margin: auto auto;
  height: fit-content;
  width: fit-content;
  border: 2px black solid;
`

export const BoardRowContainer = styled.div`
  position: relative;
`

export const BoardSquareContainer = styled.div`
display: inline-block;
`;

export const ControlRowContainer = styled.div`

`;

export const ControlSquareContainer = styled.div`
display: inline-block;
  width: 82px;
`;

export const LeftRightControl = styled(BoardSquareContainer)`
  width: 30px;
  font-size: 30px;
  position: absolute;
  top: 20px;
`;

export const TopBottomControl = styled(BoardSquareContainer)`
  height: 30px;
  font-size: 30px;
  position: absolute;
  text-align: center;
`;

export const TopBottomContainer = styled.div`
  position: relative;
`;

export const TopControl = styled(TopBottomControl)`
  top: -37px;
`;

export const BottomControl = styled(TopBottomControl)`
  bottom: -25px;
`;

export const LeftControl = styled(LeftRightControl)`
  left: -25px;
`;

export const RightControl = styled(LeftRightControl)`
  right: -32px;
`;

export const BoardSquareItem = styled.div<{ isFilled: boolean }>`
  background-color: ${({ isFilled }) => isFilled ? '#2d5178' : 'white'};
    
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  height: 80px;
  width: 80px;
`;

export const SquareText = styled.div`
  font-size: 24px;
  color: white;
`;