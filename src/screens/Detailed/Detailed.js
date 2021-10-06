import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';

import {useSelector} from 'react-redux';

import styles from './DetailedStyles';

function Detailed({navigation}) {
  const coin = useSelector(state => state.coin.coinInfo);
  return (
    <SafeAreaView style={styles.mainBackground}>
      <TouchableOpacity
        style={styles.goBckBtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.goBckBtnTxt}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.coinInfoCont}>
        {/* Coin image and name */}
        <View style={styles.headerCont}>
          <Image
            style={styles.coinImage}
            source={{
              uri: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
            }}
          />
          <Text style={styles.coinTtl}>{coin.name}</Text>
        </View>
        {/* Other information */}
        {/* I am not using Object.keys/Object.values because
            I want to keep everything simple */}
        <Text style={styles.coinTxt}>Rank: {coin.rank}</Text>
        <Text style={styles.coinTxt}>Symbol: {coin.symbol}</Text>
        <Text style={styles.coinTxt}>
          Current Price: {+(+coin.priceUsd).toFixed(2)}$
        </Text>
        <Text style={styles.coinTxt}>
          Market cap: {+(+coin.marketCapUsd).toFixed(2)}$
        </Text>
        <Text style={styles.coinTxt}>
          Max supply: {+(+coin.maxSupply).toFixed(2)}$
        </Text>
        <Text style={styles.coinTxt}>
          Supply: {+(+coin.supply).toFixed(2)}$
        </Text>
        <Text style={styles.coinTxt}>
          24h change: {+(+coin.volumeUsd24Hr).toFixed(2)}$
        </Text>
        <Text style={styles.coinTxt}>
          vwap24Hr: {+(+coin.vwap24Hr).toFixed(2)}$
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default Detailed;
