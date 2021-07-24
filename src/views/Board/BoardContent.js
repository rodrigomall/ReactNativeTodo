import React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';

const BoardContent = (props) => {
  const { navigation } = props;
  const boardLists = useSelector(({board}) => board.boardLists);
  const onChangeAll = () => {

  }

  const addTask = () => {
    navigation.navigate('TaskScreen');
  }

  const onCheck = () => {

  };

  const tasksList = boardLists.map((t, i)=> (
    <View key={`task_${i}`} style={[styles.row, styles.p5, styles.m5]}>
      <View>
        <Checkbox color={'red'} status={t.isChecked ? 'checked' : 'unchecked'} onPress={() => onCheck(t)} />
      </View>
      <View style={[styles.flex1]}>
        <Text style={[styles.textSize18]}>{t.title}</Text>
      </View>
    </View>
  ));

  return (
    <View style={[styles.bgWhite]} >
      <View style={[styles.navBar, styles.borderPrimary, styles.pv4]}>
        <View style={[styles.containerCenter]}>
          <TouchableHighlight onPress={onChangeAll}>
            <Text style={[styles.subTitle]}>All</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.containerCenter]}>
          <Text style={[styles.subTitle]}>
            Completed
          </Text>
        </View>
        <View style={[styles.containerCenter]}>
          <Text style={[styles.subTitle]}>
            Uncompleted
          </Text>
        </View>
        <View style={[styles.containerCenter]}>
          <Text style={[styles.subTitle]}>
            Favorite
          </Text>
        </View>
      </View>
      {tasksList}
      <View style={[styles.p5, styles.m5]}>
        <TouchableOpacity
          onPress={addTask}
          style={[styles.roundButton]}>
          <Text style={[styles.textButton]}>Add a task</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BoardContent;
