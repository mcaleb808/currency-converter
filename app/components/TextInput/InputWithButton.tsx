import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, textColor } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonContainer}
        underlayColor={'#d3d3d3'}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

export default InputWithButton;
