import { Image, View, StyleSheet, Pressable, Animated, Text } from "react-native";
// const wordBubble = require('../../assets/misc/word-bubble-generic-idea.png');

/**
 * Renders an animated figure as part of a list to be
 * used on the Investor screen.
 */
export function MarketFigure({ investor, index, animatedValues, selected }) {
  const [scaleAnimations, translateAnimations, setSelected, resetFigures] = animatedValues;

  function handlePress(evt) {
    if (selected !== index) {
      setSelected(index);
    } else {
      resetFigures(true)
    }
    setTimeout(()=> resetFigures(false), 200)
  }

  return (
    <Animated.View
      style={{
        height: 270, justifyContent: "flex-end",
        transform: [
          { scale: scaleAnimations[index] },
          { translateX: translateAnimations[index].x },
          { translateY: translateAnimations[index].y }
        ]
      }}>
      <Pressable onPress={handlePress}>
        {selected == index ?
          null :
          <Image resizeMode="contain" style={styles.wordBubble} source={investor.idea}></Image>}

        <Image resizeMode="contain" style={styles.figure} source={investor.figure}></Image>
        <View style={styles.shadow}></View>
      </Pressable>
    </Animated.View>);
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
    // borderColor: '#FD7272',
    // alignSelf: 'flex-end',
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
  },
  ideaDetail: {
    width: 200,
    height: 90,
    backgroundColor: 'white',
    // position: 'absolute',
    left: 20,
    top: 5,
    borderRadius: 5,
    borderWidth: 3,
    opacity: .9,
    justifyContent: 'center',
    alignItems: 'center'
  }
});