import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Draggable from './Draggable';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <Draggable />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

