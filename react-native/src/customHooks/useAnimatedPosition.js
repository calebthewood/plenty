import { Pressable, View, Text, Animated, useWindowDimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export function useAnimatedPosition(x = 0, y = 0) {
  const { width, height } = useWindowDimensions();
  const [selected, setSelected] = useState(null);
  const animations = useRef([
    new Animated.ValueXY(),
    new Animated.ValueXY(),
    new Animated.ValueXY()
  ]).current;

  useEffect(() => {
    if (selected === null) return;
    console.log("selected: ", selected);
    Animated.parallel([
      Animated.timing(animations[selected], {
        toValue: config.activeVal,
        duration: config.duration,
        useNativeDriver: true
      }),
      Animated.timing(animations[(selected + 1) % 3], {
        toValue: config.inactiveVal,
        duration: config.duration,
        useNativeDriver: true
      }),
      Animated.timing(animations[(selected + 2) % 3], {
        toValue: config.inactiveVal,
        duration: config.duration,
        useNativeDriver: true
      }),
    ]).start();
  }, [selected]);

  return [animations, setSelected];
}