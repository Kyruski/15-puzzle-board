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

export const ControlSquareContainer = styled.div`
  display: inline-block;
  width: 82px; 
`;

export const ControlArrowContainer = styled.p`
  cursor: pointer;
`;


export const GenericControl = styled(BoardSquareContainer)`
  font-size: 30px;
  position: absolute;
`;

export const LeftRightControl = styled(GenericControl)`
  width: 30px;
  top: -7px;
`;

export const TopBottomControl = styled(GenericControl)`
  height: 30px;
  text-align: center;
`;

export const TopBottomContainer = styled.div`
  position: relative;
`;

export const TopControl = styled(TopBottomControl)`
  top: -68px;
`;

export const BottomControl = styled(TopBottomControl)`
  bottom: -1px;
`;

export const LeftControl = styled(LeftRightControl)`
  left: -35px;
`;

export const RightControl = styled(LeftRightControl)`
  right: -35px;
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