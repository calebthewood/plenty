import { Image, View, StyleSheet, Pressable } from "react-native";

/** Accepts a a relative path and renders an image of a figure sized
 * for the an interactive, up- close view.
 *
 */
export function MarketFigure({ figureImg, bubbleImg }) {
  const wordBubble = require('../../assets/misc/word-bubble-generic-idea.png')
  return (
    <Pressable >
      <Image resizeMode="contain" style={styles.wordBubble} source={bubbleImg}></Image>
      <Image resizeMode="contain" style={styles.figure} source={figureImg}></Image>
      <View style={styles.shadow}></View>
    </Pressable>);
}

const styles = StyleSheet.create({
  pressable: {
    position: 'relative',
    alignItems: 'flex-end',
    bottom: 0,
  },
  figure: {
    height: 180,
    width: 150,
    // borderWidth: 1,
    alignSelf: 'flex-end',
    zIndex: 2,
  },
  shadow: {
    position: 'absolute',
    // borderWidth: 1,
    zIndex: 1,
    backgroundColor: '#21210310',
    borderRadius: 50,
    alignSelf: 'center',
    height: 60,
    width: 60,
    bottom: -25,
    // left: 40,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "-30deg" },
      { skewX: '45deg' }]
  },
  wordBubble: {
    // borderWidth: 1,
    width: 90,
    height: 90,
    left: -20,
  }
});