import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  PanResponder,
  LayoutAnimation,
  Animated,
  StyleSheet
} from 'react-native';

function SnapTo() {
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


  // let newX = pan.x._value > 0 ? 200 :
  //   pan.x._value < 0 ? -200 : 0;

  // let newY = pan.y._value > 0 ? 200 :
  //   pan.y._value < 0 ? -200 : 0;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
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
        // console.log("*** pan: ", pan);
        let newX = pan.x._value > 0 ? 100 : pan.x._value < 0 ? -100 : 0;
        let newY = pan.y._value > 0 ? 200 : pan.y._value < 0 ? -300 : 0;
        pan.flattenOffset();
        Animated.spring(pan, {
          toValue: { x: newX, y: newY },
          useNativeDriver: false,
        }).start();
        pan.flattenOffset();
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
      <Text style={styles.coinText}>S</Text>
    </Animated.View>
  );
};

export default SnapTo;