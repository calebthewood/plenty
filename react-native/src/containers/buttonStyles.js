import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#2c3e50', // grey
    alignItems: 'center',
    // height: 50,
    width: 80,
  },
  tree: {
    position: 'relative',
    height: 120,
    width: 80,
    // left: -75,
    top: 20,
    zIndex: 1,
    transitionDuration: '0.4s',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e74c3c', // red
  },
  base: {
    width: 40,
    height: 40,
    cursor: 'pointer',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#8db963', // green
    backgroundColor: 'transparent',
    borderRadius: 40,
    transform: [
      { rotate: "-30deg" },
      { skewX: '25deg' }
    ],
  },
  basePressed: {
    backgroundColor: '#A7BC5B',
    border: 'none',
    borderRightStyle: 'solid',
    borderRadius: 40,
    borderTopColor: '#9D5B35', // light brown
    borderTopWidth: 5,
    borderTopStyle: 'solid',
    borderRightColor: '#7C472B', //dark brown
    borderRightWidth: 5,
  },
  pressable: {
    position: 'relative',
  },
  pressed: {
    transform: [
      { translateY: 5 },
    ],
    shadowProp: {
      shadowColor: '#9CAA5D',
      shadowOffset: { width: -3, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    }
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