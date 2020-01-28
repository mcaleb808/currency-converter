import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';

const Logo = ({ tintColor }) => {
  const imageStyles = [styles.image, tintColor ? { tintColor } : null];
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../images/background.png')}
        style={styles.containerImage}
      >
        <Image
          resizeMode="contain"
          source={require('../../images/logo.png')}
          style={imageStyles}
        />
      </ImageBackground>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};
export default Logo;
