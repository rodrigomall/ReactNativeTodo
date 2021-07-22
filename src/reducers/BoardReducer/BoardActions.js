export const setBoardData = (boardData) => {
  return {
    type: 'SET_BOARD_DATA',
    payload: boardData
  };
};

export const clearBoardData = () => {
  return {
    type: 'CLEAR_BOARD_DATA'
  };
};