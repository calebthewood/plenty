import { Pressable, View, Text, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export function useAnimatedList() {
  const [selected, setSelected] = useState(null);
  const [reset, setReset] = useState(false);

  // Custom offset values based on who is selected
  const frontOffsets = [30, -85, -200];
  //Each element is the set of offsets based on who is selected: 0,1,2
  const backOffsets = [
    [0, 380, 380],
    [50, 0, 190],
    [-140, -150, 0]];

  const scaleAnimations = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1)
  ]).current;

  const translateAnimations = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0)
  ]).current;


  useEffect(() => {
    if (selected === null) return;
    if (reset) {
      console.log("Reset: ", reset)
      setSelected(null)
      Animated.parallel([
        Animated.timing(scaleAnimations[selected], {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnimations[(selected + 1) % 3], {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnimations[(selected + 2) % 3], {
          toValue: 1,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[selected], {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[(selected + 1) % 3], {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[(selected + 2) % 3], {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        })
      ]).start();

    } else {
      console.log("selected: ", selected);
      Animated.parallel([
        Animated.timing(scaleAnimations[selected], {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnimations[(selected + 1) % 3], {
          toValue: 0.5,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnimations[(selected + 2) % 3], {
          toValue: 0.5,
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[selected], {
          toValue: frontOffsets[selected],
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[(selected + 1) % 3], {
          toValue: backOffsets[(selected + 1) % 3][selected],
          duration: 200,
          useNativeDriver: true
        }),
        Animated.timing(translateAnimations[(selected + 2) % 3], {
          toValue: backOffsets[(selected + 2) % 3][selected],
          duration: 200,
          useNativeDriver: true
        })
      ]).start();
    }

  }, [selected, reset]);

  return [scaleAnimations, translateAnimations, setSelected, setReset];
}