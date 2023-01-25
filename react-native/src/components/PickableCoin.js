import { useState } from 'react';
import { View, StyleSheet, Animated, Text, } from 'react-native';
import { useCoinAnimation } from '../customHooks/useCoinAnimation';

export function PickableCoin({ handleMoney, coords, basket }) {
  const [showing, setShowing] = useState(true);
  console.log("P-Coin Basket: ", basket.y)
  function hideCoin() {
    setShowing(false);
  }

  const [pan, panResponder] = useCoinAnimation(hideCoin, handleMoney, basket);

  if (!showing) return null;
  return (
    <Animated.View
      style={{
        top: coords.y, left: coords.x, position: coords.position,
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.box} />
      <Text style={styles.coinText}>$</Text>
    </Animated.View>);
}

const styles = StyleSheet.create({
  coinText: {
    top: -44,
    left: 22,
    fontSize: 24,
    width: 18,
    fontWeight: "bold",
    color: "#d57e08",
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: "#ffbd0b",
    borderRadius: 100,

    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#212121",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 4,

    borderTopColor: "#ffd84c",
    borderLeftColor: "#ffd84c",
    borderRightColor: "#d57e08",
    borderBottomColor: "#d57e08",
  }
});