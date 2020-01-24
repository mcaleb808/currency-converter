import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  selected = false,
  onPress,
  visible = true,
  checkmark = true,
  customIcon = null,
  iconBackground = '#4F6D7A'
}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#e2e2e2">
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon
          checkmark={checkmark}
          visible={visible}
          iconBackground={iconBackground}
        />
      ) : null}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default ListItem;
