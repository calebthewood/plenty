import React, { useState } from 'react';
import { Pressable, View, Alert, Image, StyleSheet } from 'react-native';
import { styles } from './buttonStyles.js';


export function BigButton() {

  const [pressed, setPressed] = useState(false);
  const treeImg = require('../../assets/trees/tree-round-3.png');

  return (
    <Pressable
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
      <View
        accessibilityLabel="Describe btn action here"
        style={pressed ? StyleSheet.compose(
          styles.base, styles.basePressed)
          : styles.base}>
      </View>
    </Pressable>
  );
}

