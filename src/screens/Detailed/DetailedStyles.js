import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: 'aliceblue',
    width: Dimensions.get('screen').width,
    flex: 1,
    alignItems: 'center',
  },
  coinImage: {
    width: 80,
    height: 80,
  },
  coinInfoCont: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 6,
    backgroundColor: '#fff',
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
  goBckBtn: {
    alignSelf: 'flex-start',
    margin: '3%',
  },
  goBckBtnTxt: {
    color: '#1890ff',
    fontSize: 20,
    fontWeight: '600',
  },
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
    marginTop: '5%',
  },
  coinTtl: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    alignSelf: 'center',
  },
  coinTxt: {
    color: '#222',
    fontSize: 20,
    width: '100%',
    alignSelf: 'center',
    margin: '2%',
    fontWeight: '600',
  },
});

export default styles;
