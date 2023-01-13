import { View, ImageBackground, StyleSheet } from 'react-native';
import { ButtonTRM } from './ButtonTRM';
import { ButtonCave } from './ButtonCave';
import { ButtonMakeMoney } from './ButtonMakeMoney';
import { ButtonUseMoney } from './ButtonUseMoney';
import { ButtonWallet } from './ButtonWallet';
import { StatusBar } from 'expo-status-bar';

/*
Until I refactor the button to be more customizable, the button naming scheme is as follows:

Button[Type][Shape][Size]
  ex: Button[Tree][Round][Medium] which I abbreviate to 'ButtonTRM'
*/

export function HomeScreen() {
  const backgroundMid = require('../../assets/landscape/demo-homescreen-mid-edit.png');
  const backgroundEmpty = require('../../assets/landscape/homescreen-empty-2.png');

  return (
    <ImageBackground
      source={backgroundMid}
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
        <View style={styles.makeMoney}>
          <ButtonMakeMoney />
        </View>

        <View style={styles.useMoney}>
          <ButtonUseMoney />
        </View>

        <View style={styles.wallet}>
          <ButtonWallet />
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
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 140,
    left: 380,
    top: 70,
  },
  caveOne: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 120,
    top: 0,
    left: 20,
  },
  makeMoney: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 120,
    left: 0,
    top: 110,
  },
  useMoney: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 100,
    height: 110,
    left: 240,
    top: 125,
  },
  wallet: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 100,
    height: 100,
    bottom: 15,
    right: -8,
  }
});
