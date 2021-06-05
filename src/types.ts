export type SquareType = number | null;

export type RowType = SquareType[];

export type BoardType = RowType[];

export type PositionType = [number, number];

export type NulledPositionType = [null, number] | [number, null];

export type MoveMultipleFnType = (pos: NulledPositionType, arrow: string) => void;

export type HandleSquareClickFnType = (pos: PositionType) => void;