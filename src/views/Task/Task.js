import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Subheading, TextInput } from 'react-native-paper';
//import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';
import useTask from './hooks/useTask';

const Task = ({navigation}) => {
  const { onCreateTask, inputs} = useTask(navigation);
  const backToBoard = () => {
    navigation.navigate('BoardScreen');
  }
  const createTask = () => {
    onCreateTask();
  }

  return (
    <ScrollView>
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
        <TextInput {...inputs.title}/>
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
      <View>
        <Button title='Create a Task' onPress={createTask} color='#46c97d' />
      </View>
    </View>
  </ScrollView>
  )
};

export default Task;