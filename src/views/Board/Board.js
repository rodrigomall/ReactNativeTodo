import React from 'react';
import BoardContent from './BoardContent';
import BoardTop from './BoardTop';
import { View } from 'react-native';

const Board = ({navigation}) => {
  const props = {
    navigation
  }
  return (
    <View>
      <BoardTop {...props} />
      <BoardContent {...props}  />
    </View>
  )
}

export default Board;
