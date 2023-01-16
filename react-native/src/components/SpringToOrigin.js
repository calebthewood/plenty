import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Text
} from 'react-native';

export default function SpringToOrigin({ basketCoords }) {
  const styles = StyleSheet.create({
    coinText: {
      top: -44,
      left: 22,
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

  const [showing, setShowing] = useState(true);
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
        ],{useNativeDriver: false}
      ),
      onPanResponderRelease: (evt, { moveX, moveY }) => {
        console.log("*** moveX: ", moveX, " moveY: ", moveY);

        //if touching basket (method will need to be improved)
        if (moveX > 271 && moveX < 430 && moveY > 272 && moveY < 360) {
          // disappear
          setShowing(false)
          // update state with += $1
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      }
    })
  ).current;

  return showing ? (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.box} />
      <Text style={styles.coinText}>$</Text>
    </Animated.View>)
    : null;

};



