import { useRef, useState } from "react";
import { PanResponder, Animated, useWindowDimensions } from "react-native";


/**
 * Creates and returns an Animated ValueXY and accompanying PanResponder
 * to animate a view that will snap back to it's origin unless released within a
 * box of coordinates.
 *
 * TODO: make more generic, 'drag to point and dissapear' animation
 *
 */
export function useCoinAnimation(hideCoin, handleMoney, basketLayout) {
  const { height, width } = useWindowDimensions();

  function coinInBasket(coinX, coinY, basketLayout) {
    const { x, y, height, width } = basketLayout;
    const cushion = 20; // makes it easier to get in basket
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
        console.log("useCoinAnimation Basket: ", basketLayout);
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

  return [pan, panResponder];
}