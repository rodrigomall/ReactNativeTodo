import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Subheading, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';
import useTask from './hooks/useTask';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownList from '../../components/DropDownList';

const Task = ({navigation}) => {
  const { onCreateTask, inputs} = useTask(navigation);
  const [deadLine, setDeadLine] = useState(new Date().toISOString().substring(0, 10))
  const backToBoard = () => {
    navigation.navigate('BoardScreen');
  }
  const createTask = () => {
    onCreateTask();
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateDeadLine = date.toISOString().substring(0, 10);
    console.warn("A date has been picked: ", dateDeadLine);
    setDeadLine(dateDeadLine);
    hideDatePicker();
  };

  const onPressDeadLine = () => {
    console.log('onPressDeadLine');
    setDatePickerVisibility(true);
  }

  const propsDeadLine = {
    onPress: onPressDeadLine,
    defaultText: deadLine
  }

  return (
    <>
    <ScrollView style={[styles.bgWhite, styles.p5, styles.m5]}>
      <View style={[styles.navBar]}>
        <View style={[styles.p5]}>
          <TouchableOpacity onPress={backToBoard}>
            <Ionicons name='ios-chevron-back-outline' size={30} color='gray' />
          </TouchableOpacity>
        </View>
        <View style={[styles.container]}>
          <Text style={[styles.title]}> Add task </Text>
        </View>
      </View>
      <View style={[styles.p5, styles.m5]}>
        <View>
          <Subheading>Title </Subheading>
          <TextInput {...inputs.title}/>
        </View>
        <View>
          <Subheading>Deadline </Subheading>
          <View>
            <DropDownList {...propsDeadLine} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View style={[styles.horizontalSpace, styles.pv4]}>
          <View>
            <Subheading>Start Time </Subheading>
            <TextInput {...inputs.title}/>
          </View>
          <View>
            <Subheading>End Time </Subheading>
            <TextInput {...inputs.title}/>
          </View>
        </View>
        <View>
          <Subheading>Remind </Subheading>
          <TextInput {...inputs.title}/>
        </View>
        <View>
          <Subheading>Repeat </Subheading>
          <TextInput {...inputs.title}/>
        </View>
      </View>
    </ScrollView>
    <View style={[styles.bgWhite, styles.p5, styles.m5]}>
      <Button title='Create a Task' onPress={createTask} color='#46c97d' />
    </View>
  </>
  )
};

export default Task;