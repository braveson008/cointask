import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainCont: {
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  errorTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    fontStyle: 'italic',
  },
  tryAgainBtn: {
    width: 135,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1890ff',
    backgroundColor: '#1890ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  tryAgainBtnTxt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
