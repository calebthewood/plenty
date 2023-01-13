import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 80,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#2c3e50', // grey
  },
  tree: {
    position: 'relative',
    height: 120,
    width: 80,
    top: 23,
    zIndex: 1,
    transitionDuration: '0.4s',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#e74c3c', // red
    // shadowColor: '#212121',
    // shadowOffset: { width: -20, height: 40 },
    // shadowOpacity: .4,
    // shadowRadius: 10,
  },
  base: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#8db963', // green
    backgroundColor: 'transparent',
    borderRadius: 20,
    transform: [
      { rotate: "-30deg" },
      { skewX: '25deg' }
    ],
  },
  basePressed: {
    backgroundColor: '#A7BC5B',
    border: 'none',
    borderStyle: 'solid',
    borderRadius: 20,
    width: 30,
    height: 30,
    borderTopColor: '#9D5B35', // light brown
    borderTopWidth: 5,

    borderRightColor: '#7C472B', //dark brown
    borderRightWidth: 5,

    borderBottomColor: '#BAD070',
    borderBottomWidth: 0,

    borderLeftColor: '#9D5B35',
    borderLeftWidth: 1,
  },
  pressable: {
    position: 'relative',
  },
  pressed: {
    transform: [
      { translateY: 5 },
    ],
  },
  shadow: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#e74c3c', // red
    position: 'absolute',
    backgroundColor: '#21210310',
    borderRadius: 20,
    borderBottomEndRadius: 15,
    height: 40,
    width: 45,
    top: 84,
    left: 0,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "0deg" },
      { skewX: '30deg' }]
  }
});

/* Glow Effect, scrap if issues arise */
/* .pressable {
  transition-duration: 0.4s,
}

.pressable:after {
  content: "",
  display: block,
  position: absolute,
  border-radius: 4em,
  left: 0,
  top:0,
  width: 100%,
  height: 100%,
  opacity: 0,
  transition: all 0.2s,
  box-shadow: 0 0 10px 20px goldenrod,
}

.pressable:active:after {
  box-shadow: 0 0 0 0 goldenrod,
  position: absolute,
  border-radius: 4em,
  left: 0,
  top:0,
  opacity: 1,
  transition: 0s,
} */