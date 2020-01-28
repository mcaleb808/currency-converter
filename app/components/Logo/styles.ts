import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: screenWidth
  },
  image: {
    width: screenWidth / 2,
    tintColor: '#4F607A'
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -0.5,
    marginTop: 15,
    color: '#fff'
  }
});

export default styles;
