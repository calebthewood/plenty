import React, { Component, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text
} from 'react-native';

export default function Draggable() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
    },
    box: {
      height: 150,
      width: 150,
      backgroundColor: "goldenrod",
      borderRadius: 100,
      borderColor: "mustard",
    }
  });

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag Me!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
        <Text style={styles.titleText}>$</Text>
      </Animated.View>
    </View>
  );
}



