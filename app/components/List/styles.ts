import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 16,
    color: '#343234'
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '#e2e2e2',
    flex: 1,
    height: StyleSheet.hairlineWidth
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconVisible: {
    backgroundColor: '#4F607A'
  },
  checkIcon: {
    width: 18
  }
});

export default styles;
