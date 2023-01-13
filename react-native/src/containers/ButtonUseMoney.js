import React, { useState } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';


export function ButtonUseMoney() {

  const [pressed, setPressed] = useState(false);
  const marketImg = require('../../assets/structures/market-stall-1.png');
  const chartImg = require('../../assets/misc/charts.png');

  return (
    <Pressable
      accessibilityLabel="Visit your investment"
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={pressed ? StyleSheet.compose(
        styles.container, styles.pressed)
        : styles.container}>
      <Image
        resizeMode="contain"
        source={marketImg}
        style={pressed ? StyleSheet.compose(
          styles.market, styles.pressed) : styles.market} />
      <Image
        resizeMode="contain"
        source={chartImg}
        style={pressed ? StyleSheet.compose(
          styles.chart, styles.pressed) : styles.chart} />
      <View
        style={pressed ? StyleSheet.compose(
          styles.base, styles.basePressed) : styles.base}>
      </View>
      <View style={pressed ? StyleSheet.compose(
        styles.shadow, styles.shadowPressed) : styles.shadow}></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black',
  },
  market: {
    position: 'relative',
    height: 80,
    width: 80,
    top: 40,
    left: -10,
    zIndex: 1,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black',
  },
  chart: {
    position: 'absolute',
    height: 35,
    width: 35,
    top: 62,
    left: 70,
    zIndex: 2,
    // borderWidth: 1,
  },
  base: {
    width: 70,
    height: 60,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderRadius: 20,
    transform: [
      { rotate: "-30deg" },
      { skewX: '48deg' }
    ],
  },
  basePressed: {
    backgroundColor: '#849D4B',
    border: 'none',
    borderStyle: 'solid',
    borderRadius: 10,
    width: 45,
    height: 63,
    borderTopColor: '#542E10', // light brown
    borderTopWidth: 5,
    borderRightColor: '#7C472B', //dark brown
    borderRightWidth: 5,
    borderBottomColor: '#BAD070',
    borderBottomWidth: 0,
    borderLeftColor: '#9D5B35',
    borderLeftWidth: 0,
  },
  pressable: {
    position: 'relative',
  },
  pressed: {
    transform: [
      { translateY: 5 },
    ],
  },
  shadow: {
    position: 'absolute',
    backgroundColor: '#21210310',
    borderRadius: 6,
    borderTopEndRadius: 50,
    height: 55,
    width: 40,
    top: 58,
    left: 13,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "-30deg" },
      { skewX: '48deg' }]
  },
  shadowPressed: {
    top: 62,
    left: 25,
  }
});
