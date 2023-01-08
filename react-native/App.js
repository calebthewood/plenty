import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import SpringToOrigin from './SpringToOrigin';
import DragNDrop from './DragNDrop';
import SnapTo from './SnapTo';

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
        <SnapTo />
        <SnapTo />
        <SnapTo />
      </View>
      <StatusBar style="auto" hidden={true} />
    </View >
  );
}

