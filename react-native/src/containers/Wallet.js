import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SpringToOrigin } from '../components/SpringToOrigin';

export function Wallet({ wallet }) {
  console.log("##### Wallet");
  const { balance } = wallet;

  function generateCoins(count = 1) {
    const output = [];
    while (count <= 4) {
      output.push(count);
      count += 1;
    }
    return output;
  };

  const coins = generateCoins(1);
  // {/* <PickableCoin
  //         key={coin.key}
  //         updateBasket={coin.updateBasket}
  //         coords={coin.coords} />) */}

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'space-between', top: 20,}}>
        {coins.map((coin) => <SpringToOrigin key={`coin-${coin}`} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 100,
    backgroundColor: '#9b59b6',
    zIndex: 3,
    borderLeftWidth: 5,
    borderTopWidth: 1,
    borderTopStartRadius: 50,
    borderColor: '#6D214F'
  },
});
