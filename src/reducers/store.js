import { createStore, combineReducers } from 'redux';
import board from './BoardReducer/BoardReducer';

const reducer = combineReducers({
    board
});

export default createStore(reducer);