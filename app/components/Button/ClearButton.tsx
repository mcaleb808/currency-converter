import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image
        source={require('../../images/icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default ClearButton;
