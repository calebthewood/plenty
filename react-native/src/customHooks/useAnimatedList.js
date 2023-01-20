import { Pressable, View, Text, Animated } from 'react-native';
import { useState, useEffect } from 'react';

export function useAnimatedList() {
  const [selected, setSelected] = useState(null);
  const [animations, setAnimations] = useState([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1)
  ]);

  useEffect(() => {
    if (selected === null) {
      return;
    }

    Animated.parallel([
      Animated.spring(animations[selected], {
        toValue: 1.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.spring(animations[(selected + 1) % 3], {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.spring(animations[(selected + 2) % 3], {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true
      }),
    ]).start();
  }, [selected]);

  return [animations, setSelected]
}