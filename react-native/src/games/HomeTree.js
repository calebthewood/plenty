import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SnapTo } from '../components/SnapTo';
import SpringToOrigin from '../components/SpringToOrigin';

/*
Until I refactor the button to be more customizable, the button naming scheme is as follows:

Button[Type][Shape][Size]
  ex: Button[Tree][Round][Medium] which I abbreviate to 'ButtonTRM'
*/

export function HomeTree() {
  const background = require('../../assets/landscape/home-tree-2.png');
  const canopy = require('../../assets/trees/canopy-layered-paper.png');
  const basket = require('../../assets/misc/basket.png');

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.canopy} source={canopy} />
        <View style={styles.coins}>
        <SpringToOrigin />
        <SpringToOrigin />
        <SpringToOrigin />
        <SpringToOrigin />
        </View>
        <Image resizeMode="contain" style={styles.basketOne} source={basket} />
        {/* <Image resizeMode="contain" style={styles.basketTwo} source={basket} /> */}
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
    backgroundColor: '#210f038c',
    zIndex: 1,
  },
  canopy: {
    position: 'absolute',
    flex: 1,
    top: -190,
    left: 0,
    width: 800,
  },
  basketOne: {
    position: 'absolute',
    flex: 1,
    top: 250,
    left: 300,
    width: 130,
    height: 120,
    // borderWidth: 1,
  },
  basketTwo: {
    position: 'absolute',
    flex: 1,
    top: 260,
    left: 360,
    width: 130,
    height: 120,
    // borderWidth: 1,
  },
  coins: {
    top: -130,
    width: 500,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
});
