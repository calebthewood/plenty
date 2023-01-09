import { View, Text  } from 'react-native';
import { useOrientation } from '../customHooks/useOrientation';

export function RotatingView() {
  const orientation = useOrientation();

  return (
    <View style={{ transform: [{ rotate: orientation === 'portrait' ? '90deg' : '0deg' }] }}>
      <Text style={{color: orientation === 'portrait' ? 'red' : 'blue'}}>{`The device is in ${orientation} mode`}</Text>
    </View>
  );
};