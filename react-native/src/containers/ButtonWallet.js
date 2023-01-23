import React, { useState } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';


export function ButtonWallet() {
  console.log("##### ButtonWallet");
  const [pressed, setPressed] = useState(false);
  const walletImg = require('../../assets/misc/wallet-3.png');

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
        source={walletImg}
        style={pressed ? StyleSheet.compose(
          styles.wallet, styles.pressed) : styles.wallet} />
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
    height: 80,
    width: 80,
  },
  wallet: {
    position: 'relative',
    height: 80,
    width: 70,
    top: 50,
    zIndex: 1,
  },
  base: {
    width: 70,
    height: 60,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderRadius: 20,
    transform: [
      { rotate: "-30deg" },
      { skewX: '25deg' }
    ],
  },
  basePressed: {
    backgroundColor: '#849D4B',
    border: 'none',
    borderStyle: 'solid',
    borderRadius: 50,
    width: 70,
    height: 65,
    borderTopColor: '#9D5B35', // light brown
    borderTopWidth: 5,
    borderRightColor: '#7C472B', //dark brown
    borderRightWidth: 5,
    borderBottomColor: '#BAD070',
    borderBottomWidth: 0,
    borderLeftColor: '#9D5B35',
    borderLeftWidth: 1,
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
    borderRadius: 50,
    // borderBottomEndRadius: 15,
    height: 60,
    width: 70,
    top: 53,
    left: -10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 3,
    transform: [
      { rotate: "-20deg" },
      { skewX: '45deg' }]
  },
  shadowPressed: {
    top: 56,
    height: 50,
    width: 50,
  }
});
