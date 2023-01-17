import { useState } from 'react';
import { View, StyleSheet, Animated, Text, } from 'react-native';
import { useCoinAnimation } from '../customHooks/useCoinAnimation';

export function PickableCoin({ updateBasket }) {
  const [showing, setShowing] = useState(true);
  const [pan, panResponder] = useCoinAnimation(() => setShowing(false), updateBasket);
  let xOffset = Math.floor(Math.random() * 20) * (Math.random() > .5 ? 1 : -1);
  let yOffset = Math.floor(Math.random() * 20) * (Math.random() > .5 ? 1 : -1);
  if (!showing) return null;
  return (
    <Animated.View
      style={{
        top: yOffset, left: xOffset,
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