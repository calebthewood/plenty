import React from 'react';
import { Pressable, View, Alert, Image } from 'react-native';
import { styles } from './buttonStyles.js';


export function BigButton({ btnLabel = "Press Me" }) {

  const icon = require('../../assets/trees/tree-round-3.png');


  return (
    <View style={styles.containerTree}>

      <Image
        style={styles.tree}
        resizeMode="contain"
        source={require('../../assets/trees/tree-round-3.png')} />

      <Pressable
        style={({ pressed }) => pressed ? styles.pressedTree : styles.pressableTree}
        accessibilityLabel="Describe btn action here"
        onPress={() => Alert.alert(btnLabel + "Button Pressed")}>

      </Pressable>
    </View>
  );
}

