import React, { useState } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';

export function ButtonTRM() {

  const [pressed, setPressed] = useState(false);
  const treeImg = require('../../assets/trees/tree-round-3.png');
  const figureImg = require('../../assets/figures/figure-girl-purple.png');

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
        source={treeImg}
        style={pressed ? StyleSheet.compose(
          styles.tree, styles.pressed)
          : styles.tree} />
      <Image
        resizeMode="contain"
        source={figureImg}
        style={pressed ? StyleSheet.compose(
          styles.figure, styles.pressed) : styles.figure} />
      <View
        style={pressed ? StyleSheet.compose(
          styles.base, styles.basePressed)
          : styles.base}>
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
    height: 120,
    width: 80,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#2c3e50', // grey
  },
  tree: {
    position: 'relative',
    height: 120,
    width: 80,
    top: 23,
    zIndex: 1,
    transitionDuration: '0.4s',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#e74c3c', // red
    // shadowColor: '#212121',
    // shadowOffset: { width: -20, height: 40 },
    // shadowOpacity: .4,
    // shadowRadius: 10,
  },
  figure: {
    position: 'absolute',
    height: 35,
    width: 15,
    top: 92,
    left: 45,
    zIndex: 2,
    // borderWidth: 1,
  },
  base: {
    width: 45,
    height: 40,
    cursor: 'pointer',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#8db963', // green
    backgroundColor: 'transparent',
    borderRadius: 50,
    transform: [
      { rotate: "-30deg" },
      { skewX: '25deg' }
    ],
  },
  basePressed: {
    backgroundColor: '#A7BC5B',
    border: 'none',
    borderStyle: 'solid',
    borderRadius: 50,
    width: 45,
    height: 40,
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
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#e74c3c', // red
    position: 'absolute',
    backgroundColor: '#21210310',
    borderRadius: 20,
    borderBottomEndRadius: 15,
    height: 40,
    width: 45,
    top: 84,
    left: 0,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "0deg" },
      { skewX: '30deg' }]
  },
    shadowPressed: {
    top: 88,
    left: 10,
  }
});
