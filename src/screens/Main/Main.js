import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

import {fetchAllCoinsPromise} from '../../services/coinAPIServices';
import ApiError from '../../components/ApiError/ApiError';
import CoinCard from '../../components/CoinCard/CoinCard';
import styles from './MainStyles';

function Main({navigation}) {
  const [coinsArray, setCoinsArray] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);

  const fetchCoins = () => {
    setLoading(true);
    return fetchAllCoinsPromise()
      .then(res => {
        setLoading(false);
        errorStatus && setErrorStatus(false);
        setCoinsArray(res.data);
        return res.data;
      })
      .catch(() => {
        setErrorStatus(true);
      });
  };

  const monitoreCoinPrice = () => {
    if (coinsArray) {
      // Count the amount of responses and update the state on condition
      let countResponses = 0;

      const pricesWs = new WebSocket(
        'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,binance-coin,cardano,tether,solana,xrp,polkadot,usd-coin,dogecoin,terra-luna,uniswap,avalanche,binance-usd,algorand',
      );
      // Find updated coins by name and update state with them
      pricesWs.onmessage = function (msg) {
        countResponses += 1;
        if (countResponses % 9 === 0) {
          setCoinsArray(
            coinsArray.map(coin => {
              return msg.data.includes(coin.name.toLowerCase())
                ? {
                    ...coin,
                    priceUsd: JSON.parse(msg.data)[coin.name.toLowerCase()],
                  }
                : coin;
            }),
          );
        }
      };
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCoins();
    }, 5000);
    return () => clearTimeout(fetchCoins);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      monitoreCoinPrice();
    }, 5000);
    return () => clearTimeout(monitoreCoinPrice);
  }, [coinsArray]);

  return (
    <SafeAreaView style={styles.mainBackground}>
      {loading && (
        <ActivityIndicator
          style={{marginTop: '20%'}}
          size={'large'}
          color="#1890ff"
        />
      )}
      {errorStatus && <ApiError retryHandler={() => fetchCoins()} />}
      {coinsArray && !loading && !errorStatus && (
        <FlatList
          data={coinsArray}
          renderItem={({item}) => (
            <CoinCard
              navigateToCoin={() => navigation.navigate('Detailed')}
              coin={item}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default Main;
