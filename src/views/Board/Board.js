import React from 'react';
import BoardContent from './BoardContent';
import BoardTop from './BoardTop';
import { View } from 'react-native';
import styles from '../../styles/styles';

const Board = ({navigation}) => {
  const props = {
    navigation
  }
  return (
    <View style={[styles.bgWhite]}>
      <BoardTop {...props} />
      <BoardContent {...props}  />
    </View>
  )
}

export default Board;
