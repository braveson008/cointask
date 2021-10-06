import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 6,
    padding: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  coinImage: {
    height: 50,
    width: 50,
  },
  coinText: {
    color: '#222',
    // width: '35%',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: '5%',
  },
});

export default styles;
