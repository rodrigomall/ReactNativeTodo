const INITIAL_STATE = {
  boardLists: []
};
  
const BoardReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_BOARD_DATA':
      console.log('action.payload', action.payload)
      return {
        ...state,
        boardLists: action.payload
      };
    case 'CLEAR_BOARD_DATA':
      return INITIAL_STATE;
    default:
      return state;
  }
};
  
  export default BoardReducer;