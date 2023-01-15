import { useRef } from "react";
import { PanResponder } from "react-native";


/**
 * Creates and returns an Animated ValueXY and accompanying PanResponder
 * to animate a view that will snap back to it's origin unless released within a
 * box of coordinates.
 *
 * @param {*} props
 * @returns
 */
export function useCoinAnimation(onRelease) {
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
        console.log("*** moveX: ", moveX, " moveY: ", moveY);

        //if touching basket (method will need to be improved)
        if (moveX > 271 && moveX < 430 && moveY > 272 && moveY < 360) {
          // disappear
          // update state with += $1
          onRelease();
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