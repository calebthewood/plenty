import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import SpringToOrigin from './SpringToOrigin';
import DragNDrop from './DragNDrop';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "skyblue"
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <SpringToOrigin />
        <DragNDrop />
      </View>
      <StatusBar style="auto" hidden={true} />
    </View >
  );
}

