import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './ApiErrorStyles';

function ApiError({retryHandler}) {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.errorTxt}>API call failed try again</Text>
      <TouchableOpacity
        onPress={() => retryHandler()}
        style={styles.tryAgainBtn}>
        <Text style={styles.tryAgainBtnTxt}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ApiError;
