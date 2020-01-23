import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  selected = false,
  onPress,
  visible = true,
  checkmark = true
}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#e2e2e2">
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : null}
    </View>
  </TouchableHighlight>
);

export default ListItem;