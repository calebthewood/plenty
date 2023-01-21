import { Pressable, View, Text, Animated, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export function TestAnimation() {
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

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
        <Pressable key={item + index} onPress={() => setSelected(index)}>
          <Animated.View style={{
            transform: [{ scale: animations[index] }],
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 100,
          }}>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>{item}</Text>
          </Animated.View>
        </Pressable>
      ))}
    </View>
  );
}