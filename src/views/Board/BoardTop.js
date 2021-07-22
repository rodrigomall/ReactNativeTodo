import React from 'react';
//import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';

const BoardTop = () => {
  return (
    <View style={[styles.navBar]}>
      <View style={[styles.container]}>
        <Text style={[styles.title]}> Board </Text>
      </View>
      <View style={[styles.p5]}>
        <Ionicons name='search-outline' size={30} color='gray' />
      </View>
      <View style={[styles.p5]}>
        <Ionicons name='notifications-outline' size={30} color='gray' />
      </View>
      <View style={[styles.p5]}>
        <Ionicons name='menu-outline' size={30} color='gray' />
      </View>
    </View>
  )
}

export default BoardTop;
