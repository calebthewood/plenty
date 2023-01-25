import { useRef } from "react";
import { PanResponder, Animated, useWindowDimensions } from "react-native";

// Consider connecting this to the coin sizes in game component, 1SoT
const COIN_RADIUS = 30;
const BASKET_WIDTH = 140 + COIN_RADIUS;
const BASKET_HEIGHT = 120 + COIN_RADIUS;

/**
 * Creates and returns an Animated ValueXY and accompanying PanResponder
 * to animate a view that will snap back to it's origin unless released within a
 * box of coordinates.
 *
 * TODO: make more generic, 'drag to point and dissapear' animation
 *
 * @param {*} props
 * @returns
 */
export function useCoinAnimation(hideCoin, handleMoney, basket) {
  const { height, width } = useWindowDimensions();

  function coinInBasket(coinX, coinY, basket) {
    const cushion = 20
    const inXrange = coinX + cushion > basket.x && coinX - cushion < basket.x + basket.width
    const inYrange = coinY + cushion > basket.y && coinY - cushion < basket.y + basket.width
    return inXrange && inYrange
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
        let newX = 0
        let newY = 0
        if (coinInBasket(moveX, moveY, basket)) {
          newX = 333 - (moveX - dx);
          newY = 320 - (moveY - dy);
          handleMoney();
        }
          Animated.spring(pan, {
            toValue: { x: newX, y: newY},
            useNativeDriver: false,
          }).start();
        }
    })
  ).current;

  return [pan, panResponder];
}