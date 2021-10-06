import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styles from './CoinCardStyles';

import {useDispatch} from 'react-redux';
import {setSelectedCoin} from '../../redux/coins/actions';

function CoinCard({coin, navigateToCoin}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setSelectedCoin(coin));
        navigateToCoin();
      }}
      style={styles.coinContainer}>
      <Image
        style={styles.coinImage}
        source={{
          uri: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
        }}
      />
      <Text style={[styles.coinText, {width: '35%'}]}>
        ${+(+coin.priceUsd).toFixed(2)}
      </Text>
      <Text
        style={[
          styles.coinText,
          +coin.changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'},
        ]}>
        {+coin.changePercent24Hr > 0
          ? `+${+(+coin.changePercent24Hr).toFixed(2)}`
          : +(+coin.changePercent24Hr).toFixed(2)}
        %
      </Text>
    </TouchableOpacity>
  );
}

export default CoinCard;
