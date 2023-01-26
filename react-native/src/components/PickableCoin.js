import { useState, useRef } from 'react';
import { View, StyleSheet, Animated, Text, PanResponder } from 'react-native';


export function PickableCoin({ handleMoney, coords, basketLayout }) {

  const [showing, setShowing] = useState(true);

  function hideCoin() {
    setShowing(false);
  }

  function coinInBasket(coinX, coinY, basketLayout) {
    const { x, y, height, width } = basketLayout;
    const cushion = 20; // make it easier to get in basket
    const inXrange = coinX + cushion > x && coinX - cushion < x + width;
    const inYrange = coinY + cushion > y && coinY - cushion < y + height;
    return inXrange && inYrange;
  }

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
        ], { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, { moveX, moveY, x0, y0, dx, dy }) => {
        // useWindowDimensions to check if coin is within the height and width
        // of the bottom center of the screen. ie, where the basket will be
        let newX = 0;
        let newY = 0;
        if (basketLayout && coinInBasket(moveX, moveY, basketLayout)) {
          newX = 333 - (moveX - dx);
          newY = 320 - (moveY - dy);
          handleMoney();
        }
        Animated.spring(pan, {
          toValue: { x: newX, y: newY },
          useNativeDriver: false,
        }).start();
      }
    })
  ).current;

  if (!showing) return null;
  return (
    <Animated.View
      style={{
        top: coords.y, left: coords.x, position: coords.position,
        transform: [{ translateX: pan.x }, { translateY: pan.y }]
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.box} />
      <Text style={styles.coinText}>$</Text>
    </Animated.View>);
}

const styles = StyleSheet.create({
  coinText: {
    top: -44,
    left: 22,
    fontSize: 24,
    width: 18,
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