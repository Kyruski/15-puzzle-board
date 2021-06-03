import styled from 'styled-components';

export const GameContainer = styled.div`
  margin: 200px;
`;

export const BoardContainer = styled.div`
  margin: auto auto;
  height: fit-content;
  width: fit-content;
  border: 1px black solid;
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
  width: 132px;
`;

export const LeftRightControl = styled(BoardSquareContainer)`
  width: 40px;
  font-size: 40px;
  position: absolute;
  top: 45px;
`;

export const TopBottomControl = styled(BoardSquareContainer)`
  height: 40px;
  font-size: 40px;
  position: absolute;
  text-align: center;
`;

export const TopBottomContainer = styled.div`
  position: relative;
`;

export const TopControl = styled(TopBottomControl)`
  top: -50px;
`;

export const BottomControl = styled(TopBottomControl)`
  bottom: -40px;
`;

export const LeftControl = styled(LeftRightControl)`
  left: -45px;
`;

export const RightControl = styled(LeftRightControl)`
  right: -45px;
`;

export const BoardSquareItem = styled.div<{ isFilled: boolean }>`
  background-color: ${({ isFilled }) => isFilled ? '#2d5178' : 'white'};
    
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  height: 130px;
  width: 130px;
`;

export const SquareText = styled.span`
  color: white;
`;