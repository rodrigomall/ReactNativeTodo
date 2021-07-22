import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Joi from 'react-native-joi';
import styles from '../../../styles/styles';
import { setBoardData } from '../../../reducers/BoardReducer/BoardActions';

const REDUCER_ACTIONS = {
  TASK_INPUT: 'TASK_INPUT',
  SET_ERRORS: 'SET_ERRORS',
}

const INITIAL_STATE = {
  taskInput: {
    title: '',
    deadLine: ''
  },
  errors: [],
}


const reducer = (state, {type, payload}) => {
  switch (type) {
    case REDUCER_ACTIONS.TASK_INPUT:
      return {
        ...state,
        taskInput: {
          ...state.taskInput,
          [payload.field]: payload.value
        },
        errors: state.errors.filter(err => err !== payload.field)
      };
    case REDUCER_ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

const SCHEMA = Joi.object({
  title: Joi.string().required().min(2),
  //deadLine: Joi.string().required().min(2),
});


const useTask = (navigation) => {
  let boardLists = useSelector(({board}) => board.boardLists);
  const dispatch = useDispatch();
  const [stateDispatch, setDispatch] = useReducer(reducer, INITIAL_STATE);
  const { taskInput, errors } =  stateDispatch;
  const { title, deadLine } =  taskInput;
  const validate = () => {
    const fields = { title };
    const validation = Joi.validate(fields, SCHEMA, {abortEarly: false});
    if (validation.error) {
      const errorMap = validation.error.details.map(e => e.context.key);
      setDispatch({
        type: REDUCER_ACTIONS.SET_ERRORS,
        payload: errorMap
      });
      return false;
    }
    setDispatch({
      type: REDUCER_ACTIONS.SET_ERRORS,
      payload: []
    });
    return true;
  };

  const onCreateTask = async () => {
    try {
      if(validate()){
        if(boardLists.length > 0) {
          const result = boardLists.concat([taskInput]);
          dispatch(setBoardData(result));
          await AsyncStorage.setItem('taskInputStored', JSON.stringify(result));
        } else {
          dispatch(setBoardData([taskInput]));
        }
      } else {
        console.log('invalid');
      }
      navigation.navigate('BoardScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const allInputs = {
    mode: 'outlined',
    label: '',
    style: [styles.mb3],
    returnKeyType: 'next'
  };

  return {
    onCreateTask,
    inputs: {
      title: {
        ...allInputs,
        value: title,
        onChangeText: (text) => setDispatch({type: REDUCER_ACTIONS.TASK_INPUT, payload: {field: 'title', value: text}}),
        placeholder: 'Design team meeting',
        error: errors.filter(err => err === 'title').length > 0
      },
      deadLine: {
        ...allInputs,
        value: deadLine,
        onChangeText: (text) => setDispatch({type: REDUCER_ACTIONS.TASK_INPUT, payload: {field: 'deadLine', value: text}}),
        placeholder: '',
        error: errors.filter(err => err === 'deadLine').length > 0
      }
    }
  }


}

export default useTask;