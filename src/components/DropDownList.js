import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Text, ScrollView, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/styles';

const DropDownList = (props) => {
  const { defaultText, onPress } = props;
  const [showLocations, setShowLocations] = useState(false);

  const onPressDropDown = () => {
    setShowLocations(true);
    onPress()
  }
  return (
    <TouchableWithoutFeedback onPress={onPressDropDown}>
      <View style={[styles.ViewDropDown]}>
        <Text style={[styles.textSize16, styles.flex1]}>{defaultText}</Text>
        <AntDesign name={showLocations ? 'caretup' : 'caretdown'} size={14} color={'gray'} />
      </View>
    </TouchableWithoutFeedback>
  )
}

DropDownList.propTypes = {
  defaultText: PropTypes.string
};

DropDownList.defaultProps = {
  defaultText: 'Select',
}

export default DropDownList;
