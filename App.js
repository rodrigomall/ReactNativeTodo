
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import Board from './src/views/Board/Board';
import Task from './src/views/Task/Task';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const getDataStorage = async() => {
    try {
      //await AsyncStorage.clear();
      const tasksData = await AsyncStorage.getItem('taskInputStored');
      if(tasksData) {
        dispatch(setBoardData(JSON.parse(tasksData)));
      } else {
        dispatch(setBoardData([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getDataStorage();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Board'>
        <Stack.Screen name='BoardScreen' component={Board} />
        <Stack.Screen name='TaskScreen' component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
