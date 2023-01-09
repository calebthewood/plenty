import React from 'react';
import { StyleSheet, Pressable, Button, View, SafeAreaView, Text, Alert } from 'react-native';


export function BigButton({btnLabel="Press Me"}) {

  return (
    <Pressable
      style={styles.pressable}
      accessibilityLabel="Describe btn action here"
      onPress={() => Alert.alert(btnLabel + "Button Pressed")}>
      <Text style={styles.text}>{btnLabel}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: '#0c2461', //Sapphire
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fad390', //flat flesh
  },
});
