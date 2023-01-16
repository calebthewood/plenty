import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  PanResponder,
  LayoutAnimation,
  Animated,
  StyleSheet
} from 'react-native';

export function SnapTo() {
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
        // Applies the added value from release to the offset.
        pan.setOffset({
          x: pan.x._value + pan.x._offset,
          y: pan.y._value + pan.y._offset
        });
      },
      // Runs every frame that a movement is detected
      // appears to do the same as the method used in SnapToOrigin
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
        let newX, newY;
        if (pan.x._value < 40 && pan.x._value > -40
          && pan.y._value < 40 && pan.y._value > -40) {
            newX = 0;
            newY = 0;
        } else if (pan.x._value > 0 && pan.y._value > 0) {
          newX = 100;
          newY = 100;
        } else if (pan.x._value > 0 && pan.y._value < 0) {
          newX = 100;
          newY = -100;
        } else if (pan.x._value < 0 && pan.y._value < 0) {
          newX = -100;
          newY = -100;
        } else if (pan.x._value < 0 && pan.y._value > 0) {
          newX = -100;
          newY = 100;
        }
        Animated.spring(pan, {
          toValue: {
            x: newX,
            y: newY
          },
          useNativeDriver: false,
        }).start();
      }
    })
  ).current;


  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.box} />
      <Text style={styles.coinText}>$</Text>
    </Animated.View>
  );
};
