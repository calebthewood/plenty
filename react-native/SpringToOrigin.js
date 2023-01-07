import React, { Component, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text
} from 'react-native';

export default function SpringToOrigin() {
  const styles = StyleSheet.create({
    coinText: {
      top: -43,
      left: 21,
      fontSize: 24,
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
        console.log("*** pan: ", pan);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
        <Text style={styles.coinText}>O</Text>
      </Animated.View>
    </View>
  );
};



