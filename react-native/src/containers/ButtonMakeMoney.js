import React, { useState } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';


export function ButtonMakeMoney({navigateTo}) {
  console.log("#####\n ButtonMakeMoney");
  const [pressed, setPressed] = useState(false);
  const treeImg = require('../../assets/trees/tree-big-oak.png');
  const mushroomImg = require('../../assets/structures/mushroom-house-2.png');



  return (
    <Pressable
      accessibilityLabel="Visit your investment"
      onPressIn={() => setPressed(true)}
      onPressOut={() => {
        setPressed(false)
        navigateTo('HomeTree')
      }}
      style={pressed ? StyleSheet.compose(
        styles.container, styles.pressed)
        : styles.container}>
      <Image
        resizeMode="contain"
        source={treeImg}
        style={pressed ? StyleSheet.compose(
          styles.tree, styles.pressed) : styles.tree} />
      <Image
        resizeMode="contain"
        source={mushroomImg}
        style={pressed ? StyleSheet.compose(
          styles.mushroom, styles.pressed) : styles.mushroom} />
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
    width: 80,
  },
  tree: {
    position: 'relative',
    height: 140,
    width: 130,
    top: 61,
    zIndex: 1,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'black',
  },
  mushroom: {
    position: 'relative',
    height: 35,
    width: 35,
    top: 31,
    left: 10,
    zIndex: 2,
    // borderWidth: 1,
  },
  base: {
    width: 45,
    height: 45,
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
    // border: 'none',
    // borderStyle: 'solid',
    borderRadius: 50,
    width: 45,
    height: 45,
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
    top: 98,
    left: -12,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "0deg" },
      { skewX: '30deg' }]
  },
  shadowPressed: {
    top: 104,
    left: -12,
  }
});
