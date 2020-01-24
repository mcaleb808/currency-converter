import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    borderRadius: 4
  },
  containerDisabled: {
    backgroundColor: '#d3d3d3'
  },
  buttonContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '#4F607A'
  },
  border: {
    height: 48,
    backgroundColor: '#e2e2e2',
    width: StyleSheet.hairlineWidth
  },
  input: {
    flex: 1,
    color: '#797979',
    height: 48,
    fontSize: 18,
    paddingHorizontal: 8
  }
});

export default styles;
