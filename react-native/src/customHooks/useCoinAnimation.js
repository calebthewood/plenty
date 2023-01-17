import { useRef } from "react";
import { PanResponder, Animated, useWindowDimensions } from "react-native";

// Consider connecting this to the coin sizes in game component, 1SoT
const COIN_RADIUS = 30
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
export function useCoinAnimation(hideCoin, updateBasket) {
  const { height, width } = useWindowDimensions();

  function coinInBasket(x,y) {
    const top = height - BASKET_HEIGHT;
    const bottom = height;
    const left = width / 2 - BASKET_WIDTH / 2;
    const right = width / 2 + BASKET_WIDTH / 2;
    console.log("coinInBasket: ", (x > left && x < right && y < bottom && y > top));
    return (x > left && x < right && y < bottom && y > top)
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
      onPanResponderRelease: (evt, { moveX, moveY }) => {
        // useWindowDimensions to check if coin is within the height and width
        // of the bottom center of the screen. ie, where the basket will be
          if (coinInBasket(moveX,moveY)) {
            hideCoin()
            updateBasket()
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: false,
            }).start();
          }
      }
    })
  ).current;

  return [pan, panResponder];
}