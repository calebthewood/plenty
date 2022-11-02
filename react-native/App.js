import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Draggable from './Draggable';

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      <GameEngine
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          Bottom: 0,
        }} />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

