import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerTree: {
    left: 430,
    top: 110,
    position: 'relative',
  },

  translate: {
    transform: [
      { translateY: 5 },
    ],
  },

  tree: {
    position: 'relative',
    height: 120,
    left: -75,
    top: 20,
    zIndex: 1,
    transitionDuration: '0.4s',
  },

  //   transform: 'translateY(5px)',
  pressableTree: {
    position: 'relative',
    transform: [
      { rotate: "-30deg" },
      { skewX: '25deg' }
    ],
    width: 40,
    height: 40,
    borderWidth: '.5px',
    borderStyle: 'solid',
    borderColor: '#8db963',
    backgroundColor: '#B9CF71',
    borderRadius: 40,
  },

  pressedTree: {
    position: 'relative',
    width: 40,
    height: 40,
    backgroundColor: '#A7BE5D',
    transform: [
      { translateY: 5 },
      { rotate: '-30deg' },
      { skewX: '25deg' },
    ],
    cursor: 'pointer',
    border: 'none',
    borderRadius: 40,
    borderTopColor: '#9D5B35',
    borderTopWidth: 5,
    borderTopStyle: 'solid',
    borderRightColor: '#7C472B',
    borderRightWidth: '5px',
    borderRightStyle: 'solid',
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
  -webkit-transition-duration: 0.4s,
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