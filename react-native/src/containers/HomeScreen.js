import { View, ImageBackground, StyleSheet } from 'react-native';
import { BigButton } from './BigButton';
import { StatusBar } from 'expo-status-bar';


export function HomeScreen() {
  const backgroundImg = require('../../assets/landscape/demo-homescreen.png');

  return (
    <ImageBackground
      source={backgroundImg}
      resizeMode="cover"
      style={styles.background}>

      <View style={styles.container}>
        <BigButton />
      </View>

      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: "#d63031",
    borderStyle: "solid",
  },
});
