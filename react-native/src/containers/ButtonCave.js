import React, { useState } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';


export function ButtonCave() {

  const [pressed, setPressed] = useState(false);
  const caveImg = require('../../assets/structures/cave-entrance-small.png');

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
        source={caveImg}
        style={pressed ? StyleSheet.compose(
          styles.cave, styles.pressed)
          : styles.cave} />
      <View
        style={pressed ? StyleSheet.compose(
          styles.base, styles.basePressed)
          : styles.base}>
      </View>
      <View style={pressed ? StyleSheet.compose(
        styles.shadow, styles.pressed) : styles.shadow}></View>
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
  cave: {
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
    borderRadius: 20,
    // borderBottomEndRadius: 15,
    height: 50,
    width: 70,
    top: 50,
    left: -10,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "0deg" },
      { skewX: '30deg' }]
  }
});
