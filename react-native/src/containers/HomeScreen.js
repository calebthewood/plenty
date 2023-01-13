import { View, ImageBackground, StyleSheet } from 'react-native';
import { ButtonTRM } from './ButtonTRM';
import { ButtonCave } from './ButtonCave';
import { StatusBar } from 'expo-status-bar';

/*
Until I refactor the button to be more customizable, the button naming scheme is as follows:

Button[Type][Shape][Size]
  ex: Button[Tree][Round][Medium] which I abbreviate to 'ButtonTRM'
*/

export function HomeScreen() {
  const backgroundMid = require('../../assets/landscape/demo-homescreen.png');
  const backgroundEmpty = require('../../assets/landscape/homescreen-empty-2.png');

  return (
    <ImageBackground
      source={backgroundEmpty}
      resizeMode="cover"
      style={styles.background}>

      <View
        style={styles.container}>
        <View style={styles.treeOne}>
          <ButtonTRM />
        </View>
        <View style={styles.caveOne}>
          <ButtonCave />
        </View>

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
  treeOne: {
    position: 'relative',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 140,
    left: 150,
    top: 10,
  },
  caveOne: {
    position: 'relative',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 120,
    right: 270,
    bottom: 170,
  }
});
